import { Add, Delete, HorizontalRule } from '@mui/icons-material'
import { Box, IconButton, TextField,} from '@mui/material'
import React from 'react'

const AddSubtractButton = ({deleteIcon, value=0}:{value:number,deleteIcon?:boolean}) => {
    return (
        <React.Fragment>
            <Box>
                <h6>Number: </h6>
            </Box>
            <TextField
            value={value}
            onChange={()=>{console.log('asdf')}}
            sx={{}}
            slotProps={{
                input: {
                sx: {
                    borderRadius: 10,
                    width: "150px",
                    padding: "5px",
                    height: "40px !important",
                },
                startAdornment:<IconButton onClick={()=>{console.log('add')}}>
                    <HorizontalRule sx={{ fontSize: "16px" }}/>
                </IconButton>,
                endAdornment:<IconButton onClick={()=>{console.log('subtract')}}>
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