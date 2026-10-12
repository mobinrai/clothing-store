import { Container } from "@mui/material";
import StyledButton from "../../shared/styled/StyledButton";
import { ArrowForward } from "@mui/icons-material";
import SectionTitle from "../../shared/section/SectionTitle";
import type { ProductItem } from "../admin/types";
import DisplayProductAndDetails from "../../shared/section/DisplayProductAndDetails";
import React from "react";

const NewArriavleSection = ({newArrivals}:{newArrivals:ProductItem[]}) => {
    return (
        <section className="my-20">
            <Container maxWidth={false}>
                <SectionTitle sectionTitle="new arrivals"/>
                <React.Fragment>
                    <DisplayProductAndDetails products={newArrivals}/>         
                    <StyledButton endIcon={<ArrowForward/>} bgColor="#f5f5f5" textColor="#000" sx={{px:'20px',py:'10px', mt:6,fontSize:'12px', fontWeight:'bold',height:'52px', left:"44%"}}>Shop all products</StyledButton>
                </React.Fragment>
            </Container>
        </section>
    );
};

export default NewArriavleSection;
