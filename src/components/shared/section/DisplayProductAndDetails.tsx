import { Box, Stack } from '@mui/material'
import CustomLink from '../styled/CustomLink'
import SingleProductImage from '../singleProductImage'
import SingleProductDetails from '../singleProductDetails'

const DisplayProductAndDetails = () => {
    return (
        <Stack direction={"row"}
            sx={{
                overflowX: "scroll",
                scrollBehavior: "smooth",
                scrollbarColor:'red',
                overflowY: "hidden",
                gap: 1,
                width: "100%",
            }}>
            {
                [...Array(6)].map((_,index)=>{
                    return <Box key={`${index}- ${Math.floor(Math.random()*123)}`}
                sx={{
                    flex: {
                        xs: "0 0 49%",
                        sm: "0 0 32.5%",
                        lg: "0 0 19.5%",
                    },
                    minWidth: 0,
                    pb: 2,
                }}
                >
                <CustomLink href="/products/" className="productImageLink">
                    <SingleProductImage />
                </CustomLink>
                <SingleProductDetails />
            </Box>
                })
            }
        </Stack>
    )
}

export default DisplayProductAndDetails