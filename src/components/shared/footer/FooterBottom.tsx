import { LocationPin } from '@mui/icons-material'
import { Box, Container, Grid, Stack } from '@mui/material'
import Payments from "@assets/payments.avif"
import CountriesWithCurrency from './CountriesWithCurrency'
import Languages from './Languages'

const FooterBottom = () => {
    return (
        <Stack borderTop={'1px solid var(--color-border)'} paddingY={6}>
                <Container maxWidth={false}>
                    <Grid container gap={{xs:4,md:0, lg:0}}>
                        <Grid size={{xs:12,md:6,lg:4}}>
                            <Stack gap={2}>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <LocationPin/><span style={{color:'var(--color-text)',fontSize:12}}>Miami Store: 15 West 21th Street, Miami FL, USA</span>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <LocationPin/>
                                    <span style={{color:'var(--color-text)', fontSize:12}}>Chicago Store: 5400 N. Lakewood Ave, Chicago, IL 60640</span>
                                    
                                </Stack>                                
                            </Stack>
                        </Grid>
                        <Grid size={{xs:12,md:6,lg:4}}>
                            <Stack>
                                <Stack direction={'row'} spacing={1} marginBottom={2}>
                                    <CountriesWithCurrency/>
                                    <Languages/>
                                </Stack>
                                <span style={{color:'var(--color-text)',fontSize:13}} >Copyright @ {new Date().getFullYear()} Clothing store.All Rights Reserved.
                            </span>
                           </Stack>
                        </Grid>
                        <Grid size={{xs:12,md:6,lg:4}}>
                            <Box sx={{maxWidth:'290px'}}>
                                <img src={Payments} alt="payments we accept" width={'100%'}/>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>                        
            </Stack>
    )
}

export default FooterBottom