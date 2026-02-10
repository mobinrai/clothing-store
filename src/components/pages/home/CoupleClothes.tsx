import BeautifulYoungCouple from "@images/products/beautiful-couple-spend-time-autumn-field.jpg"
// import WomenLongCoat from "@images/products/women-long-overcoat.jpg"
import { Container, Stack } from "@mui/material"
import BgBox from "../../shared/BgBox"



const CoupleClothes = () => {
    return (
        <section className="mb-20">
            <Container maxWidth={false}>
                <BgBox image={BeautifulYoungCouple} height={800}>
                    <Stack alignItems={'end'} paddingTop={25} paddingRight={10}>
                        <h5 className="text-black text-[12px] uppercase tracking-wide">Feel the love, with you loved one</h5>
                        <p className="text-[3rem] py-3">Reshape your style</p>
                        36+36.36
                    </Stack>
                </BgBox>
            </Container>
        </section>
    )
}

export default CoupleClothes