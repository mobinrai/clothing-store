import { RemoveRedEye, VisibilityOff } from "@mui/icons-material";
import React from "react";
import { Box, Stack, TextField } from "@mui/material";
import type { CustomFormProps } from "../../../types/formTypes";
import type { FieldValues } from "react-hook-form";

const PasswordField = <T extends FieldValues>({name,register, error}:CustomFormProps<T>) => {
    const [isPassowrdShown, setIsPassowrdShown] = React.useState<boolean>(false);
    const handleTogglePassword = () => {
        setIsPassowrdShown((prev) => !prev);
    };

    const textFieldType = isPassowrdShown ? "text" : "password";
    const icon =  isPassowrdShown ? <RemoveRedEye /> : <VisibilityOff />
    return (
        <Stack position={"relative"}>
            <TextField {...register(name)}
            sx={{'& .MuiInputBase-root':{
                    borderRadius:3
                },
                }}
            placeholder="Password *"
            required
            type={textFieldType}
            error={!!error}
            helperText={error?.message}
            />
            <Box
                sx={{
                position: "absolute",
                right: 10,
                top: 15,
                color: "gray",
                fontSize: "20px",
                cursor:'pointer'
                }}
                onClick={handleTogglePassword}
            >
                {icon}
            </Box>
        </Stack>
    );
};

export default PasswordField;
