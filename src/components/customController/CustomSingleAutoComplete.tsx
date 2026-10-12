import { Autocomplete, TextField } from '@mui/material'
import type { CustomAutoCompleteProps } from '../../types/commonTypes'
import type { FieldValues } from 'react-hook-form'

const CustomSingleAutoComplete = <T extends FieldValues>({options, onChange, value, label, fieldState}:CustomAutoCompleteProps<T>) => {
    return (
        <Autocomplete
            getOptionLabel={(option) => option.label || ''}
            options={options}
            value={options.find(item => item.id === value) || null}
            onChange={(_, newValue) => {
                onChange(newValue ? newValue.id : '');
            }}
            renderInput={(params) => (
                <TextField
                {...params}
                label={label}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                />
            )}
            />
    )
}

export default CustomSingleAutoComplete