import {
  Search,
  ShoppingBasketOutlined,
  StarOutline,
} from "@mui/icons-material";
import { Badge, Box, Container, Grid, List, Stack, Typography } from "@mui/material";
import HeaderIconStack from "./HeaderIconStack";
import HeaderListItem from "./HeaderListItem";
import { Link } from "react-router";
import MenuIcon from '@mui/icons-material/Menu';

const TopHeader = () => {
  return (
    <Box sx={{ paddingY: 4 }}>
      <Container maxWidth={false}>
        <Grid container alignItems={'center'}>
          <Grid size={{ xs:12, sm:7, md:8, lg: 3 }}>
            <Stack direction={'row'} gap={1} alignItems={'center'} marginRight={1}>
              <h1>Clothing Store</h1>
            <Stack direction={'row'} sx={{display:{xs:'none',sm:'flex', lg:'none'}}}>
              <MenuIcon fontSize="small"/>
              <Typography variant="caption">Menu</Typography>
            </Stack>
            </Stack>
          </Grid>
          <Grid size={{ md:0, lg: 5 }}>
            <Stack textAlign={"center"}>
                <List sx={{ display: {xs:'none',lg:"flex"} }}>
                  <HeaderListItem linkTo="/" title="Home" />
                  <HeaderListItem linkTo="/collections" title="collections" />
                  <HeaderListItem linkTo="/" title="pages" />
                  <HeaderListItem linkTo="/about-us" title="about us" />
                  <HeaderListItem linkTo="/contact-us" title="contact us" />
                </List>
            </Stack>
          </Grid>
          <Grid size={{ sm:5,md: 4, lg: 4 }}>
            <Stack direction={"row"} justifyContent={'flex-end'} gap={1} sx={{ display: {xs:'none',sm:"flex"} }}>
              <HeaderIconStack>
                <Search sx={{ fontSize: 22 }} />
              </HeaderIconStack>
              <HeaderIconStack>
                <Badge
                  badgeContent={1}
                  color="error"
                  showZero
                  sx={{ top: 10, right: 5, position: "absolute" }}
                />
                <StarOutline sx={{ fontSize: 22 }} />
              </HeaderIconStack>
              <HeaderIconStack>
                <Badge
                  badgeContent={0}
                  showZero
                  color="error"
                  sx={{ top: 10, right: 5, position: "absolute" }}
                />
                <ShoppingBasketOutlined sx={{ fontSize: 22 }} />
              </HeaderIconStack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                  background: "#eeeeee",
                  borderRadius: 10,
                  padding: "5px 10px",
                  fontSize:12,
                  fontWeight:600,
                  position:'relative',
                  '&:hover .sliding-bg': {
                    transform: 'translateX(calc(100% + 8px))'
                    }
                }}
                spacing={2}
              >
                <Box sx={{minWidth:82, position:'relative', zIndex:2, textAlign:'center'}}>
                    <Link to={'/login'}>Login</Link>
                </Box>
                <Box sx={{minWidth:82, position:'relative', zIndex:2,textAlign:'center'}}>
                    <Link to={'/login'}>Register</Link>
                </Box>
                <Stack
                className="sliding-bg"
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{
                    position:'absolute',
                    background: "#fff",
                    borderRadius: 10,
                    padding: "10px 20px",
                    boxShadow: 5,
                    cursor: "pointer",
                    zIndex:1,
                    minWidth:84,
                    left:0,
                    top:5,
                    bottom:5,
                    transition:'transform .4s ease-in-out',
                    transform: 'translateX(0)'
                  }}
                >
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopHeader;
