import { Grid, List, ListItemText } from "@mui/material";
import FooterNavTitle from "./FooterNavTitle";

const FooterListItem = ({
    title,
    items,
    }: {
    title: string;
    items: string[];
    }) => {
    return (
        <Grid size={{ xs: 12, sm: 4, md: 4 }} py={{ xs: 1, md: 12 }}>
        <FooterNavTitle title={title} />
        <List>
            {items.map((item, index) => {
            return (
                <ListItemText
                key={index}
                primary={item}
                sx={{
                    marginBottom: "0.7rem",
                    textTransform: "uppercase",
                    "& .MuiListItemText-primary": {
                    fontSize: "0.75rem",
                    color: "var(--color-link)",
                    },
                }}
                />
            );
            })}
        </List>
        </Grid>
    );
};

export default FooterListItem;
