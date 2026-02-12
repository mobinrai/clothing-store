import { Box, Container, Grid } from "@mui/material";
import StyledButton from "../../shared/styled/StyledButton";
import { ArrowForward } from "@mui/icons-material";
import SectionTitle from "../../shared/section/SectionTitle";
import DisplayProductAndDetails from "../../shared/section/DisplayProductAndDetails";

const NewArriavleSection = () => {
    return (
        <section className="my-20">
            <Container maxWidth={false}>
                <SectionTitle sectionTitle="new arrivals"/>
                <Box>
                    <Grid container spacing={4}>
                        <DisplayProductAndDetails/>
                    </Grid>                
                    <StyledButton endIcon={<ArrowForward/>} bgColor="#f5f5f5" textColor="#000" sx={{px:'20px',py:'10px', mt:6,fontSize:'12px', fontWeight:'bold',height:'52px', left:"44%"}}>Shop all products</StyledButton>
                </Box>
            </Container>
        </section>
    );
};

export default NewArriavleSection;
