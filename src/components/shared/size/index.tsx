import { Box, Stack } from '@mui/material'

const ChooseSize = () => {
    return (
        <Stack direction={"row"} gap={{md:0, lg:2}}>
            <Box sx={{ padding: "2.5px", width: "54px" }}>
            <input
                className="radioLabel"
                type="radio"
                style={{ display: "none" }}
                value={"xs"}
                name="size"
                checked
            />
            <span>xs</span>
            </Box>
            <Box sx={{ padding: "2.5px", width: "54px" }}>
            <input
                className="sizeRadio"
                type="radio"
                style={{ display: "none" }}
                value={"s"}
                name="size"
            />
            <span>S</span>
            </Box>
            <Box sx={{ padding: "2.5px", width: "54px" }}>
            <input
                className="sizeRadio"
                type="radio"
                style={{ display: "none" }}
                value={"m"}
                name="size"
            />
            <span>M</span>
            </Box>
            <Box sx={{ padding: "2.5px", width: "54px" }}>
            <input
                className="sizeRadio"
                type="radio"
                style={{ display: "none" }}
                value={"l"}
                name="size"
            />
            <span>L</span>
            </Box>
            <Box sx={{ padding: "2.5px", width: "54px" }}>
            <input
                className="sizeRadio"
                type="radio"
                style={{ display: "none" }}
                value={"xl"}
                name="size"
            />
            <span>XL</span>
            </Box>
        </Stack>
    )
}

export default ChooseSize