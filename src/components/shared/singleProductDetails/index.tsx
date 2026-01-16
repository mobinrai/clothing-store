import { Rating, Stack } from "@mui/material";

const SingleProductDetails = () => {
    return (
        <Stack
        className="productDetails"
        sx={{
            zIndex: 10,
            paddingTop: 2,
            position: "relative",
            backgroundColor: "#fff",
        }}
        gap={1}
        >
        <span style={{ fontSize: "10px", color: "#e94328" }}>category</span>
        <h6 className="font-bold text-xs">Classic shirt with pocket</h6>
        <p>
            <Rating value={4} sx={{ fontSize: "16px" }} />
        </p>
        <span style={{ fontSize: "14px", color: "#1c1c1c" }}>$120.45</span>
        </Stack>
    );
};

export default SingleProductDetails;
