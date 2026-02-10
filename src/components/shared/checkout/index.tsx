import {Grid } from "@mui/material";
import CheckItemDetails from "./CheckItemDetails";
import CheckoutFormProvider from "./CheckoutFormProvider";


const checkout = () => {
   
    return (
        <div className="max-w-300 mx-auto">
        <div className="px-10 md:px-20 lg:px-0">
            <Grid container>
            <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
                <div className="pt-20 pr-10">
                    <CheckoutFormProvider/>
                </div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
                <div className="pt-20 px-10 sticky top-2.5 bg-[#f2f2f2] h-dvh">
                    <CheckItemDetails/>
                </div>
            </Grid>
            </Grid>
        </div>
        </div>
    );
};

export default checkout;
