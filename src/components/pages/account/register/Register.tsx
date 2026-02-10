import { Box, Container, Stack } from "@mui/material";
import StyledButton from "../../../shared/styled/StyledButton";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import CustomTextField from "../../../customController/CustomTextField";
import { registerSchema, type RegisterSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Email, Person } from "@mui/icons-material";
import PasswordField from "../../../shared/account/PasswordField";

const Register = () => {
    const {
        register,
        formState: { errors },
    } = useForm<RegisterSchema>({
        mode: "all",
        resolver: zodResolver(registerSchema),
    });
    return (
        <section className="reset-password my-20">
            <Container maxWidth={false}>
                <Stack sx={{ maxWidth: "50%", marginX: "auto" }} gap={2}>
                    <div className="border-b border-[#e5e5e8] ml-2">
                        <h6 className="font-bold text-[16px] border-b inline-flex border-blue-600">
                        Create an account
                        </h6>
                    </div>
                    <form action="">
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
                        <StyledButton type="submit" sx={{ width: "40%" }}>
                            create an account
                        </StyledButton>
                        </Stack>
                    </form>
                </Stack>
            </Container>
        </section>
    );
};

export default Register;
