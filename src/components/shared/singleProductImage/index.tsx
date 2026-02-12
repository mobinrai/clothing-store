import {
  ArrowForward,
  PhotoLibraryOutlined,
  StarOutlineOutlined,
} from "@mui/icons-material";
import { Box, Stack, styled, Tooltip } from "@mui/material";
import Tshirt1 from "@images/products/t-shirt-5.webp";
import StyledButton from "../styled/StyledButton";
import CustomRoundedDiv from "../styled/CustomRoundedDiv";

const CustomToolTip = styled(Tooltip)(()=>({
    "&:hover .quickView": {
        transform: "translateY(0)",
        opacity: 1,
    },
    "&:hover .wishlistBtn": {
        transform: "translateY(0)",
        opacity: 1,
    },
}))

const SingleProductImage = () => {
    return (
        <Box sx={{ position: "relative",}}>
            <img src={Tshirt1} alt="" style={{borderRadius:10}} loading="lazy"/>
            <Stack sx={{ position: "absolute", top: 10, right: 15 }}>
                <CustomToolTip title="wish list" placement="left-start" arrow>
                        <CustomRoundedDiv className="wishlistBtn">
                            <StarOutlineOutlined sx={{ fontSize: "18px" }}/>
                        </CustomRoundedDiv>
                    </CustomToolTip>
                <CustomToolTip title="quick view" placement="left-start" arrow>
                    <CustomRoundedDiv className="quickView">
                        <PhotoLibraryOutlined sx={{ fontSize: "18px" }} />
                    </CustomRoundedDiv>
                </CustomToolTip>
            </Stack>
            <StyledButton
                className="productAddToCart"
                bgColor="white"
                textColor="black"
                sx={{
                    position:'absolute',
                    bottom: 10,
                    minWidth:'90%',
                    left:14,
                    borderRadius:'0 !important',
                    transform:"translateY(20px)",
                    transition:".5s",
                    opacity:0
                }}
                endIcon={<ArrowForward />}
                >
                Add to cart
            </StyledButton>
        </Box>
    );
};

export default SingleProductImage;
