import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller, useFormContext, type FieldValues } from "react-hook-form";
import type { CommonCustomFormControllerProps } from "../../types/commonTypes";

/**
 *  please note this custom select form controller only works,
 *  if it's form is inside FormProvider
 * 
 */
const CustomSelectFormController = <T extends FieldValues>({
    name,
    options,
    label,
    sx
    }: CommonCustomFormControllerProps<T>) => {
    const { control } = useFormContext();
    return (
        <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange }, fieldState }) => (
            <FormControl sx={{...sx}} fullWidth>
            <InputLabel id={label}>
                {label}
            </InputLabel>
            <Select labelId={label}
                label={label}
                value={value?? ''}
                onChange={onChange}>

                {options.map((option) => (
                <MenuItem key={option.id ?? option.value} value={option.value}>
                    {option.label}
                </MenuItem>

                ))}
            </Select>
            <FormHelperText>{fieldState.error ? fieldState.error.message:''}</FormHelperText>
            </FormControl>
        )}
        />
    );
};

export default CustomSelectFormController;
