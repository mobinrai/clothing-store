import type { FieldValues } from "react-hook-form";
import type { CustomTextFieldProps } from "../../types/formTypes";
import {InputAdornment, Stack, TextField} from "@mui/material";


const CustomTextField = <T extends FieldValues>({
    name,
    placeHolder,
    label,
    sx,
    icon,
    required = true,
    error,
    register,
    }: CustomTextFieldProps<T>) => {
    return (
        <Stack position={"relative"}>
            <TextField
                fullWidth
                id={name}
                sx={{"& .MuiInputBase-root": {
                        borderRadius: 2,
                    }, ...sx }}
                placeholder={placeHolder}
                label={label}
                {...register(name)}
                error={!!error}
                helperText={error?.message}
                required={required}
                slotProps={{
                    input: {
                        endAdornment: (
                        <InputAdornment position="end">
                            {icon}
                        </InputAdornment>
                        ),
                    },
                    }}
            />
            
        </Stack>
    );
};

export default CustomTextField;
