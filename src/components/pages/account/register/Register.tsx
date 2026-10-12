import { Box, Container, Stack } from "@mui/material";
import StyledButton from "../../../shared/styled/StyledButton";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import CustomTextField from "../../../customController/CustomTextField";
import { registerSchema, type RegisterSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Email, Person } from "@mui/icons-material";
import PasswordField from "../../../shared/account/PasswordField";
import { publicApi } from "../../../../api/axios";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router";
import React from "react";
import Loader from "../../../shared/Loader";
import useMe from "../../../../hooks/useMe";

const Register = () => {
    const navigate = useNavigate()
    const {isLoading, isPending} = useMe()
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<RegisterSchema>({
        mode: "all",
        resolver: zodResolver(registerSchema),
    });

    const mutation = useMutation({
            mutationFn:async(data:RegisterSchema)=>{
                const user = await publicApi.post('/auth/register',{...data})
                return user.data
            },onSuccess:(responseData)=>{
                localStorage.setItem('token', JSON.stringify(responseData?.token))
                navigate('/user/dashboard', {replace:true})
            }
        })
    
    const onSubmit=(data:RegisterSchema)=>{
        mutation.mutate(data)
    }

    if(isPending || isLoading) return <Loader/>;

    return (
        <React.Fragment>
            {
                mutation.isPending?
                <Loader/>
                :
                <section className="reset-password my-20">
                    <Container maxWidth={false}>
                        <Stack sx={{ maxWidth: "50%", marginX: "auto" }} gap={2}>
                            <div className="border-b border-[#e5e5e8] ml-2">
                                <h6 className="font-bold text-[16px] border-b inline-flex border-blue-600">
                                Create an account
                                </h6>
                            </div>
                            {
                                mutation.error && <span className="text-xs text-red-500">{mutation.error.message}</span>
                            }
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <Stack gap={2}>
                                <CustomTextField
                                    name="firstName"
                                    placeHolder="First Name"
                                    register={register}
                                    error={errors.firstName}
                                    icon={<Person/>}
                                />
                                <CustomTextField
                                    name="lastName"
                                    placeHolder="Last Name"
                                    register={register}
                                    error={errors.lastName}
                                    icon={<Person/>}
                                />
                                <CustomTextField
                                    name="email"
                                    placeHolder="Email"
                                    register={register}
                                    error={errors.email}
                                    icon={<Email/>}
                                />
                                <PasswordField
                                    name="password"
                                    register={register}
                                    error={errors.password}
                                />
                                <Box flex={"row"} alignItems={"center"}>
                                    <Checkbox
                                    size="small"
                                    sx={{ "& .MuiCheckbox-root": { p: 1 } }}
                                    />
                                    <span className="-ml-1 text-sm">
                                    Sign up for our newsletter
                                    </span>
                                </Box>
                                <span className="text-xs text-(--color-text)">
                                    If you have already an account. please
                                    <Link
                                    to="/account/login"
                                    className="text-blue-400 text-sm font-bold ml-1"
                                    >
                                    Login
                                    </Link>
                                </span>
                                <StyledButton type="submit" sx={{ width: "40%" }} loading={mutation.isPending}>
                                    create an account
                                </StyledButton>
                                </Stack>
                            </form>
                        </Stack>
                    </Container>
                </section>
            }
        </React.Fragment>
        
    );
};

export default Register;
