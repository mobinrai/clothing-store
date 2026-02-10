import CheckoutFormFields from "./CheckoutFormFields";
import StyledButton from "../styled/StyledButton";
import {
  Box,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { useFormContext, type SubmitHandler } from "react-hook-form";
import { BILLING_TYPES, billingTypes } from "./checkTypes";
import CustomRadioFormController from "../../customController/CustomRadioFormController";
import type { CheckoutSchema } from "./checkoutSchema";

// import CustomTextField from "../../customController/CustomTextField";


type ShippingOption = "sameAsBillingAddress" | "differentShippingAddress";

const CheckoutForm = () => {
    const { handleSubmit, resetField} = useFormContext<CheckoutSchema>()
    const [billingAddress, setBillingAddress] = useState<ShippingOption>(BILLING_TYPES.SAME);
    const handleToggle = (event:React.ChangeEvent<HTMLInputElement>) => {
        const value =event.target.value as "sameAsBillingAddress" | "differentShippingAddress"
        if(value==BILLING_TYPES.SAME){
            const differentAddressFields = [
                'differentAddress.firstName',
                'differentAddress.lastName',
                'differentAddress.country',
                'differentAddress.city',
                'differentAddress.street',
                'differentAddress.houseNumber',
                'differentAddress.postCode'
            ] as const;
            
            differentAddressFields.forEach(field => {
                resetField(field);
            });
        }
        
        setBillingAddress(value);
    };
    const onSubmit: SubmitHandler<CheckoutSchema> = (data) => {
        console.log(data);
    };
    return (
        
        <form action="" className="checkoutForm" onSubmit={handleSubmit(onSubmit)}>
            <span className="text-xs text-red-600 font-bold">important note: field with * are necessary.</span>
            {/* <Stack gap={2}>
                <CustomTextField<CheckoutSchema>
                    name={'email'}
                    placeHolder="Email"
                    label="Email"
                    register={register}
                    error={errors?.email}
                />
                <span className="text-xs text-(--color-text)">
                Email me with news and offers
                </span>
            </Stack> */}
            <h6 className="my-5 font-extrabold border-b border-gray-300">Delivery</h6>
            <Stack gap={3}>
                <CheckoutFormFields/>
                <h6 className="my-2 font-extrabold border-b border-gray-300">
                    Billing Address
                </h6>                
                <CustomRadioFormController<CheckoutSchema>
                name="billingAddressType"
                options={billingTypes}
                handleClick={handleToggle}/>                
                <Box>                                        
                    {
                        billingAddress === BILLING_TYPES.DIFFERENT &&  (
                        <Stack
                        sx={{ p: 2, ml: -1.5, mr: 2, backgroundColor: "#f5f5f5",transition:'all 0.3s linear' }}
                        gap={3}
                        >
                        <span className="text-xs text-red-600 font-bold">note: If you click on same as billing address. your different billing address will be empty.</span>
                            <CheckoutFormFields billingTypeValue="differentAddress"/>
                        </Stack>)
                    }
                </Box>
                <StyledButton sx={{ mb: 2 }} type="submit">Complete order</StyledButton>
            </Stack>
        </form>
    );
};

export default CheckoutForm;
