import { Outlet } from "react-router";
import React from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Divider,
  IconButton,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
  type Theme,
} from "@mui/material";

import { Link } from "react-router";
import { Box, styled } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { AdminSideList } from "../pages/admin/share/listArray";
import MySnackBar from "../shared/snackBar/MySnackBar";
import { useAuth } from "../../provider/AuthProvider";
import type { CSSObject } from "@emotion/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MyAppBar from "../pages/admin/share/MyAppBar";
import type { IUser } from "../../types/userInterface";

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflow: "hidden",
});
const closedMixin = (theme: Theme): CSSObject => ({
    width: `calc(${theme.spacing(7)} + 10px)`,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 10px)`,
    },
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
    })(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    variants: [
        {
        props: ({ open }) => open,
        style: {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
        },
        },
        {
        props: ({ open }) => !open,
        style: {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
        },
        },
    ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 2),
    ...theme.mixins.toolbar,
}));

const AdminLayout = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const { user, logout } = useAuth();
    const [open, setOpen] = React.useState(true);

    React.useEffect(()=>{
        setOpen(!isMobile)
    },[isMobile])

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: "flex" }}>
        <MyAppBar open={open} user={user as IUser} drawerWidth={drawerWidth} logout={logout} toggleDrawer={toggleDrawer}/>
        <Drawer open={open} variant={"permanent"} onClose={toggleDrawer} sx={{}}>
            <DrawerHeader>
            <Link to={"/admin/dashboard"}>Admin Dashboard</Link>
            <IconButton onClick={toggleDrawer}>
                {theme.direction === "rtl" ? (
                <ChevronRightIcon />
                ) : (
                <ChevronLeftIcon />
                )}
            </IconButton>
            </DrawerHeader>
            <Divider />
            <Box sx={[open ? { px: 5 } : { px: 0 }]}>
            {Object.keys(AdminSideList).map((key, index) => {
                return (
                <React.Fragment key={`${key}-${index}`}>
                    <Accordion defaultExpanded  sx={{ boxShadow: 0 }}>
                    <AccordionSummary
                        key={`${key}-${index}`}
                        expandIcon={<KeyboardArrowDown />}
                        sx={{ flexDirection: "row-reverse", p: 0,'&.MuiAccordionSummary-root': {
                        minHeight: '50px',
                        },
                        '& .MuiAccordionSummary-content': {
                        margin: '2px 0',
                        },}}>
                        <Typography
                        variant="h6"
                        sx={[open ? { fontSize: 14 } : { fontSize: 10 }]}
                        >
                        {key}
                        </Typography>
                    </AccordionSummary>
                    {open && <Divider/>}
                    {AdminSideList[key].map((items) => {
                        return (
                        <ListItem
                            key={items.title}
                            disablePadding
                            sx={[
                            { display: "flex", alignItems: "center" , '& :hover *':{
                                transition:theme.transitions.create("color",{
                                    easing:theme.transitions.easing.easeIn,
                                    duration:theme.transitions.duration.leavingScreen
                                }),
                                color:'red'
                            }},
                            !open
                                ? { justifyContent: "center" }
                                : { justifyContent: "start" },
                            ]}
                        >
                            <Link
                            to={items.linkTo}
                            className="flex items-center justify-center gap-1"
                            >
                            <IconButton
                                aria-label={items.title}
                                title={items.title}
                                sx={[open ? { width: "auto" } : { width: 1 }]}
                            >
                                {items.icon}
                            </IconButton>
                            <Typography
                                variant="h6"
                                sx={[
                                { fontSize: 14 },
                                open ? { display: "block" } : { display: "none" },
                                ]}
                            >
                                {items.title}
                            </Typography>
                            </Link>
                        </ListItem>
                        );
                    })}
                    </Accordion>
                    <Divider />
                </React.Fragment>
                );
            })}
            </Box>
        </Drawer>
        <Box component={"main"} flexGrow={1} paddingTop={4}>
            <DrawerHeader />
            <Outlet />
        </Box>
        <MySnackBar />
        </Box>
    );
};

export default AdminLayout;
