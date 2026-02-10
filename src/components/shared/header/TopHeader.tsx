import {
  Search,
  ShoppingBasketOutlined,
  StarOutline,
} from "@mui/icons-material";
import {
  Badge,
  Box,
  Container,
  Grid,
  List,
  Stack,
  Typography,
} from "@mui/material";
import HeaderIconStack from "./HeaderIconStack";
import HeaderListItem from "./HeaderListItem";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerCartList from "./DrawerCartList";
import SearchFormDrawer from "./SearchFormDrawer";
import { useToggleSearchAndCart } from "../../../hooks/useToggleSearchAndCart";
import HeaderAuthLink from "./HeaderAuthLink";

const TopHeader = () => {
    const {showCart, showSearchForm, toggleContent}= useToggleSearchAndCart()
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
                        <h1>Clothing Store</h1>
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
                        <HeaderIconStack name="searchForm" toggleContent={toggleContent}>
                            <Search sx={{ fontSize: 22 }} />
                        </HeaderIconStack>
                        {showSearchForm && <SearchFormDrawer showSearchForm={showSearchForm} toggleContent={toggleContent}/>}
                        <HeaderIconStack>
                            <Badge
                            badgeContent={1}
                            color="error"
                            showZero
                            sx={{ top: 10, right: 5, position: "absolute" }}
                            />
                            <StarOutline sx={{ fontSize: 22 }} />
                        </HeaderIconStack>
                        <HeaderIconStack name="shoppingCart" toggleContent={toggleContent}>
                            <Badge
                            badgeContent={0}
                            showZero
                            color="error"
                            sx={{ top: 10, right: 5, position: "absolute" }}
                            />
                            <ShoppingBasketOutlined sx={{ fontSize: 22 }} />
                        </HeaderIconStack>
                        {showCart && <DrawerCartList showCart={showCart} toggleContent={toggleContent}/>}
                        <HeaderAuthLink/>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default TopHeader;
