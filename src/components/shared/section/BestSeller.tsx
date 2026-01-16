import { Container,Grid } from '@mui/material'
import SectionTitle from "../../shared/section/SectionTitle";
import CustomLink from "../../shared/styled/CustomLink";
import SingleProductImage from "./../../shared/singleProductImage";
import SingleProductDetails from "./../../shared/singleProductDetails";
import type { titleType } from '../../../types/commonTypes';

const BestSeller = ({sectionTitle}:{sectionTitle:titleType}) => {
    return (
        <section className="mb-20">
            <Container maxWidth={false}>
                <SectionTitle sectionTitle={sectionTitle}/>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        <CustomLink href="/products/" className="productImageLink">
                            <SingleProductImage />
                        </CustomLink>
                        <SingleProductDetails />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        <CustomLink href="/products/" className="productImageLink">
                            <SingleProductImage />
                        </CustomLink>
                        <SingleProductDetails />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        <CustomLink href="/products/" className="productImageLink">
                            <SingleProductImage />
                        </CustomLink>
                        <SingleProductDetails />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        <CustomLink href="/products/" className="productImageLink">
                            <SingleProductImage />
                        </CustomLink>
                        <SingleProductDetails />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default BestSeller