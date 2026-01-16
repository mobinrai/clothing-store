import { Box, Container, Grid, Stack } from "@mui/material"
import SustainImg from '@images/services/sewing_200x.svg'
import ReturnImg from '@images/services/return_200x.svg'
import FreeShipping from '@images/services/home1-free-shipping_200x.svg'
import ReceivedImg from '@images/services/received_200x.svg'

const Services = () => {
    const services=[
        {
            image:SustainImg,
            title:'sustainable materials',
            details:'Experience eco-friendly shopping with products made from sustainably sourced materials.'
        },
        {
            image:ReturnImg,
            title:'30 days free returns',
            details:'Shop with complete confidence, knowing you’re covered by our 30-day free return policy on all of our products.'
        },
        {
            image:FreeShipping,
            title:'free delivery',
            details:'Enjoy free delivery on all orders exceeding 30 Euro, bringing more value to your shopping experience.'
        },
        {
            image:ReceivedImg,
            title:'secure payment',
            details:'Experience eco-friendly shopping with products made from sustainably sourced materials.'
        },
    ]
    return (
        <div className='services mb-40'>
            <Container maxWidth={false}>
                <Box sx={{py:3}}>
                    <Grid container spacing={4}>
                        {
                            services.map((service, index)=>{
                                return <Grid key={index} size={{xs:12,sm:6,md:3}}>
                                    <Stack>
                                        <img className="mb-4" src={service.image} width={50}/>
                                        <h6 className="services-title">{service.title}</h6>
                                        <p className="text-(--color-text) mt-4 text-[14px]">
                                            {service.details}
                                        </p>
                                    </Stack>
                                </Grid>
                            })
                        }                    
                </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default Services