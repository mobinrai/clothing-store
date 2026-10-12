import React from "react";
import StyledButton from "../styled/StyledButton";
import { Box, MenuItem, Select } from "@mui/material";
import { Delete } from "@mui/icons-material";

const AddToButton = ({selectedQty, availableQuantity=1, deleteIcon, setSelectedQty}:{selectedQty:number,availableQuantity:number, deleteIcon?:boolean,setSelectedQty: React.Dispatch<React.SetStateAction<number>>}) => {
    const menuItem = Array.from({length: availableQuantity}, (_, index)=>{
        const qty = index+1
        return <MenuItem key={qty} value={qty}>{qty}</MenuItem>
    })

    return (
           <React.Fragment>
                <Box>
                    <h6>Qty: </h6>
                </Box>
                    <Select
                        labelId="qty"
                        id="cart-qty"
                        value={selectedQty}
                        onChange={(event)=>{setSelectedQty(event.target.value)}}
                    >
                        {availableQuantity > 1 ? menuItem: <MenuItem value={""} disabled>Out of Stock</MenuItem>}
                    </Select>
            {deleteIcon && <Delete sx={{cursor:'pointer', ': hover':{color:'red'}, transition:'color 0.3s ease'}}/>}
                <StyledButton
                    sx={{
                    top: 0,
                    position: "relative",
                    boxShadow: "4px 4px 12px #747373e0",
                    }}
                    bgColor="#f5f5f5"
                    textColor="#000"
                >
                    Add to cart
                </StyledButton>
           </React.Fragment>
            
    )
}

export default AddToButton