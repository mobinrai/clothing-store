import { Controller, type FieldValues } from "react-hook-form";
import type { CommonCustomFormControllerProps } from "../../types/commonTypes"
import { CheckBoxOutlineBlank } from "@mui/icons-material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Autocomplete, TextField } from "@mui/material";

const CustomAutoCompleteWrapper = <T extends FieldValues>({
    control,
    name,
    options,
    label,
    placeholder,
    multiple=false,
}: CommonCustomFormControllerProps<T>) => {
    return (
        <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange }, fieldState }) => {
            return (           
            <Autocomplete
                    multiple={multiple}
                    getOptionLabel={(option) =>option.label}
                    options={options}
                    value={multiple
                        ?
                        options.filter((option) => {
                            return value.includes(option.id);
                        })|| []
                        :
                        options.find(item=>item.id===value)|| null
                    }
                    onChange={(_, newValue) => {
                        const id = Array.isArray(newValue)
                                    ? newValue.map(item => item.id)
                                    : newValue?.id ?? '';
                        onChange(id);
                    }}
                    renderOption={(props, option, { selected }) => {
                        const { key, ...optionProps } = props;                        
                        const SelectionIcon = selected ? CheckBoxIcon : CheckBoxOutlineBlank;
                        return (
                        <li key={key} {...optionProps}>
                            { multiple && 
                                <SelectionIcon
                                fontSize="small"
                                style={{ marginRight: 8, padding: 9, boxSizing: "content-box" }}
                                />
                            }
                            {option.label}
                        </li>
                        );
                    }}
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        placeholder={placeholder}
                        label={label}
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        />
                    )}
                    />
            );
        }}
        />
    );
};

export default CustomAutoCompleteWrapper
