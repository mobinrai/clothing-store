import { styled } from "@mui/system";

const CustomLink = styled("a")({
    "&:hover .quickView": {
        transform: "translateY(0)",
        opacity: 1,
    },
    "&:hover .wishlistBtn": {
        transform: "translateY(0)",
        opacity: 1,
    },
    "&:hover .productAddToCart": {
        transform: "translateY(0)",
        opacity: 1,
    },
});

export default CustomLink