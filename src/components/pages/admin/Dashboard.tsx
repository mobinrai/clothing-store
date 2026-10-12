import { Box, Stack } from "@mui/material"
import { AttachMoney } from "@mui/icons-material"

const Dashboard = () => {    
    return (
        <section className="admin-dashboard">
            {/* <Container maxWidth={false}> */}
            <Stack direction={'row'} columnGap={2} sx={{paddingX:4}}>
                <Stack direction={'row'} flex={1} sx={{bgcolor:'white', py:3, px:5, justifyContent:"space-between"}}>
                     Total sale <AttachMoney/>
                            </Stack>
                            <Box flex={1} sx={{bgcolor:'green', py:3, px:5}}>Total orders</Box>
                            <Box flex={1} sx={{bgcolor:'blue', py:3, px:5}}>Total new products</Box>
                            <Box flex={1} sx={{bgcolor:'orange', py:3, px:5}}>Total new users</Box>
                    </Stack>    
            {/* </Container> */}
        </section>
    )
}

export default Dashboard