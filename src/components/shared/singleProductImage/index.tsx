import {
  ArrowForward,
  PhotoLibraryOutlined,
} from "@mui/icons-material";
import { Box, Stack, Tooltip } from "@mui/material";
import Tshirt1 from "@images/products/t-shirt-5.webp";
import StyledButton from "../styled/StyledButton";
import CustomRoundedDiv from "../styled/CustomRoundedDiv";
import WishlistButton from "../WishlistButton";

const SingleProductImage = () => {
    return (
        <Box sx={{ position: "relative",}}>
            <img src={Tshirt1} alt="" style={{borderRadius:10}} />
            <Stack sx={{ position: "absolute", top: 10, right: 15 }}>
                <Tooltip title="wishlist" placement="left-start" arrow>
                    <WishlistButton/>
                </Tooltip>
                <Tooltip title="quick view" placement="left-start" arrow>
                    <CustomRoundedDiv className="quickView">
                        <PhotoLibraryOutlined sx={{ fontSize: "18px" }} />
                    </CustomRoundedDiv>                        
                </Tooltip>
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
