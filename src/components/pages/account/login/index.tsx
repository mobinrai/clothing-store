import { Box, Container, Stack } from "@mui/material"
import SectionTitle from "../../../shared/section/SectionTitle"
import { Email, Mail } from "@mui/icons-material"
import { Link } from "react-router"
import StyledButton from "../../../shared/styled/StyledButton"
import PasswordField from "../../../shared/account/PasswordField"
import CustomTextField from "../../../customController/CustomTextField"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { schema, type LoginSchema } from "./schema"

const Login = () => {
      const {
            register,
            formState: { errors },
        } = useForm<LoginSchema>({
            mode: "all",
            resolver: zodResolver(schema),
        });
    return (
        <section className="login my-20">
            <Container maxWidth={false}>
                <SectionTitle sectionTitle="login"/>
                    <Box sx={{maxWidth:'50%', marginX:'auto'}}>
                    <form action="">
                        <Stack gap={2}>
                            <CustomTextField
                            name="email"
                            placeHolder="Email *"
                            register={register}
                            error={errors.email}
                            icon={<Email/>}
                            />                            
                            <PasswordField
                                name="password"
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
                            <StyledButton sx={{width:'50%', mt:3}} type="submit">
                                Sign in
                            </StyledButton>
                        </Stack>                        
                    </form>
                </Box>
            </Container>
        </section>
    )
}

export default Login