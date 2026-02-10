import { Box, Container, Divider, Grid, Paper, Stack } from "@mui/material";
import CustomLink from "../../shared/styled/CustomLink";
import SingleProductImage from "./../../shared/singleProductImage";
import SingleProductDetails from "./../../shared/singleProductDetails";
import ProductDescription from "./ProductDescription";
import MyRatings from "../../shared/ratings/MyRatings";
import MainProductDetail from "./MainProductDetail";
import { useRef } from "react";

const index = () => {
    const detailsRef= useRef<HTMLDivElement>(null)
    const handleClick=()=>{
        if (detailsRef.current) {
            detailsRef.current.scrollIntoView({
                behavior:'smooth',
                block:'start'
            })
        }
    }
    const details = [
        {
        title: "Materials & Care",
        summary: `Main material 1 :50 % nylon ,40 % viscose ,5 % wool ,5 % cashmere
                        Contains non-textile parts of animal origin
                        Care instructions

                        Special gentle wash cycle 30°
                        Do not bleach
                        No dryer
                        Do not iron at high temperatures; take care when ironing with steam.
                        Do not dry clean`,
        },
        {
        title: "Details",
        summary: `The model is 188cm tall and wears size M.
                        Men's knit sweater by Christian Berg Men
                        Material mix with cashmere content
                        Regular Fit
                        Chunky knit
                        round neck
                        Back length for size M: 69 cm
                        Sleeve length for size M: 77 cm
                        Article number: 1732111
                        Supplier number: 50644510244`,
        },
    ];
    
    return (
        <section className="my-20">
            <Container maxWidth={false}>
                <Grid container spacing={4}>
                    <MainProductDetail handleClick={handleClick}/>
                </Grid>
                <Stack sx={{ my: 5 }}>
                <Divider />
                <h6 className="font-extrabold mt-2 mb-4">
                    Products related to this item
                </h6>
                <Box
                    sx={{
                    overflowX: "hidden",
                    position: "relative",
                    width: "100%",
                    }}
                >
                    <Stack
                    direction={"row"}
                    sx={{
                        overflowX: "scroll",
                        scrollBehavior: "smooth",
                        scrollbarColor:'red',
                        overflowY: "hidden",
                        gap: 1,
                        width: "100%",
                    }}
                    >
                    {[...Array(12)].map((_, index) => (
                        <Box
                        key={index}
                        sx={{
                            flex: {
                                xs: "0 0 49%",
                                sm: "0 0 32.5%",
                                md: "0 0 24.3%",
                                lg: "0 0 16.2%",
                            },
                            minWidth: 0,
                            pb: 2,
                        }}
                        >
                            <CustomLink href="/itm/1234" className="productImageLink">
                            <SingleProductImage />
                            </CustomLink>
                            <SingleProductDetails />
                        </Box>
                    ))}
                    </Stack>
                </Box>
                </Stack>
                <Stack sx={{ my: 5 }}>
                <Divider />
                <h6 className="font-extrabold mt-2 mb-4">
                    More products from seller
                </h6>
                    <Box
                    sx={{
                    overflowX: "hidden",
                    position: "relative",
                    width: "100%",
                    }}
                >
                    <Stack
                    direction={"row"}
                    sx={{
                        overflowX: "scroll",
                        scrollBehavior: "smooth",
                        scrollbarColor:'red',
                        overflowY: "hidden",
                        gap: 1,
                        width: "100%",
                    }}
                    >
                    {[...Array(12)].map((_, index) => (
                        <Box
                        key={index}
                        sx={{
                            flex: {
                                xs: "0 0 49%",
                                sm: "0 0 32.5%",
                                md: "0 0 24.3%",
                                lg: "0 0 16.2%",
                            },
                            minWidth: 0,
                            pb: 2,
                        }}
                        >
                            <CustomLink href="/itm/1234" className="productImageLink">
                            <SingleProductImage />
                            </CustomLink>
                            <SingleProductDetails />
                        </Box>
                    ))}
                    </Stack>
                </Box>
                </Stack>
                <div ref={detailsRef} id="details" className="flex gap-4 scroll-smooth">
                <h1 className="text-2xl font-extrabold">Details</h1>
                </div>
                <Divider />
                <ProductDescription data={details} />
                <Stack sx={{ my: 8 }}>
                <h6 className="font-extrabold text-2xl capitalize">
                    customer reviews{" "}
                </h6>
                <Divider />
                <Grid container columnSpacing={2}>
                    <Grid size={{lg:5}}>
                        <Paper elevation={3} sx={{py:3, px:2,mt:2}}>
                            <MyRatings starNumber={3} progressValue={2} totalNumber={65} />
                            <MyRatings starNumber={3} progressValue={2} totalNumber={65} />
                            <MyRatings starNumber={3} progressValue={2} totalNumber={65} />
                        </Paper>
                    </Grid>
                    <Grid size={{lg:7}}>
                        <Paper elevation={3} sx={{py:3, px:2,mt:2}}>
                            <h6>All reviews</h6>
                            <Divider/>
                            <Box sx={{mt:1}}>
                                <h6>No reviews for this product</h6>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
                </Stack>
            </Container>
        </section>
    );
};

export default index;
