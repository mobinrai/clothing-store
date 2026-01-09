import { createTheme } from "@mui/material"

const theme = createTheme({
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: false
            },
            styleOverrides: {
                root: {
                    maxWidth: '1500px',
                },
            },
        },
    },
});

export default theme