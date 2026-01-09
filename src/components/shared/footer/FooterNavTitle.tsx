import { Typography } from "@mui/material";

const FooterNavTitle = ({ title }: { title: string }) => {
    return (
        <Typography
        variant="h6"
        fontWeight={700}
        textTransform={"uppercase"}
        fontSize={16}
        mb={{ xs: 0, sm: 3 }}
        >
        {title}
        </Typography>
    );
};

export default FooterNavTitle;
