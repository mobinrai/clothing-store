import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material'
import { MenuItem, Select } from '@mui/material'
import type { CustomSelectProps } from '../../types/commonTypes'
import type { FieldValues} from 'react-hook-form'

const CustomMultipleSelect=<T extends FieldValues>  ({options, onChange, label, value}:CustomSelectProps<T>) => {
    return (
        <Select labelId={label}
                label={label}
                value={value || []}
                multiple
                onChange={onChange}
                renderValue={(selected:string[])=>{
                    if(selected){
                        return options.filter(option=>selected.includes(option.id)).map(item=>item.label.toUpperCase()).join(', ')
                    }
                }}>
                    {options.map((option) => {
                        const SelectionIcon =value?.includes(option.id)? CheckBox : CheckBoxOutlineBlank
                        return <MenuItem key={option.id} value={option.id}>
                        <SelectionIcon/>{option.label.toUpperCase()}
                    </MenuItem>
                    })}
            </Select>
    )
}

export default CustomMultipleSelect