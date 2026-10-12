import {
  StarOutline,
} from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  List,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import CustomRoundStack from "../styled/CustomRoundStack";
import HeaderListItem from "./HeaderListItem";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderAuthLink from "./HeaderAuthLink";
import { Link } from "react-router";
import HeaderSearchIcon from "./HeaderSearchIcon";
import HeaderCartIcon from "./HeaderCartIcon";
import useAddToCart from "../../../hooks/useAddToCart";
import type { ShoppingCartItem } from "../../../types/commonTypes";
import ToggleMenu from "../toggleMenu";

const TopHeader = () => {
    const {carts,user, logout, handleAddToCart} = useAddToCart()
    return (
        <Box sx={{ paddingY: 4 }}>
            <Container maxWidth={false}>
                <Grid container alignItems={"center"}>
                    <Grid size={{ xs: 12, sm: 7, md: 8, lg: 2 }}>
                        <Stack
                        direction={"row"}
                        gap={1}
                        alignItems={"center"}
                        marginRight={1}
                        >
                        <Link to={'/'}>
                            <h1 className="font-bold"><span className="text-red-500 text-2xl -mr-1 italic">Clothing</span> Store</h1>
                        </Link>
                        <Stack
                            direction={"row"}
                            sx={{ display: { xs: "none", sm: "flex", lg: "none" } }}
                        >
                            <MenuIcon fontSize="small" />
                            <Typography variant="caption">Menu</Typography>
                        </Stack>
                        </Stack>
                    </Grid>
                    <Grid size={{ md: 0, lg: 6 }}>
                        <Stack textAlign={"center"}>
                            <List sx={{ display: { xs: "none", lg: "flex" } }}>
                                <HeaderListItem linkTo="/collections/mens" title="Men" />
                                <HeaderListItem linkTo="/collections/women" title="Women" />
                                <HeaderListItem linkTo="/" title="Sale" />
                                <HeaderListItem linkTo="/itm/12" title="single product" />
                                <HeaderListItem linkTo="/all-products" title="All Products" />
                                <HeaderListItem linkTo="/about-us" title="about us" />
                                <HeaderListItem linkTo="/contact-us" title="contact us" />
                            </List>
                        </Stack>
                    </Grid>
                    <Grid size={{ sm: 5, md: 4, lg: 4 }}>
                        <Stack
                        direction={"row"}
                        justifyContent={"flex-end"}                        
                        gap={1}
                        sx={{ display: { xs: "none", sm: "flex" } }}
                        >
                        <HeaderSearchIcon/>
                        <CustomRoundStack>
                            <Badge
                            badgeContent={1}
                            color="error"
                            showZero
                            sx={{ top: 10, right: 5, position: "absolute" }}
                            />
                            <StarOutline sx={{ fontSize: 22 }} />
                        </CustomRoundStack>
                        <HeaderCartIcon data={{carts:carts as ShoppingCartItem,handleAddToCart}}/>
                        {
                            user ? <Stack direction={'row'} alignItems={'center'}>
                                <h6 className="font-bold">{user.email}</h6>
                                <ToggleMenu>
                                    <MenuItem>
                                        <Button onClick={logout}>Logout</Button>
                                    </MenuItem>
                                </ToggleMenu>
                            </Stack>
                            :
                            <HeaderAuthLink/>
                        }
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default TopHeader;
