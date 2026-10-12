import { Box, MenuItem, Select, Stack, TextField } from '@mui/material'
import { type ChangeEvent } from 'react'
import type { CategoryTableProps } from '../types'

const Criteria = ({criteria,ref,handleCriteriaChange}:Omit<CategoryTableProps, "data"|"pending"|"handleDelete"|"navigate">) => {
    return (
        <Box flex={2} sx={{ml:2}}>
            <Stack direction={'row'} gap={2}>
                <Select value={criteria?criteria['limit']:'5'} size="small" name="limit" onChange={(event)=>
                    {
                        handleCriteriaChange(event.target.value,'limit')}
                    }>
                    <MenuItem value='5'>5</MenuItem>
                    <MenuItem value='10'>10</MenuItem>
                    <MenuItem value='15'>15</MenuItem>
                    <MenuItem value='20'>20</MenuItem>
                </Select>
                <TextField ref={ref} size="small" placeholder="enter search keyword" value={criteria?.search} name="search" onChange={(event:ChangeEvent<HTMLInputElement>)=>{
                        handleCriteriaChange(event.target.value,'search')
                }}/>
            </Stack>
        </Box>
    )
}

export default Criteria