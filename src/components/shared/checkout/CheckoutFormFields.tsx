import { Box, Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import CustomSelectFormController from "../../customController/CustomSelectFormController";
import type { CheckoutSchema } from "./checkoutSchema";
import CustomTextField from "../../customController/CustomTextField";

const CheckoutFormFields = ({billingTypeValue='billingAddress'}:{billingTypeValue?:'billingAddress'|'differentAddress'})=>{
    const {register,formState:{errors}} = useFormContext<CheckoutSchema>()
    const countries = [{
        value:'germany',
        label:'Germany'
    },{
        value:'unitedKingdom',
        label:'United Kingdom'
    }];
    
    return (
        <>
            <CustomSelectFormController name={`${billingTypeValue}country`} options={countries}/>
            <Box display={"flex"} gap={2}>
                <Box flex={1}>
                    <CustomTextField<CheckoutSchema>
                    name={`${billingTypeValue}.firstName`}
                    placeHolder="First name"
                    label="First Name"
                    register={register}
                    error={errors?.[billingTypeValue]?.firstName}
                />
                </Box>
                <Box flex={1}>
                    <CustomTextField<CheckoutSchema>
                    name={`${billingTypeValue}.lastName`}
                    placeHolder="Last name"
                    label="Last Name"
                    register={register}
                    error={errors?.[billingTypeValue]?.lastName}
                />
                </Box>
            </Box>
            <CustomTextField<CheckoutSchema>
                name={`${billingTypeValue}.city`}
                placeHolder="City"
                label="City"
                register={register}
                error={errors?.[billingTypeValue]?.city}
                />
            <CustomTextField<CheckoutSchema>
                name={`${billingTypeValue}.street`}
                placeHolder="Street"
                label="Street"
                register={register}
                error={errors?.[billingTypeValue]?.street}
                />
            
            <Stack direction={'row'} gap={1}>
                <Box flex={1}>
                    <CustomTextField<CheckoutSchema>
                    name={`${billingTypeValue}.houseNumber`}
                    placeHolder="House Number"
                    label="House number"
                    register={register}
                    sx={{flex:1}}
                    error={errors?.[billingTypeValue]?.houseNumber}
                    />
                </Box>
                <Box flex={1}>
                    <CustomTextField<CheckoutSchema>
                    name={`${billingTypeValue}.postCode`}
                    placeHolder="Post code"
                    label="Post Code"
                    register={register}
                    error={errors?.[billingTypeValue]?.postCode}
                    />
                </Box>
            </Stack>
        </>
    );
};

export default CheckoutFormFields;
