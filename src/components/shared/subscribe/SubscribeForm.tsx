import { Stack, TextField } from "@mui/material";
import { Link } from "react-router";
import StyledButton from "../styled/StyledButton";
import { ArrowForward } from "@mui/icons-material";

const SubscribeForm = () => {
    return (
        <form
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
        <Stack
            direction={"row"}
            sx={{
            width: { xs: "80%", sm: "60%", lg: "40%" },
            position: "relative",
            mb: 3,
            }}
        >
            <TextField
            sx={{ width: "100%", "& fieldset": { border: "none" } }}
            slotProps={{
                input: {
                sx: {
                    borderRadius: 10,
                    backgroundColor: "#fff",
                    boxShadow: 10,
                    paddingX: 3,
                },
                },
            }}
            placeholder="enter your email"
            />
            <StyledButton
            sx={{ right: 0, bottom: 0, top: 0,position:"absolute" }}
            endIcon={<ArrowForward />}
            >
            Subscribe
            </StyledButton>
        </Stack>
        <p style={{ fontSize: 14, color: "var(--color-text)" }}>
            By subscribing you agree to our{" "}
            <Link to={"/terms-and-conditions"} style={{ color: "#000" }}>
            Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link to={"/privacy-and-policy"} style={{ color: "#000" }}>
            Privacy & Cookies Policy
            </Link>{" "}
        </p>
        </form>
    );
};

export default SubscribeForm;
