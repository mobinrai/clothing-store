import {styled} from "@mui/material/styles";
import { Button} from "@mui/material";

interface MyButtonProps {
    hoverBackgroundColor?: string;
    bgColor?: string;
    textColor?: string;
    hoverTextColor?:string
}

const StyledButton = styled(Button, {
    shouldForwardProp: (props) =>
        !["hoverBackgroundColor", "textColor", "bgColor", "hoverTextColor"].includes(props as string),
    })<MyButtonProps>(
    ({
        theme,
        textColor,
        bgColor,
        hoverBackgroundColor,
        hoverTextColor
    }) => ({
        paddingX: theme.spacing(3),
        backgroundColor: bgColor ?? theme.palette.common.black,
        borderRadius: "50px",
        color: textColor ?? theme.palette.common.white,
        minWidth: "150px",
        boxShadow:'5px 8px 12px #747373e0',
        "& .MuiButton-endIcon": {
        transform: "rotate(-45deg)",
        transition: "transform .17s linear",
        },
        "&:hover": {
        backgroundColor: hoverBackgroundColor ?? theme.palette.common.black,
        color:hoverTextColor ?? theme.palette.common.white
        },
        ":hover .MuiButton-endIcon": { transform: "rotate(0deg)" },
    })
);

export default StyledButton;
