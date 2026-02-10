import { Box, Grid, Stack } from '@mui/material'
import Tshirt1 from "@images/products/t-shirt-1.jpg";
import Tshirt2 from "@images/products/t-shirt-2.jpg";
import Tshirt3 from "@images/products/t-shirt-3.jpg";
import {
  ArrowCircleDownOutlined,
  ArrowForward,
  AssignmentReturnOutlined,
  CommentOutlined,
  EuroOutlined,
  HistoryToggleOffOutlined,
  LocalShippingOutlined,
  ShoppingBag,
} from "@mui/icons-material";
import ChooseSize from "../../shared/size";
import StyledButton from "../../shared/styled/StyledButton";
import { orange } from "@mui/material/colors";

const MainProductDetail = ({handleClick}:{handleClick:()=>void}) => {
    return (
        <>
            <Grid size={{ xs: 12, md: 8, lg: 7 }}>
                    <Box sx={{ position: "sticky", top: "10px" }}>
                    <img src={Tshirt1} alt="" />
                    <Stack direction={"row"} mt={2} gap={4}>
                        <p>
                        <input
                            type="radio"
                            name=""
                            id=""
                            value=""
                            className="hidden"
                        />
                        <img
                            src={Tshirt1}
                            alt=""
                            style={{ width: "76px", height: "70px" }}
                        />
                        </p>
                        <img
                        src={Tshirt3}
                        alt=""
                        style={{ width: "76px", height: "70px" }}
                        />
                        <img
                        src={Tshirt2}
                        alt=""
                        style={{ width: "76px", height: "70px" }}
                        />
                        <img
                        src={Tshirt3}
                        alt=""
                        style={{ width: "76px", height: "70px" }}
                        />
                    </Stack>
                    <button className="flex items-center mt-4 cursor-pointer justify-end" onClick={handleClick}>
                        <h1 className="text-2xl">See details</h1>
                        <ArrowCircleDownOutlined
                        sx={{ fontSize: "60px", color: "GrayText" }}
                        />
                    </button>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4, lg: 5 }}>
                    <Stack gap={3} position={"relative"}>
                    <Stack>
                        <h6 className="font-extrabold text-2xl">adidas sportsware</h6>
                        <span className="text-(--color-text) mb-3">
                        men's sport ware for running
                        </span>
                        <span>Regarding material, details and care</span>
                    </Stack>
                    <span>
                        <EuroOutlined fontSize="small" /> 104.99 vat included
                    </span>
                    <span>
                        previously:{" "}
                        <del>
                        <b>$104.99</b>
                        </del>{" "}
                        <span className="text-xs ml-2 text-red-500 font-bold">
                        {" "}
                        -27% discount
                        </span>
                    </span>
                    <div>
                        <h6 className="mb-2">choose size</h6>
                        <ChooseSize availableSizes={['xs','s','m','l','xl']}/>
                    </div>
                    <Stack>
                        <span>size guide: how to find the perfect fit</span>
                        <span>The model is 190cm tall and wears size M.</span>
                    </Stack>
                    <Stack gap={2} sx={{ position: "relative" }}>
                        <Box sx={{ display: "contents" }}>
                        <select
                            name=""
                            id=""
                            className="border py-1 px-2 w-1/4 border-gray-400 rounded-2xl cursor-pointer"
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </Box>
                        <StyledButton
                        sx={{
                            py: 1.5,
                            backgroundColor: orange[300],
                            width: { md: "100%", lg: "50%" },
                            color: "#000",
                        }}
                        hoverBackgroundColor={orange[700]}
                        endIcon={<ArrowForward />}
                        >
                        Add to cart
                        </StyledButton>
                        <StyledButton
                        sx={{
                            py: 1.5,
                            backgroundColor: orange[400],
                            width: { md: "100%", lg: "50%" },
                            "& .MuiButton-endIcon": {
                            transform: "rotate(0deg)",
                            },
                        }}
                        hoverBackgroundColor={orange[900]}
                        endIcon={<ShoppingBag />}
                        >
                        Buy now
                        </StyledButton>
                    </Stack>
                    <div className="flex gap-2 flex-col text-(--color-text) text-sm font-bold">
                        <span>
                        Express delivery with DHL GoGreen if you order within the next
                        0 hours 0 minutes.
                        </span>
                        <p>
                        <HistoryToggleOffOutlined />{" "}
                        <span>1-2 working days delivery time</span>
                        </p>
                        <p>
                        <LocalShippingOutlined />
                        <span> Free shipping on orders over €49.90</span>
                        </p>
                        <p>
                        <AssignmentReturnOutlined />
                        <span>62-day free return shipping</span>
                        </p>
                    </div>
                    <p>
                        <CommentOutlined />
                        Report an issue with this product or seller
                    </p>
                    <Stack>
                        <p className="border-b border-gray-300">About seller</p>
                        <p className="text-(--color-text) text-sm ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                        exercitationem libero autem quam at, iure unde excepturi
                        perferendis dolore tenetur. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Nulla exercitationem libero
                        autem quam at, iure unde excepturi perferendis dolore tenetur.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                        exercitationem libero autem quam at, iure unde excepturi
                        perferendis dolore tenetur.
                        </p>
                    </Stack>
                    </Stack>
                </Grid>
        </>
    )
}

export default MainProductDetail