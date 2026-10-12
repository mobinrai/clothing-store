import { Box, Stack, TableCell, TableRow } from '@mui/material'
import React from 'react'
import type { ProductItem } from '../types'
import { green, indigo, lightBlue, red } from '@mui/material/colors'
import StyledButton from '../../../shared/styled/StyledButton'
import { Delete, Details, Edit } from '@mui/icons-material'
import { Link } from 'react-router'

type ProductTableBodyProps={
    products:Array<ProductItem>
    handleViewDetail: (id: string) => void
    handleDelete:(id: string) => void
}


const ProductTableBody = ({products, handleViewDetail, handleDelete}:ProductTableBodyProps) => {
    return (
        <React.Fragment>
            {
                products.length?
                products.map(product=>{
                    return <TableRow key={product._id}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.mainImages.length}</TableCell>
                        <TableCell sx={{color:green[600], font:'caption'}}>{product.basePrice}</TableCell>
                        <TableCell> <Box sx={{bgcolor:indigo[700], color:"white", padding:1, borderRadius:2}}>{product.discount>0?`${product.discount} % discount`:product.discount}</Box></TableCell>
                        <TableCell>{product.brand}</TableCell>
                        <TableCell>{product.tags.join(', ')}</TableCell>
                        <TableCell>{product.materials}</TableCell>
                        <TableCell>{product.shipmentDays.join('-')} days</TableCell>
                        <TableCell>
                            <Stack direction={'row'} spacing={1}>
                                <StyledButton sx={{minWidth:'60px'}} hoverBackgroundColor={lightBlue[400]} onClick={()=>handleViewDetail(product._id as string)} title="details">
                            <Details/>
                            </StyledButton>
                            <Link to={`/admin/products/edit/${product._id}`} className="bg-amber-500 rounded-4xl shadow-custom text-white py-2 px-4 hover:bg-amber-900"><Edit/></Link>
                            <StyledButton sx={{minWidth:'60px', bgcolor:red[400]}} hoverBackgroundColor={red[900]} onClick={()=>handleDelete(product._id as string)} title="delete">
                            <Delete/>
                            </StyledButton>
                            </Stack>
                        </TableCell>
                    </TableRow>
                })
                :
                <TableRow><TableCell colSpan={9}>No products available</TableCell></TableRow>
            }
        </React.Fragment>
    )
}

export default ProductTableBody