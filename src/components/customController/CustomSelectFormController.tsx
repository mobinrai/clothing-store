import { FormControl, FormHelperText, InputLabel} from "@mui/material";
import { Controller, type FieldValues } from "react-hook-form";
import type { CommonCustomFormControllerProps } from "../../types/commonTypes";
import { red } from "@mui/material/colors";
import CustomMultipleSelect from "./CustomMultipleSelect";
import CustomSelect from "./CustomSelect";

const CustomSelectFormController = <T extends FieldValues>({
    name,
    options,
    label,
    sx,
    control,
    multiple=false
    }: CommonCustomFormControllerProps<T>) => {
    return (
        <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange }, fieldState }) => {
            return <FormControl sx={{...sx}} fullWidth>
            <InputLabel id={label}> {label}</InputLabel>
            {
                multiple
                ?
                <CustomMultipleSelect<T> label={label} onChange={onChange} value={value} options={options}/>
                :
                <CustomSelect<T> label={label} onChange={onChange} value={value} options={options}/>
            }
            <FormHelperText sx={{color:red[900]}}>{fieldState.error ? fieldState.error.message:''}</FormHelperText>
            </FormControl>
        }}
        />
    );
};

export default CustomSelectFormController;
