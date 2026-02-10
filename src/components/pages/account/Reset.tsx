import { Box, Container, Stack } from "@mui/material"
import StyledButton from "../../shared/styled/StyledButton"
import { Link } from "react-router"
import CustomTextField from "../../customController/CustomTextField"
import { useForm } from "react-hook-form"
import { Email } from "@mui/icons-material"
import { zodResolver } from "@hookform/resolvers/zod"
import { emailSchema, type EmailSchema } from "../../../schemas/commonSchema"

const ResetPassword = () => {
    const {register, formState:{errors}, handleSubmit} = useForm<EmailSchema>({
        mode:'all',
        resolver:zodResolver(emailSchema)
    })
    const onSubmit =(data:EmailSchema)=>{
        console.log(data);
    }
    return (
        <section className="reset-password my-20">
            <Container maxWidth={false}>
                <Stack sx={{maxWidth:'50%', marginX:'auto'}} gap={2}>
                    <div className="border-b border-[#e5e5e8] ml-2">
                        <h6 className="font-bold text-[16px] border-b inline-flex border-blue-600">Reset your password</h6>
                    </div>
                    <span className="text-sm text-(--color-text) ml-2">We will send you an email to reset your password</span>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <Stack gap={2}>
                            <CustomTextField
                                name={'email'}
                                placeHolder="Email"
                                label="Email"
                                register={register}
                                error={errors?.email}
                                icon={<Email/>}
                            />
                            <Box>
                                <StyledButton type="submit" sx={{mr:2}}>Submit</StyledButton> 
                                <Link relative="path" to={'/account/login'}>
                                    <StyledButton>cancel</StyledButton> 
                                </Link>
                            </Box>
                        </Stack>
                    </form>
                </Stack>
            </Container>
        </section>
    )
}

export default ResetPassword