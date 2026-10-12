import { Rating, Stack } from "@mui/material";
import type { ProductItem } from "../../pages/admin/types";
import CustomLink from "../styled/CustomLink";
import type { withChildren } from "../../../types/commonTypes";

const SingleProductDetails = ({data, children}:{data:ProductItem}&withChildren) => {
    return (
        <Stack
        className="productDetails"
        sx={{
            padding: 2,
            position: "relative",
            backgroundColor: "#fff",
        }}
        gap={2}
        >
            <span style={{ fontSize: "14px", color:'#727070'}}>{data?.category.name}</span>
            <CustomLink href={`/product/${data.slug}`}>
                <h6 className="font-bold text-[17px] cursor-pointer">{data.name}</h6>
            </CustomLink>
            <Rating value={data.ratingCount} sx={{ fontSize: "20px" }} readOnly/>
            <span style={{fontWeight:'bold', fontSize:"14px",color:"#e94328"}}>${data.basePrice}</span>
            {children}
        </Stack>
    );
};

export default SingleProductDetails;
