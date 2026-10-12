import {
    Box,
    Container,
    Divider,
    Rating,
    Stack,
} from "@mui/material";
import StyledButton from "../../shared/styled/StyledButton";
import {
    FreeCancellationOutlined,
    HelpOutlineOutlined,
    LocalShippingOutlined,
    QuizOutlined,
    Share,
    StarOutlineOutlined,
} from "@mui/icons-material";
import type { ProductItem } from "../admin/types";
import { filterTags } from "../../../utils/common";
import MyImageKit from "../../shared/imageKit";
import AddToButton from "../../shared/addToCartBtns";
import CustomRoundedDiv from "../../shared/styled/CustomRoundedDiv";
import SizeAndColor from "../../shared/sizeandcolor";
import { useEffect } from "react";
import useSelectProduct from "../../../hooks/useSelectProduct";

const WeeklyTrending = ({trending}:{trending:Array<ProductItem>}) => {
    const data = trending[0]
    const {selectedProduct,sizes, selectedSize, selectedColor,selectedQty, setSelectedQty,setSelectedProduct, setSelectedSize,setSelectedColor,} = useSelectProduct()
        
    useEffect(()=>{
        if(data){
            setSelectedProduct(data)
        }
    },[data])
    console.log(selectedColor);
    return ( selectedProduct && <section className="weeklytrending mb-20">
        <Container maxWidth={false}>
            <Stack>
            <h6 className="text-2xl uppercase font-bold tracking-wide">
                weekly trending
            </h6>
            <Divider/>
            <span className="text-(--color-text) capitalize text-sm my-5">
                Unique trending of the season are already on sale
            </span>
            <Box sx={{display:'grid', gap:1, gridTemplateColumns:{xs:'1fr', md:'70% 30%'}}}>
                <Box sx={{display:'grid', gap:1, gridTemplateColumns:{xs:'repeat(auto-fit, 1fr)', sm:'repeat(2, minmax(200px, 1fr))'}}}>
                {data?.mainImages.map((image, index) => {
                    const totalCount = data.mainImages.length || 0
                    const isLastOdd = totalCount%2===1 && index===totalCount-1
                    return (
                        <Box  key={image.imageId} sx={{gridColumn:{xs:'span 1', sm:isLastOdd?'span 2':'span 1'}}}>
                            <MyImageKit imageUrl={image.imageUrl} style={{borderRadius:10}}/>
                        </Box>
                        
                    );
                })}
                </Box>
                <Box>
                    <Stack gap={4} sx={{ position: "sticky", top: "20px" }}>
                        <Stack gap={2}>
                        <h6 className="text-[22px] font-bold">
                            {data?.name}
                        </h6>
                        <Rating value={4} readOnly/>
                        <h6 className="font-bold">Tags: <span className="capitalize font-light">{filterTags(data.tags)}</span></h6>
                        <h6 className="font-bold">Brand: <span className="capitalize font-light">{data.brand}</span></h6>
                        <h6 className="font-bold">Materials: <span className="capitalize font-light">{data.materials}</span></h6>
                        <h6 className="font-bold">Price: $<span className="">{data.basePrice}</span></h6>
                        </Stack>
                        <p className="text-(--color-text)">
                        {data.description}
                        </p>
                        <Stack>
                        size: <SizeAndColor 
                            selectedProduct={selectedProduct} 
                            selectedSize={selectedSize}
                            selectedColor={selectedColor}
                            setSelectedSize={setSelectedSize} 
                            sizes={sizes} 
                            setSelectedColor={setSelectedColor}
                            selectedQty={selectedQty} setSelectedQty={setSelectedQty}/>
                        </Stack>
                        <Stack
                            direction={"row"}
                            sx={{ position: "relative", alignItems: "center" }}
                            gap={2}
                            >
                            <AddToButton value={1} availableQuantity={selectedColor ? selectedColor?.stock : selectedSize ? selectedSize?.stock: 1}/>
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
                            <FreeCancellationOutlined /> Orders shipment within {data.shipmentDays.join('-')} business days.
                        </p>
                        <p className="text-(--color-text) text-sm">
                            <LocalShippingOutlined /> This item ships free in Europe.
                        </p>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
            </Stack>
        </Container>
        </section>
    )
};

export default WeeklyTrending;
