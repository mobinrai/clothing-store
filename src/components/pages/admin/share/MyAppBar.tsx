import {
    Button,
    IconButton,
    MenuItem,
    styled,
    Toolbar
} from "@mui/material";
import MuiAppBar, {type AppBarProps as MuiAppBarProps} from "@mui/material/AppBar";
import { Menu } from "@mui/icons-material";
import type { IUser } from "../../../../types/userInterface";
import ToggleMenu from "../../../shared/toggleMenu";
import { Link } from "react-router";

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
    drawerWidth?:number
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (props:PropertyKey) => !["open", "drawerWidth"].includes(props as string),
})<AppBarProps>(({ theme, drawerWidth }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
        props: ({ open }) => open,
        style: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
            }),
        }},
    ],
}));

const MyAppBar = ({open,user,drawerWidth, logout, toggleDrawer}:{
    open:boolean,drawerWidth:number, user:IUser,logout: () => void,toggleDrawer: () => void}) => {
    return (
        <AppBar position="fixed" open={open} drawerWidth={drawerWidth}>
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <IconButton
                onClick={toggleDrawer}
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={[
                {
                    marginX: 5,
                },
                open && { display: "none" },
                ]}
            >
                <Menu />
            </IconButton>
            <h6 className="text-sm ml-5 text-white">
                Welcome to Your Dashboard {user?.email}
            </h6>
            <ToggleMenu>
                <MenuItem>
                <Link to={"/admin/dashboard"}>Admin Dashboard</Link>
                </MenuItem>
                <MenuItem>
                <Link to={"/user/settings"}>Settings</Link>
                </MenuItem>
                <MenuItem>
                <Button onClick={logout}>Logout</Button>
                </MenuItem>
            </ToggleMenu>
            </Toolbar>
        </AppBar>
    )
}

export default MyAppBar