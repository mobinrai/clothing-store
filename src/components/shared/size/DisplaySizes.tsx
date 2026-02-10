import { Box } from '@mui/material'
import React from 'react'

const DisplaySizes = ({size, selectedSize,handleChange}:{size:string, selectedSize?:string, handleChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void}) => {
    return (
        <Box sx={{ padding: "2.5px", width: "54px" }}>
            <input
                className="sizeRadio"
                type="radio"
                style={{ display: "none" }}
                value={size}
                name="size"
                checked={selectedSize === size}
                onChange={handleChange}
                id={`size-${size}`}
            />
            <label className="sizeLabel" htmlFor={`size-${size}`} style={{ cursor: 'pointer' }}>
                <span>{size}</span>
            </label>
        </Box>
    )
}

export default DisplaySizes