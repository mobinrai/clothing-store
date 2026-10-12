import { Container, Paper, Stack } from "@mui/material"
import CustomTextField from "../../../customController/CustomTextField"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema, type RoleFormType } from "./schema"
import StyledButton from "../../../shared/styled/StyledButton"
import { Add } from "@mui/icons-material"
import { useMutation } from "@tanstack/react-query"
import { privateApi } from "../../../../api/axios"
import MySnackBar from "../../../shared/snackBar/MySnackBar"
import { useGeneric } from "../hooks/useGenericState"

const AddNewRole = () => {
    const {setSnackbarState, navigate} = useGeneric()
    const {formState:{errors},register,reset, handleSubmit}=useForm<RoleFormType>({
        mode:'all',
        resolver:zodResolver(schema)
    })
    const mutation = useMutation({
        mutationFn:async (data:RoleFormType) => {
            const result = await privateApi.post('/roles', {...data})
            return result.data
        },onSuccess(data) {
            setSnackbarState({
                open:true,
                message:data?.message ?? 'New Role added'
            })
            reset()
        },onError(error){
            setSnackbarState({
                open:true,
                message:error?.message
            })
        }
    })
    
    const onSubmit = (data:RoleFormType)=>{
        mutation.mutate(data)
    }
    return (
        <section className="add-new-role">
            <Container maxWidth={false}>
                <Paper sx={{p:3}}>
                    <Stack sx={{borderBottom:'1px solid #1976d2', paddingBottom:'5px'}}>
                        <h6>Add new role</h6>
                    </Stack>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mt-3">
                        <CustomTextField<RoleFormType> name="name" placeHolder="enter role"
                        register={register}
                        error={errors?.name}/>
                        <Stack direction={'row'} alignItems={'center'} gap={2}>
                            <StyledButton type="submit" endIcon={<Add/>} sx={{"& .MuiButton-endIcon": {
                                    transform: "rotate(0deg)",
                                    }, mt:2}}>
                                Add Role
                            </StyledButton>
                            <StyledButton sx={{mt:2}} bgColor="red" onClick={()=>{navigate(-1)}}>
                                    Cancel
                            </StyledButton>
                        </Stack>
                    </form>
                </Paper>
                <MySnackBar/>
            </Container>
        </section>
    )
}

export default AddNewRole