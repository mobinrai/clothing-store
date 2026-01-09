import { Instagram,YouTube } from "@mui/icons-material"
import {Container, Grid,Stack, Typography } from "@mui/material"
import FooterListItem from "./FooterListItem"
import FooterBottom from "./FooterBottom"

const Footer = () => {
    const footerData = [
        {
        title: "Company info",
        items: ["About us", "Our Blog", "careers", "store locations", "testimonial"]
        },
        {
        title: "Help & support",
        items: ["shipping info", "returns", "how to order", "how to track", "size guide"]
        },
        {
        title: "my account",
        items: ["login", "register", "wishlist", "track your orders", "checkout"]
        }
    ];
    return (
        <footer style={{borderTop:'1px solid var(--color-border)'}}>
            <Container maxWidth={false}>
                <Grid container spacing={2}>
                    <Grid size={{xs:12, md:4}}>
                        <Stack gap={4} paddingY={{xs:4, md:12}}>
                            <Stack>
                                <Typography variant="h6" mb={3} fontWeight={900}>
                                    Clothing Store
                                </Typography>
                                <Typography variant="caption">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic aliquid laborum quo.
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography variant="caption" mb={1} fontWeight={'bold'} textTransform={'capitalize'}>follow us</Typography>
                                <Stack direction={'row'} gap={2} alignItems={'center'}>
                                    <Stack sx={{background:'var(--color-button)', borderRadius:'50%', padding:'6px 20px', color:'#000', fontWeight:'bold'}}>f</Stack>
                                    <Stack sx={{background:'var(--color-button)', borderRadius:'50%', padding:'10px', color:'#000', alignItems:'center'}}><Instagram/></Stack>
                                    <Stack sx={{background:'var(--color-button)', borderRadius:'50%', padding:'10px', color:'#000', fontWeight:'bold'}}><YouTube/></Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid container size={{sm:12,md:8}}>
                        {footerData.map((section, index)=>{
                            return <FooterListItem key={index} title={section.title} items={section.items}/>
                        })}
                    </Grid>
                </Grid>
            </Container>
            <FooterBottom/>
        </footer>
    )
}

export default Footer