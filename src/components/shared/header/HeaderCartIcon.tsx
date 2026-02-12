import { Close, ShoppingBasketOutlined } from "@mui/icons-material";
import { Badge, Divider, Drawer, Stack } from "@mui/material";
import Tshirt1 from "@images/products/t-shirt-5.webp";
import StyledButton from "../styled/StyledButton";
import { Link } from "react-router";
import AddSubtractButton from "../addSub/AddSubtractButton";
import { useToggleSearchAndCart } from "../../../hooks/useToggleSearchAndCart";
import React from "react";
import CustomRoundStack from "../styled/CustomRoundStack";

const HeaderCartIcon = () => {
    const {showCart,setShowCart} = useToggleSearchAndCart()
    const onClick=()=>setShowCart(!showCart)
    return (
        <React.Fragment>
            <CustomRoundStack onClick={onClick}>
                <Badge
                badgeContent={0}
                showZero
                color="error"
                sx={{ top: 10, right: 5, position: "absolute" }}
                
                />
                <ShoppingBasketOutlined sx={{ fontSize: 22 }} />
            </CustomRoundStack>
            <Drawer open={showCart} anchor="right">
                <Stack sx={{ width: "420px" }}>
                    <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    padding={"20px 30px"}            >
                        <h6 className="uppercase font-bold">My cart</h6> <Close onClick={onClick} sx={{cursor:'pointer'}}/>
                    </Stack>
                    <Divider/>
                    <Stack gap={2} padding={3} sx={{overflowY:'auto', bgcolor:"rgba(175,175,175,0.1)", height:'560px', mx:2}}>
                        {
                            [...Array(4)].map((_,index)=>{
                                return <Stack key={`${index}-${Math.floor(Math.random()*12)}`} direction={'row'} spacing={2}>
                            <img src={Tshirt1} alt="" className="w-24"/>
                            <Stack spacing={2}>
                                <h6 className="font-bold">I am product title</h6>
                                <span className="font-bold text-lg">$67.79</span>
                                <Stack direction={'row'} alignItems={'center'} gap={1}>
                                    <AddSubtractButton deleteIcon/>
                                </Stack>
                            </Stack>
                        </Stack>
                            })
                        }                
                    </Stack>
                    <Stack sx={{my:2, boxShadow:'2px -10px 8px -1px rgba(200,200,200,0.8)', py:2, px:3}}>
                        <p className="py-2"><span className="font-bold">Total</span></p>
                        <Divider/>
                        <Link to={'/cart'} className="w-full" onClick={onClick}>
                            <StyledButton sx={{mt:2, width:'100%'}}>view cart</StyledButton>
                        </Link>
                    </Stack>
                </Stack>
                </Drawer>
        </React.Fragment>
        
    );
};

export default HeaderCartIcon;
