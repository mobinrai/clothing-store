import { useFetchAllRoles } from "../queries/allAdminQueries"
import Loader from "../../../shared/Loader"
import React from "react"
import DisplayRoles from "./DisplayRoles"
import type { actionName, baseGenericType, RoleTypes} from "../types"
import MySnackBar from "../../../shared/snackBar/MySnackBar"
import useStateIdAndText from "../hooks/useStateIdAndText"
import useApiMutation from "../../../../api/useApiMutation"
import { Paper } from "@mui/material"

const initalState:baseGenericType={
    id:'',
    newText:'',
}

const Roles = () => {
    const {isPending,isLoading, isError, error, data:roles} = useFetchAllRoles() 
    const {id, newText, handleCancel, handleTextChange, handleUpdate} = useStateIdAndText(initalState)
    const mutation = useApiMutation<RoleTypes>({cbSuccess: onSuccess, cbError:onError})
    
    if(isError){
        return <Paper sx={{mx:2, p:2}} elevation={4}>
            <h6 className="px-6 text-red-500 font-bold">{error.message}</h6>
        </Paper>
    }

    if(isLoading || isPending){
        return <Loader/>
    }
    function onSuccess(){

    }

    function onError(){

    }
    const handlePatch=(id:string, actionName:actionName)=>{  
        const url = `roles/${id}/${actionName}`
        if(actionName=='edit'){
            if(newText){
                mutation.mutate({methodName:'patch',url, data:{name:newText}})
            }            
        }else{
            mutation.mutate({methodName:'patch',url})
        }
    }

    
    return (
        <React.Fragment>
            <DisplayRoles editId={id} roles={roles} updatedText={newText}
            handlePatch={handlePatch}
            handleUpdate={handleUpdate}
            handleCancel={handleCancel}
            handleTextChange={handleTextChange}/>
            <MySnackBar/>
        </React.Fragment>
    )
}

export default Roles