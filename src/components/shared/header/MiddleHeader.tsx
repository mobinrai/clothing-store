import { Box, Container, Stack } from "@mui/material";
import BgImage from "@images/home1-deal-bg.webp";
import {styled} from "@mui/material/styles";
import StyledButton from "../styled/StyledButton";
import { ArrowForward } from "@mui/icons-material";

const MyBox = styled(Box)(({theme})=>({
    position: "relative",
    color: theme.palette.common.white,
    paddingY: theme.spacing(4,0),
    "&::before": {
        content: '""',
        position: "absolute",
        backgroundImage: `url(${BgImage})`,
        backgroundPosition: "center center",
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        backgroundRepeat: "no-repeat",
        zIndex: "-1",
    },
}));

const MiddleHeader = () => {
    return (
        <MyBox>
        <Container maxWidth={false}>
            <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ py: 8, position: "relative" }}
            gap={{ xs: 3, sm: 0 }}
            >
            <Box>
                <h6
                style={{
                    fontSize: 16,
                    textTransform: "uppercase",
                    fontWeight: 800,
                }}
                >
                Dont miss <span style={{ color: "#fff000" }}>70% off</span> on All
                sale!
                </h6>
            </Box>
            <Box>
                <StyledButton
                sx={{
                    height: "20px",
                    py: 3,
                    top: "50px",
                    right: 0,
                    border: "1px solid #fff",
                    position:'absolute'
                }}
                bgColor="black"
                hoverTextColor="black"
                textColor="white"
                hoverBackgroundColor="white"
                endIcon={<ArrowForward />}
                >
                View Deals
                </StyledButton>
            </Box>
            </Stack>
        </Container>
        </MyBox>
    );
};

export default MiddleHeader;
