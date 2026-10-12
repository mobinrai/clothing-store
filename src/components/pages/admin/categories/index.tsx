import React from "react";
import Loader from "../../../shared/Loader";
import DisplayCategories from "./DisplayCategories";
import GlobalModal, { useGlobalModal } from "../../../../provider/GlobalModal";
import { Divider, Stack } from "@mui/material";
import StyledButton from "../../../shared/styled/StyledButton";
import { blueGrey, red } from "@mui/material/colors";
import { useGeneric } from "../hooks/useGenericState";
import useCategoryIndex from "../hooks/useCategoryIndex";
import { getQuery } from "../queries/allAdminQueries";

const Category = () => {

    const {
        errorMessage,
        titleAndContent,
        setTitleAndContent,
        navigate,
        queryClient,
    } = useGeneric()

    const { handleOpenModal, handleCloseModal } = useGlobalModal()
    
    const {
        allCategories,
        criteria,
        handleCriteriaChange,
        handleConfirm,
        isLoading,
        fetchingError,
        mutation,
        searchRef,
    } = useCategoryIndex({ cbError, cbSuccess });

    React.useEffect(()=>{
        if(allCategories){
            const query = getQuery({ ...criteria })
            queryClient.invalidateQueries({queryKey:['allCategories', query]})
        }
    },[allCategories])

    function cbSuccess(data:any){
        setTitleAndContent({
            title:'Success message',
            content:<React.Fragment>
                    <h6 className="font-bold">{data?.message}</h6>
                    <Stack direction={'row'} gap={2}>
                        <StyledButton sx={{mt:2}} onClick={handleCloseModal} hoverBackgroundColor={red[500]}>
                            Close
                        </StyledButton>
                    </Stack>
                </React.Fragment>
        })
        queryClient.invalidateQueries({queryKey:['allCategories']})
    }

    function cbError(error:Error){
        setTitleAndContent({
            title:'Error message',
            content:<React.Fragment>
                        <h6>{error?.message}</h6>
                        <Stack direction={'row'} gap={2}>
                            <StyledButton sx={{mt:2}} onClick={handleCloseModal} hoverBackgroundColor={red[500]}>
                                Close
                            </StyledButton>
                        </Stack>
                </React.Fragment>
        })
    }

    if (mutation.isPending || isLoading) {
        return;
    }

    if (fetchingError) {
        return <span>{fetchingError.message}</span>
    }

    const handleDelete=(id:string)=>{
        const deleteCategory = allCategories? allCategories.categories.filter(category=>category._id === id):[]
        handleOpenModal()
        setTitleAndContent({
            title:'Confirm Delete',
            content:<><h6>Are you sure you want to delete <b>{deleteCategory[0]?.name}</b> category?
                        <br /> Once Delete cannot be undo.</h6>
                        <Stack direction={'row'} gap={2}>
                            <StyledButton sx={{mt:2}} hoverBackgroundColor={blueGrey[600]} onClick={()=>handleConfirm(id)}>
                                Confirm
                            </StyledButton>
                            <StyledButton sx={{mt:2}} onClick={handleCloseModal} hoverBackgroundColor={red[500]}>
                                Cancel
                            </StyledButton>
                        </Stack></>
        })
    }    
    
    return (
        <React.Fragment>
            <DisplayCategories ref={searchRef} pending={mutation.isPending || isLoading} criteria={criteria} data={allCategories??{categories:[], pagination:undefined}} handleDelete={handleDelete} navigate={navigate} handleCriteriaChange={handleCriteriaChange}/>
            <GlobalModal.Content>
                {mutation.isPending? <Loader/> : <Stack sx={{p:2}}>
                    <h6 className="font-bold">{titleAndContent.title}</h6>
                    <Divider/>
                    <Stack sx={{mt:2}}>
                        {
                            errorMessage? errorMessage: titleAndContent.content
                        }
                    </Stack>
                </Stack>}                
            </GlobalModal.Content>
        </React.Fragment>
    );
}


export default Category;
