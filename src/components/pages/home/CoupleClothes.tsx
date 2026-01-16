import BeautifulYoungCouple from "@images/products/beautiful-couple-spend-time-autumn-field.jpg"
// import WomenLongCoat from "@images/products/women-long-overcoat.jpg"
import { Container, Stack, styled } from "@mui/material"

const CustomDiv = styled('div')(()=>({
    position:'relative',
    height:'800px',
    '&::before': {
        content:'""',
        backgroundImage:`url(${BeautifulYoungCouple})`,
        backgroundSize:'cover',
        backgroundPosition: 'center',
        borderRadius:10,
        height:'100%',
        width:'100%',
        position:'absolute',
        top:0,
        bottom:0,
        zIndex:-1
    }
}))

const CoupleClothes = () => {
    return (
        <section className="mb-20">
            <Container maxWidth={false}>
                <CustomDiv>
                    <Stack alignItems={'end'} paddingTop={25} paddingRight={10}>
                        <h5 className="text-black text-[12px] uppercase tracking-wide">Feel the love, with you loved one</h5>
                        <p className="text-[3rem] py-3">Reshape your style</p>
                        36+36.36
                    </Stack>
                </CustomDiv>
            </Container>
        </section>
    )
}

export default CoupleClothes