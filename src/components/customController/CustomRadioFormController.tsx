import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller, useFormContext, type FieldValues } from "react-hook-form";
import type { CommonCustomFormControllerProps } from "../../types/commonTypes";


const CustomRadioFormController = <T extends FieldValues>({
    options,
    name,
    label,
    sx,
    handleClick
    }: CommonCustomFormControllerProps<T>) => {
    const { control } = useFormContext();
    return (
        <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState}) => {
            return (
            <FormControl
                sx={{...sx}}>
                {label && <FormLabel>{label}</FormLabel>}
                <RadioGroup value={value} onChange={e=>{
                    if(handleClick){
                        handleClick(e)
                    }
                    onChange(e.target.value);
                }}>
                    {options.map((option) => {
                        return (
                        <FormControlLabel
                            key={option.id??option.value}
                            value={option.value}
                            control={<Radio/>}
                            label={option.label}
                        />
                        );
                    })}
                </RadioGroup>
                <FormHelperText>
                    {fieldState.error ? fieldState.error.message : ""}
                </FormHelperText>
            </FormControl>
            );
        }}
        />
    );
};

export default CustomRadioFormController;
