import { Add, HorizontalRule } from '@mui/icons-material'
import { Box, TextField } from '@mui/material'
import { useAddSubtract } from './useAddSubtract'

const AddSubtractButton = () => {
    const {productQty, handleAddClick, handleChange, handleSubClick} = useAddSubtract()
    return (
        <Box sx={{ position: "relative", display: "inline-flex" }}>
            <a className="add-subt-btn left-2">
                <HorizontalRule sx={{ fontSize: "16px" }} onClick={handleSubClick}/>
            </a>
            <TextField
            value={productQty}
            onChange={handleChange}
            sx={{}}
            slotProps={{
                input: {
                sx: {
                    borderRadius: 10,
                    width: "120px",
                    padding: "5px !important",
                    paddingX: "25px !important",
                    height: "40px !important",
                },
                },
            }}
            />
            <a className="add-subt-btn right-2">
            <Add sx={{ fontSize: "16px" }}  onClick={handleAddClick}/>
            </a>
        </Box>
    )
}

export default AddSubtractButton