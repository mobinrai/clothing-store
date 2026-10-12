import { Autocomplete, TextField } from "@mui/material";
import { CheckBoxOutlineBlank } from "@mui/icons-material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import type {
    FieldValues,
} from "react-hook-form"
import type { CustomAutoCompleteProps } from "../../types/commonTypes";


const CustomMultipleAutoComplete = <T extends FieldValues>({
    options,
    value,
    onChange,
    label,
    fieldState,
    placeholder
}: CustomAutoCompleteProps<T>) => {
  return (
    <Autocomplete
        multiple={true}
        getOptionLabel={(option) => option.label}
        options={options}
        value={options.filter((option) => {
            return value.includes(option.id);
        })}
        onChange={(_, newValue) => {
            onChange(newValue?.map((item) => item.id));
        }}
        renderOption={(props, option, { selected }) => {
            const { key, ...optionProps } = props;
            const SelectionIcon = selected ? CheckBoxIcon : CheckBoxOutlineBlank;
            return (
            <li key={key} {...optionProps}>
                <SelectionIcon
                fontSize="small"
                style={{ marginRight: 8, padding: 9, boxSizing: "content-box" }}
                />
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
};

export default CustomMultipleAutoComplete;
