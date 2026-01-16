import { Box, Container, Grid } from "@mui/material";
import SingleProductImage from "./../../shared/singleProductImage";
import SingleProductDetails from "./../../shared/singleProductDetails";
import StyledButton from "../../shared/styled/StyledButton";
import { ArrowForward } from "@mui/icons-material";
import SectionTitle from "../../shared/section/SectionTitle";
import CustomLink from "../../shared/styled/CustomLink";

const NewArriavleSection = () => {
    return (
        <section className="my-20">
            <Container maxWidth={false}>
                <SectionTitle sectionTitle="new arrivals"/>
                <Box>
                    <Grid container spacing={4}>
                        <Grid size={{ xs:12, sm:6,md:4,lg: 3 }}>
                            <CustomLink href="/" className="productImageLink">
                                <SingleProductImage />
                            </CustomLink>
                        <SingleProductDetails/>
                        </Grid>
                        <Grid size={{ xs:12, sm:6,md:4,lg: 3 }}>
                            <CustomLink href="/" className="productImageLink">
                                <SingleProductImage />
                            </CustomLink>
                        <SingleProductDetails/>
                        </Grid>
                        <Grid size={{ xs:12, sm:6,md:4,lg: 3 }}>
                            <CustomLink href="/" className="productImageLink">
                                <SingleProductImage />
                            </CustomLink>
                        <SingleProductDetails/>
                        </Grid>
                        <Grid size={{ xs:12, sm:6,md:4,lg: 3 }}>
                            <CustomLink href="/" className="productImageLink">
                                <SingleProductImage />
                            </CustomLink>
                        <SingleProductDetails/>
                        </Grid>
                    </Grid>                
                    <StyledButton endIcon={<ArrowForward/>} bgColor="#f5f5f5" textColor="#000" sx={{px:'20px',py:'10px', mt:6,fontSize:'12px', fontWeight:'bold',height:'52px', left:"44%"}}>Shop all products</StyledButton>
                </Box>
            </Container>
        </section>
    );
};

export default NewArriavleSection;
