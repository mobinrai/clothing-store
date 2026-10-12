import { blue, cyan } from "@mui/material/colors"
import StyledButton from "../../../shared/styled/StyledButton"
import AdminSection from "../share/AdminSection"
import { useGeneric } from "../hooks/useGenericState"
import { fetchAllProducts } from "../queries/allAdminQueries"
import Loader from "../../../shared/Loader"
import { IconButton, Pagination, Stack, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import GlobalModal, { useGlobalModal } from "../../../../provider/GlobalModal"
import type { ProductItem } from "../types"
import React, { useState, type ReactNode } from "react"
import {Close } from "@mui/icons-material"
import useApiMutation from "../../../../api/useApiMutation"
import { getImages } from "../adminUtils"
import ProductTableBody from "./ProductTableBody"
import useCriteria from "../../../../hooks/useCriteria"
import Criteria from "../share/Criteria"

const index = () => {
    const {debounceSearch,criteria,handleCriteriaChange}=useCriteria()
    const {navigate,titleAndContent,setTitleAndContent, queryClient} = useGeneric()
    const {handleOpenModal, handleCloseModal} = useGlobalModal()
    const {isLoading, data, error} = fetchAllProducts({limit:criteria.limit, page:criteria.page, search:debounceSearch, sortBy:criteria.sortBy})
    const [currentProductDetails, setCurrentProductDetails] = useState<ProductItem|null>(null)
    const {isPending,mutate} = useApiMutation({cbError, cbSuccess})
    const searchRef = React.useRef<HTMLInputElement>(null)
    if(isLoading){
        return <Loader/>
    }
    
    if(error){
        return <h6>{error.message}</h6>
    }

    function cbSuccess(data:any){
        setTitleAndContent({
            title:'Success message',
            content:<Stack paddingBottom={2}>
            <span>{data?.message ?? 'Product deleted successfully'}</span>
            <Stack direction={'row'} gap={2}>
                <StyledButton onClick={handleClose}>Close</StyledButton>
            </Stack>            
        </Stack>
        })
        queryClient.invalidateQueries({queryKey:['allProducts']})
    }
    
    function cbError(error:Error){
        setTitleAndContent({
            title:'Error message',
            content:<Stack paddingBottom={2}>
            <span className="text-red-600 font-bold">{error.message}</span>
            <Stack direction={'row'} gap={2}>
                <StyledButton onClick={handleClose}>Cancel</StyledButton>
            </Stack>            
        </Stack>
        })
    }
    const handleViewDetail=(id:string)=>{
        if(data?.products){
            setCurrentProductDetails(data?.products.filter(product=> product._id ===id)[0])
            setTitleAndContent({title:'Product Details'})
        }
        handleOpenModal()
    }
    const handleClose=()=>{
        setTitleAndContent({
            title:'',
            content:''
        })
        setCurrentProductDetails(null)
        handleCloseModal()
    }

    const handleDeleteConfirm = (id:string)=>{
        mutate({methodName:'delete', url:`products/${id}`})
    }

    const handleDelete=(id:string)=>{
        setTitleAndContent({title:'Delete Product',
            content:<Stack paddingBottom={2}>
            <span>Are you sure you want to delete product {data?.products.filter(product=> product._id ===id)[0].name}?</span>
            <Stack direction={'row'} gap={2}>
                <StyledButton disabled={Boolean(isPending)} onClick={()=>handleDeleteConfirm(id)}>Yes</StyledButton>
            <StyledButton onClick={handleClose}>No</StyledButton>
            </Stack>
        </Stack>
        })
        handleOpenModal()
    }
    const productHeaderNames = ['Name','MainImages','BasePrice','Discount','Brands','Tags','Materials','ShipmentDays','Action']
    return (
        <AdminSection sectionClassName="">
            <AdminSection.Title title="All Products">
                <Criteria criteria={criteria} handleCriteriaChange={handleCriteriaChange} ref={searchRef}/>
                <StyledButton
                    sx={{ px: 2 }}
                    hoverBackgroundColor={blue[900]}
                    onClick={() => navigate("/admin/products/new")}
                >
                    Add New Product
                </StyledButton>
            </AdminSection.Title>
            <AdminSection.Content sx={{overflowX:'scroll'}}>
                <Table sx={{overflowX:'scroll', width:1400}}>
                    <TableHead sx={{bgcolor:cyan[900]}}>
                        <TableRow>
                            {productHeaderNames.map(list=>{
                            return <TableCell sx={{color:"white"}} key={list}>
                                {list}
                            </TableCell>
                        })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <ProductTableBody products={data?.products??[]} handleViewDetail={handleViewDetail} handleDelete={handleDelete}/>
                        <TableRow>
                        <TableCell colSpan={7}>
                            <Pagination count={data?.pagination?.totalPages} page={criteria.page} onChange={(_: React.ChangeEvent<unknown>, value: number)=>{
                                handleCriteriaChange(value,'page')
                            }}/>
                        </TableCell>
                        </TableRow>                      
                    </TableBody>                    
                </Table>
                <GlobalModal.Content>
                    <Stack sx={{bgcolor:'background.paper', boxShadow:24, overflowY:'scroll', maxHeight:'500px',width:'900px'}}>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{position:'fixed',width:'880px',bgcolor:'white',zIndex:1, paddingX:2, paddingTop:1, borderBottom:'1px solid lightGray'}}>
                        <h6 className="font-bold">{titleAndContent.title}</h6>
                        <IconButton onClick={handleClose}>
                            <Close/>
                        </IconButton>
                    </Stack>
                    <Stack sx={{mt:8, paddingX:2, position:'relative'}}>
                        {currentProductDetails
                        ?getDisplayDetails(currentProductDetails)
                        :titleAndContent.content
                        ?titleAndContent.content
                        :'Please select product to view details'}
                    </Stack>
                    </Stack>
                </GlobalModal.Content>
            </AdminSection.Content>
        </AdminSection>
    )
}

function getDisplayDetails(currentProductDetails:ProductItem):ReactNode{
    let content=[]
    const skipKeys=['_id', 'slug', 'createdBy']
    for(let key in currentProductDetails){
            let result;
            if(skipKeys.includes(key)){
                continue;
            }
            switch(key){
                case 'mainImages':
                    result = getImages(currentProductDetails[key])
                break;
                case 'tags':
                case 'materials':
                    result = currentProductDetails[key].join(',')
                break;
                case 'category':
                    result = currentProductDetails[key]?.name
                break;
                case 'isFeatured':
                    result = currentProductDetails[key].toString()
                break;
                case 'variants':
                    result = currentProductDetails[key].map((variant)=>{
                        return <Stack sx={{width:'100%', p:2, border:'1px dotted lightGray'}}>
                            <p className="font-bold">Size:  <span>{variant.size}</span></p>
                            <p className="font-bold">Color: <span>{variant.color}</span></p>
                            <p className="font-bold">Sku: <span>{variant.sku}</span></p>
                            <p className="font-bold">Price: <span className="text-green-700">{variant.price}</span></p>
                            <p className="font-bold">Stock: <span className="text-green-700">{variant.stock}</span></p>
                            <p className="font-bold">Images:
                                <br />
                                {getImages(variant.images)}
                            </p>
                        </Stack>
                    })
                break;
                case 'discount':
                case 'basePrice':
                    result = <span className="text-green-600">{currentProductDetails[key]}</span>
                break;
                default:
                    result = currentProductDetails[key]
            }
            content.push(<Stack key={key} sx={{mb:1}}>
                <h6 className="font-bold mr-1">{key[0].toUpperCase()+key.slice(1)}:</h6>
                {result}
           </Stack>)
        }
    return content
}
export default index