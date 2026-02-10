import { Box, Stack } from "@mui/material";
import Tshirt1 from "@images/products/t-shirt-1.jpg";

const CheckItemDetails = () => {
    return (
        <Stack gap={2}>
            <Stack gap={2}>
                {[...Array(5)].map((_, index) => {
                return (
                    <Stack
                    key={index}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    >
                    <Stack direction={"row"} gap={3}>
                        <img src={Tshirt1} alt="" loading="lazy" className="w-1/5" />
                        <Box>
                        <div className="text-sm font-bold">Quantity: 3</div>
                        <h6>Black biker jacket</h6>
                        </Box>
                    </Stack>
                    <span className="price">$123</span>
                    </Stack>
                );
                })}
            </Stack>
            <Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                <span>Subtotal: 5 items</span> <b>$123</b>
                </Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                <span>Shipping</span>
                <span className="text-(--color-text)"> free shipping</span>
                </Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                <span>Total</span> <b>$123</b>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default CheckItemDetails;
