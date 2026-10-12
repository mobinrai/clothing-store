import { Close, ShoppingBasketOutlined } from "@mui/icons-material";
import { Badge, Box, Divider, Drawer, Stack } from "@mui/material";
import StyledButton from "../styled/StyledButton";
import { Link } from "react-router";
import AddSubtractButton from "../addSub/AddSubtractButton";
import { useToggleSearchAndCart } from "../../../hooks/useToggleSearchAndCart";
import React from "react";
import CustomRoundStack from "../styled/CustomRoundStack";
import type { ShoppingCartItem } from "../../../types/commonTypes";
import MyImageKit from "../imageKit";

type HeaderCartIconProps={
    data:{
        carts:ShoppingCartItem,
        handleAddToCart: ({ quantity, productId }: {quantity: number; productId: string}) => void
    }
}

const HeaderCartIcon = ({data}:HeaderCartIconProps) => {
    const {showCart,setShowCart} = useToggleSearchAndCart()
    const onClick=()=>setShowCart(!showCart)
    return (
        <React.Fragment>
            <CustomRoundStack onClick={onClick}>
                <Badge
                badgeContent={data?.carts?.totalItems}
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
                    padding={"20px 30px"}
                    >
                        <h6 className="uppercase font-bold">My cart</h6> <Close onClick={onClick} sx={{cursor:'pointer'}}/>
                    </Stack>
                    <Divider/>
                    {
                        data.carts?.items.length>0 ? <React.Fragment>
                            <Stack gap={2} padding={3} sx={{overflowY:'auto', bgcolor:"rgba(175,175,175,0.1)", height:'560px', mx:2}}>
                            {
                                data.carts.items?.map((cart)=>{
                                    const product =cart.product
                                    return (
                                        <Stack key={`carts-${product._id}`} direction={'row'} spacing={2}>
                                            <Box sx={{ 
                                                height: 100, 
                                                width: '40%', 
                                                position: 'relative',
                                                overflow: 'hidden',
                                            }}>
                                                <MyImageKit imageUrl={product.mainImages[0].imageUrl}/>
                                            </Box>
                                            
                                            <Stack spacing={1}>
                                                <p className="flex gap-1 items-center"><span>Name:</span><span className="font-bold text-sm">{product.name}</span></p>
                                                <p className="flex gap-1 items-center"><span>Quantity:</span><span className="font-bold text-sm">{cart.price}</span></p>
                                                <Stack direction={'row'} alignItems={'center'} gap={1}>
                                                    <AddSubtractButton deleteIcon value={cart.quantity}/>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    )
                                })
                            }
                        </Stack>
                        <Stack sx={{my:2, boxShadow:'2px -10px 8px -1px rgba(200,200,200,0.8)', py:2, px:3}}>
                            <p className="py-2 flex justify-between"><span className="font-bold">Total:</span>{data.carts.totalPrice}</p>
                            <Divider/>
                            <Link to={'/cart'} className="w-full" onClick={onClick}>
                                <StyledButton sx={{mt:2, width:'100%'}}>view cart</StyledButton>
                            </Link>
                        </Stack>
                        </React.Fragment>  
                        :
                        <Stack sx={{alignItems:'center', justifyContent:'center', height:'500px'}}>
                            No Items Added
                        </Stack>
                    }
                    
                </Stack>
                </Drawer>
        </React.Fragment>
        
    );
};

export default HeaderCartIcon;
