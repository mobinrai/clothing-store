import type { ProductItem } from "../admin/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import MyImageKit from "../../shared/imageKit";
import { Box } from "@mui/material";
import React from "react";
import { motion } from "motion/react";

const Sliders = ({ sliders }: { sliders: ProductItem[] }) => {
    const [active, setActive] = React.useState<number>(0);
    return (
        <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Autoplay, Navigation]}
        loop={true}
        // autoplay={true}
        className="mySwiper"
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
        >
        {sliders.map((slider, index) => {
            return (
            <SwiperSlide
                key={`home-slider-${slider._id}`}
                style={{ height: 720 }}
            >
                <Box sx={{display:'grid', gridTemplateAreas:'slider-stack', placeItems:'center'}}>
                    <Box sx={{gridArea:'slider-stack'}}>
                        <MyImageKit
                            imageUrl={slider.mainImages[0].imageUrl}
                            loading="eager"
                            width={1700}
                            height={720}
                        />
                    </Box>
                </Box>                
                <Box sx={{gridArea:'slider-stack'}}>
                    <motion.h6
                    className={"text-5xl font-medium leading-1 mb-10"}
                    initial={{ y: -100, opacity: 0 }}
                    animate={
                        active === index
                        ? { y: 20, opacity: 1 }
                        : { y: -100, opacity: 0 }
                    }
                    transition={{ duration: 0.6 }}
                    >
                    {slider.name}
                    </motion.h6>
                    <motion.p
                    initial={{ x: -50, opacity: 0 }}
                    animate={
                        active === index
                        ? { x: 0, opacity: 1 }
                        : { x: -100, opacity: 0 }
                    }
                    transition={{ duration: 0.7 }}
                    className="text-white w-96"
                    >
                    {slider.brand}
                    <br /> {slider.category.name}
                    </motion.p>
                    <motion.a
                    className="slider-link-button"
                    href={`/product/${slider.slug}`}
                    initial={{ y: 700, opacity: 0 }}
                    animate={
                        active === index
                        ? { y: 0, opacity: 1 }
                        : { y: 700, opacity: 0 }
                    }
                    transition={{ duration: 1, delay: 0.2, ease: "linear" }}
                    >
                    View More
                    </motion.a>
                </Box>
            </SwiperSlide>
            );
        })}
        </Swiper>
    );
};

export default Sliders;
