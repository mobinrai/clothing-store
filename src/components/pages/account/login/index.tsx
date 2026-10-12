import { Box, Container, Stack } from "@mui/material"
import SectionTitle from "../../../shared/section/SectionTitle"
import { Email, Mail } from "@mui/icons-material"
import { Link, Navigate} from "react-router"
import StyledButton from "../../../shared/styled/StyledButton"
import PasswordField from "../../../shared/account/PasswordField"
import CustomTextField from "../../../customController/CustomTextField"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { schema, type LoginSchema } from "./schema"
import { useMutation } from "@tanstack/react-query"
import { publicApi } from "../../../../api/axios"
import { useAuth } from "../../../../provider/AuthProvider"
import { getDashBoardName } from "../../../../utils/common"
import { useGeneric } from "../../admin/hooks/useGenericState"
import useAddToCart from "../../../../hooks/useAddToCart"

const Login = () => {
    const {user, afterUserLogin} = useAuth()
    const {errorMessage, setErrorMessage, location, navigate} = useGeneric()
    const from = location.state?.from?.pathname
    const {register,formState: { errors },handleSubmit} = useForm<LoginSchema>({mode: "all",resolver: zodResolver(schema)});
    const {handleAddToCart} = useAddToCart()
    
    const mutation = useMutation({
        mutationFn:async(data:LoginSchema)=>{
            const user = await publicApi.post('/auth/login',{...data})
            return user.data
        },onSuccess:(userData)=>{
            cbSuccess(userData)
        },
        onError:(error)=>{
            setErrorMessage(error.message)
        }
    })
    const onSubmit=(data:LoginSchema)=>{
        mutation.mutate(data)
    }
    
    function cbSuccess(userData:any){
        afterUserLogin(userData.user, userData.token)
        const pendingActionStr = localStorage.getItem('pendingAction')
        if(pendingActionStr){
            const pendingAction = JSON.parse(pendingActionStr)
            if(pendingAction?.type ==='ADD_TO_CART'){
                handleAddToCart(pendingAction?.cardDetails)
            }
            localStorage.removeItem('pendingAction')
        }
        
        navigate(from || getDashBoardName(userData.user.role?.name),{replace:true})
    }
    if(user){
        return <Navigate to={from || getDashBoardName(user.role?.name)} replace={true}/>
    }
    const backgroundColor = mutation.isPending?'#fff':'#000'
    const errMessage = mutation.error? (mutation.error as Error).message:errorMessage
    return (
        <section className="login my-20">
            <Container maxWidth={false}>
                <SectionTitle sectionTitle="login"/>
                    <Box sx={{maxWidth:'50%', marginX:'auto'}}>
                        {
                            (errMessage) && <div className="text-xs text-red-500 mb-2 text-center">{errMessage}</div>
                        }
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <Stack gap={2}>
                            <CustomTextField
                            name="email"
                            placeHolder="Email *"
                            register={register}
                            error={errors.email}
                            icon={<Email/>}
                            />                            
                            <PasswordField<LoginSchema>
                                name={"password"}
                                register={register}
                                error={errors.password}
                            />
                            <Link to={'/account/reset'} className="ml-2">
                                <Mail sx={{color:'red', fontSize:14}}/>
                                <span className="text-sm ml-1">Forgot your <b>Password?</b></span>
                            </Link>
                            <span className="text-xs text-(--color-text) ml-2">
                                If you don't have an account, please
                                <Link to={'/account/register'} className="text-blue-500 font-bold ml-1">
                                    Register Here
                                </Link>
                            </span>
                            <StyledButton sx={{width:'50%', mt:3,}} bgColor={backgroundColor} loading={mutation.isPending}  type="submit">
                                Login
                            </StyledButton>
                        </Stack>                        
                    </form>
                </Box>
            </Container>
        </section>
    )
}

export default Login