import { Box, Stack } from '@mui/material'
import { Link } from 'react-router'

const HeaderAuthLink = () => {
    return (
        <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
            background: "#eeeeee",
            borderRadius: 10,
            padding: "6px",
            fontSize: 12,
            fontWeight: 600,
            position: "relative",
            "&:hover .sliding-bg": {
                transform: "translateX(calc(100% + 8px))",
            },
            }}
        >
            <Box
            sx={{
                minWidth: 82,
                position: "relative",
                zIndex: 2,
                textAlign: "center",
            }}
            >
            <Link to={"/account/login"}>Login</Link>
            </Box>
            <Box
            sx={{
                minWidth: 82,
                position: "relative",
                zIndex: 2,
                textAlign: "center",
                marginLeft: "8px",
            }}
            >
            <Link
                to={"/account/register"}
                style={{ padding: "12PX 5PX" }}
            >
                Register
            </Link>
            </Box>
            <Stack
            className="sliding-bg"
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
                position: "absolute",
                background: "background.paper",
                borderRadius: 10,
                boxShadow: 5,
                cursor: "pointer",
                zIndex: 1,
                minWidth: 82,
                left: 5,
                top: 5,
                bottom: 5,
                transition: "transform .4s ease-in-out",
                transform: "translateX(0)",
            }}
            ></Stack>
        </Stack>
    )
}

export default HeaderAuthLink