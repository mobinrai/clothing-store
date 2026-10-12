import type { FieldValues } from "react-hook-form";
import type { CustomTextFieldProps } from "../../types/formTypes";
import {InputAdornment, TextField} from "@mui/material";


const CustomTextField = <T extends FieldValues>({
    name,
    placeHolder,
    label,
    sx,
    icon,
    multiline=false,
    required = true,
    error,
    fieldType='text',
    register,
    onChange,
    onBlur
    }: CustomTextFieldProps<T>&{onChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void}&{onBlur?:(event:React.FocusEvent<HTMLInputElement>)=>void}) => {
        const field = register(name, fieldType==='number'?{valueAsNumber:true}:{})
    return (
            <TextField
                {...field}
                type={fieldType}
                fullWidth
                id={name}
                sx={{"& .MuiInputBase-root": {
                        borderRadius: 2,
                    }, ...sx }}
                placeholder={placeHolder}
                multiline={multiline}
                rows={multiline?4:0}
                label={label}
                
                onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{
                    if(onChange){
                        onChange(event)
                    }
                    field.onChange(event)
                }}
                onBlur={(event:React.FocusEvent<HTMLInputElement>)=>{
                    if(onBlur){
                        onBlur(event)
                    }
                    field.onBlur(event)
                }}
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
    );
};

export default CustomTextField;
