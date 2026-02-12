import { Box, Container, Stack } from "@mui/material"
import SubscribeForm from "./SubscribeForm"

const index = () => {
    return (
        <section className="subscribeNewsLetter" style={{background:'var(--color-bg)', padding:'60px 0'}}>
            <Container maxWidth={false}>
                <Stack gap={{lg:2}} textAlign={'center'}>
                    <Box sx={{mb:4}}>
                        <h1 style={{textTransform:'uppercase',fontSize:24, fontWeight:900}}>Subscribe & get 15% discount</h1>
                    </Box>
                    <SubscribeForm/>
                </Stack>
            </Container>
        </section>
    )
}

export default index