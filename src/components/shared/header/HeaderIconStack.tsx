import { Stack } from "@mui/material";
import type { ReactNode } from "react";

const HeaderIconStack = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        position: "relative",
        padding: 0,
        background: "#fff",
        boxShadow: 8,
        borderRadius: 10,
        height: 54,
        minWidth: 54,
        cursor: "pointer",
        transition: "background .17s linear",
        "&:hover": { background: "#000", color: "#fff" },
      }}
    >
      {children}
    </Stack>
  );
};

export default HeaderIconStack;
