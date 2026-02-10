import { FormProvider, useForm } from "react-hook-form";
import FilterForm from "./FilterForm";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  defaultValues,
  formSchema,
  type FilterFormSchema,
} from "./filterFormSchema";
import { Box, Container, Grid,  Stack } from "@mui/material";
import { useState } from "react";
import { Tune } from "@mui/icons-material";
import CustomLink from "../../shared/styled/CustomLink";
import SingleProductImage from "../../shared/singleProductImage";
import SingleProductDetails from "../../shared/singleProductDetails";

const Collection = () => {
  const [displayFilterMenu, setDisplayFilterMenu] = useState("none");
  const methods = useForm<FilterFormSchema>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  const handleClick = () => {
    setDisplayFilterMenu((prev) => (prev == "none" ? "block" : "none"));
  };
    return (
        <section className="all-products my-20">
        <Container maxWidth={false}>
            <Grid container columnSpacing={3}>
                <Grid size={{ xs: 12, md: 4, lg:3 }}>
                    <Box
                        sx={{
                            display: { xs: displayFilterMenu, md: "block" },
                            position: { xs: "fixed", md: "relative" },
                            backgroundColor: { xs: "#222121ab", md: "transparent" },
                            top:0,
                            left:0,
                            right:0,
                            bottom:0,
                            zIndex: { xs: 20, md: 1 }
                        }}
                            onClick={handleClick}
                        >
                            <Box
                                sx={{
                                width: { xs: "40%", md: "100%" },
                                minWidth: { xs: "220px" },
                                p: 2,
                                backgroundColor: "#fff",
                                height: "100%",
                                overflowY: { xs: "auto", md: "visible" },
                                transform: {
                                    xs:
                                    displayFilterMenu === "block"
                                        ? "translateX(0)"
                                        : "translateX(-100%)",
                                    md: "none",
                                },
                                transition: "transform 0.3s ease",
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                            <FormProvider {...methods}>
                            <FilterForm />
                            </FormProvider>
                        </Box>
                        
                    </Box>
                    <Stack
                        direction={"row"}
                        gap={1}
                        sx={{ display: { xs: "flex", md: "none" } }}
                        onClick={handleClick}
                    >
                        <Tune />
                        <h6 className="font-bold text-xl">Filter By</h6>
                    </Stack>
                </Grid>
                <Grid container size={{ xs:12, md: 8,lg:9 }}>
                    <Stack width={'100%'} my={1}>
                        <Stack mb={2}>
                            <h6 className="font-bold">Sort by:</h6>
                        </Stack>
                        <Grid container spacing={2}>
                            <Grid size={{ xs:12,sm:6,md:4 }}>
                                <CustomLink href="/" className="productImageLink">
                                    <SingleProductImage />
                                </CustomLink>
                                <SingleProductDetails/>
                            </Grid>
                            <Grid size={{ xs:12,sm:6,md:4 }}>
                                <CustomLink href="/" className="productImageLink">
                                    <SingleProductImage />
                                </CustomLink>
                                <SingleProductDetails/>
                            </Grid>
                            <Grid size={{ xs:12,sm:6,md:4 }}>
                                <CustomLink href="/" className="productImageLink">
                                    <SingleProductImage />
                                </CustomLink>
                                <SingleProductDetails/>
                            </Grid>
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
        </section>
    );
};

export default Collection;
