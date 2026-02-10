import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";
import { Controller, useFormContext, type FieldValues } from "react-hook-form";
import type { CommonCustomFormControllerProps } from "../../types/commonTypes";


const CustomCheckboxFormController = <T extends FieldValues>({
    options,
    name,
    label,
    sx
    }: CommonCustomFormControllerProps<T>) => {
    const { control } = useFormContext();
    return (
        <Controller
        name={name}
        control={control}
        render={({ field:{value, onChange}, fieldState}) => {
            return (
            <FormControl error={Boolean(fieldState.error)}                
                sx={{...sx}}>
                {label && <FormLabel>{label}</FormLabel>}                
                    <FormGroup>
                        {options?.map((option) => {
                            return (
                            <FormControlLabel
                                key={option.value}
                                control={
                                <Checkbox 
                                checked={value ? value.includes(option.value):false}
                                onChange={()=>{
                                    onChange(value.includes(option.value) ? value.filter((item:string)=>option.value !==item):[...value, option.value])
                                }}
                                name={option.value}
                                />}
                                label={option.label}
                            />
                            );
                        })}
                    </FormGroup>
                <FormHelperText>
                    {fieldState.error ? fieldState.error.message : ""}
                </FormHelperText>
            </FormControl>
            );
        }}
        />
    );
};

export default CustomCheckboxFormController;
