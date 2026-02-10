import {
    Box,
    Container,
    Grid,
    Rating,
    Stack,
    TextField,
} from "@mui/material";
import WeeklyImg1 from "@images/products/weekly-1.webp";
import WeeklyImg2 from "@images/products/weekly-2.webp";
import WeeklyImg3 from "@images/products/weekly-3.webp";
import WeeklyImg4 from "@images/products/weekly-4.webp";
import StyledButton from "../../shared/styled/StyledButton";
import {
    Add,
    FreeCancellationOutlined,
    HelpOutlineOutlined,
    HorizontalRule,
    LocalShippingOutlined,
    QuizOutlined,
    Share,
    StarOutlineOutlined,
} from "@mui/icons-material";
import CustomRoundedDiv from "../../shared/styled/CustomRoundedDiv";
import React, { useState } from "react";
import ChooseSize from "../../shared/size";

const WeeklyTrending = () => {
    const [productQty, setProductQty] = useState(1);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim();
        if (value.length > 3) {
        return false;
        }
        if (parseInt(value)) {
        setProductQty(parseInt(value));
        }
    };
    const weeklyImages = [WeeklyImg1, WeeklyImg2, WeeklyImg3, WeeklyImg4];
    return (
        <section className="weeklytrending mb-20">
        <Container maxWidth={false}>
            <Stack>
            <h6 className="text-2xl uppercase font-bold tracking-wide">
                weekly trending
            </h6>
            <span className="text-(--color-text) capitalize text-sm my-5">
                Unique trending of the season are already on sale
            </span>
            <Grid container columnSpacing={8} sx={{ position: "relative" }}>
                <Grid container size={{ lg: 8 }} spacing={2}>
                {weeklyImages.map((image, index) => {
                    return (
                    <Grid key={index} size={{ md: 6 }}>
                        <img
                        className="rounded-2xl"
                        src={image}
                        alt="weekly image"
                        />
                    </Grid>
                    );
                })}
                </Grid>
                <Grid size={{ lg: 4 }}>
                <Stack gap={4} sx={{ position: "sticky", top: "20px" }}>
                    <Stack gap={2}>
                    <h6 className="text-[22px] font-bold">
                        Jumper with decorative detailing
                    </h6>
                    <Rating value={4} />
                    <span className="font-bold">$120.90</span>
                    </Stack>
                    <p className="text-(--color-text)">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Deleniti illum itaque ad aliquid ipsum quia reprehenderit
                    repellendus quidem pariatur dolorem, vel veniam recusandae
                    dolores. Amet veniam ut voluptatem aspernatur accusantium
                    harum, omnis deserunt qui quia nam exercitationem deleniti
                    pariatur dicta labore quasi dignissimos eos at laborum. Dolor
                    iste ut pariatur?...
                    </p>
                    <Stack>
                    size:s
                    <ChooseSize availableSizes={['xs','s','m','l','xl']}/>
                    </Stack>
                    <Stack
                    direction={"row"}
                    sx={{ position: "relative", alignItems: "center" }}
                    gap={2}
                    >
                    <Box sx={{ position: "relative", display: "inline-flex" }}>
                        <a className="add-subt-btn left-2">
                        <HorizontalRule sx={{ fontSize: "16px" }} />
                        </a>
                        <TextField
                        value={productQty}
                        onChange={handleChange}
                        sx={{}}
                        slotProps={{
                            input: {
                            sx: {
                                borderRadius: 10,
                                width: "120px",
                                padding: "5px !important",
                                paddingX: "25px !important",
                                height: "40px !important",
                            },
                            },
                        }}
                        />
                        <a className="add-subt-btn right-2">
                        <Add sx={{ fontSize: "16px" }} />
                        </a>
                    </Box>
                    <StyledButton
                        sx={{
                        top: 0,
                        position: "relative",
                        boxShadow: "4px 4px 12px #747373e0",
                        }}
                        bgColor="#f5f5f5"
                        textColor="#000"
                    >
                        Add to cart
                    </StyledButton>
                    <CustomRoundedDiv
                        sx={{
                        opacity: 1,
                        transform: "translateY(0)",
                        right: "-10px",
                        top: "5px",
                        position: "relative",
                        }}
                    >
                        <StarOutlineOutlined sx={{ fontSize: "18px" }} />
                    </CustomRoundedDiv>
                    </Stack>
                    <Box sx={{ position: "relative", mb: 6 }}>
                    <StyledButton
                        sx={{ top: 0, width: "100%", py: 1 }}
                        bgColor="#f5f5f5"
                        textColor="#000"
                    >
                        Buy it now
                    </StyledButton>
                    </Box>
                    <div className="flex justify-between border-b border-(--color-border) pb-2">
                    <div className="product-single_share-faq">
                            <Share sx={{ fontSize: "18px" }} />
                            <span className="group-hover:text-[#e94328]">
                            Share
                            </span>
                    </div>
                    <div className="product-single_share-faq">
                        <HelpOutlineOutlined sx={{ fontSize: "18px" }} />
                        <span className="group-hover:text-[#e94328]">
                        Ask question about product?
                        </span>
                    </div>
                    <div className="product-single_share-faq">
                        <QuizOutlined sx={{ fontSize: "18px" }} />
                        <span className="group-hover:text-[#e94328]">FAQ</span>
                    </div>
                    </div>
                    <Stack gap={2}>
                    <p className="text-(--color-text) text-sm">
                        <FreeCancellationOutlined /> Orders shipment within 5 to 10
                        business days.
                    </p>
                    <p className="text-(--color-text) text-sm">
                        <LocalShippingOutlined /> This item ships free in Europe.
                    </p>
                    </Stack>
                </Stack>
                </Grid>
            </Grid>
            </Stack>
        </Container>
        </section>
    );
};

export default WeeklyTrending;
