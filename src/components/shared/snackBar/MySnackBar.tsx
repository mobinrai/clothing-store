import { Alert, Snackbar } from "@mui/material";
import { useMySnackBar } from "../../../provider/MySnackBarProvider";
import type { ReactNode } from "react";

type MySnackBarProps={
    autoHideDuration?: number;
    anchorOrigin?: {
        vertical: "bottom" | "top";
        horizontal: "right" | "left" | "center";
    };
    children?: ReactNode;
}

const MySnackBar = ({autoHideDuration = 2000, anchorOrigin = { vertical: "bottom", horizontal: "right" },children}: MySnackBarProps) => {
    const { snackbarState, handleClose } = useMySnackBar();
    return (
        <Snackbar
        open={snackbarState.open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        >
        <Alert severity="success" onClose={handleClose}>
            {children || snackbarState.message}
        </Alert>
        </Snackbar>
    );
};

export default MySnackBar;
