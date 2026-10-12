import { MenuItem, Select } from '@mui/material'
import type { FieldValues } from 'react-hook-form'
import type { CustomSelectProps } from '../../types/commonTypes'

const CustomSelect=<T extends FieldValues>  ({options, onChange, label, value}:CustomSelectProps<T>) => {
    return (
        <Select labelId={label}
            label={label}
            value={value || ''}
            onChange={onChange}>
                {options.map((option) => {
                    return <MenuItem key={option.id} value={option.id}>
                        {option.label.toUpperCase()}
                </MenuItem>
                })}
        </Select>
    )
}

export default CustomSelect