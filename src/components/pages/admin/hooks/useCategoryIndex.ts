import React from "react"
import type { CategoryType } from "../types"
import { fetchAllCategories } from "../queries/allAdminQueries"
import useApiMutation from "../../../../api/useApiMutation"
import useCriteria from "../../../../hooks/useCriteria"

const useCategoryIndex = ({cbSuccess, cbError}:{cbSuccess:(data:any)=>void, cbError:(error:Error)=>void}) => 
{
    const {debounceSearch,criteria,handleCriteriaChange}=useCriteria()
    const mutation = useApiMutation<CategoryType>({cbSuccess, cbError})
    const {isLoading, isError, error:fetchingError, data:allCategories} = fetchAllCategories({search:debounceSearch,...criteria})
    
    const searchRef = React.useRef<HTMLInputElement>(null)
    
    const handleConfirm=(id:string)=>{
        mutation.mutate({methodName:'delete', url:`categories/${id}/delete`})
    }

    
    return {
        criteria,
        isLoading,
        isError,
        fetchingError,
        allCategories,
        searchRef,
        mutation,
        handleConfirm,
        handleCriteriaChange
    }
}

export default useCategoryIndex