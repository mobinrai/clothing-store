import { Add, Delete, HorizontalRule } from '@mui/icons-material'
import { IconButton, TextField,} from '@mui/material'
import { useAddSubtract } from './useAddSubtract'
import React from 'react'

const AddSubtractButton = ({deleteIcon}:{deleteIcon?:boolean}) => {
    const {productQty, handleAddClick, handleChange, handleSubClick} = useAddSubtract()
    return (
        <React.Fragment>
            <TextField
            value={productQty}
            onChange={handleChange}
            sx={{}}
            slotProps={{
                input: {
                sx: {
                    borderRadius: 10,
                    width: "150px",
                    padding: "5px",
                    height: "40px !important",
                },
                startAdornment:<IconButton onClick={handleSubClick}>
                    <HorizontalRule sx={{ fontSize: "16px" }}/>
                </IconButton>,
                endAdornment:<IconButton onClick={handleAddClick}>
                    <Add sx={{ fontSize: "16px" }}/>
                </IconButton>,
                },
            }}
            />
            {deleteIcon && <Delete sx={{cursor:'pointer', ': hover':{color:'red'}, transition:'color 0.3s ease'}}/>}
        </React.Fragment>
            
    )
}

export default AddSubtractButton