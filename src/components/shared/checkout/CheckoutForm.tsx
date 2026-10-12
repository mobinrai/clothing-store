import CheckoutFormFields from "./CheckoutFormFields";
import StyledButton from "../styled/StyledButton";
import {
  Box,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { type SubmitHandler } from "react-hook-form";
import { BILLING_TYPES, billingTypes } from "./checkTypes";
import CustomRadioFormController from "../../customController/CustomRadioFormController";
import { formSchema, type CheckoutSchema } from "./checkoutSchema";
import { useForm } from "react-hook-form";
import { defaultValues } from './checkTypes';
import { zodResolver } from "@hookform/resolvers/zod";


type ShippingOption = "sameAsBillingAddress" | "differentShippingAddress";

const CheckoutForm = () => {
    const {control, register, formState:{errors}, handleSubmit, resetField} = useForm<CheckoutSchema>({
            mode: "all",
            defaultValues,
            resolver:zodResolver(formSchema)
        });
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
    };
    return (
        <form action="" className="checkoutForm" onSubmit={handleSubmit(onSubmit)}>
            <span className="text-xs text-red-600 font-bold">important note: field with * are necessary.</span>
            <h6 className="my-5 font-extrabold border-b border-gray-300">Delivery</h6>
            <Stack gap={3}>
                <CheckoutFormFields<CheckoutSchema> register={register} errors={errors} control={control}/>
                <h6 className="my-2 font-extrabold border-b border-gray-300">
                    Billing Address
                </h6>                
                <CustomRadioFormController<CheckoutSchema>
                name="billingAddressType"
                options={billingTypes}
                handleClick={handleToggle}
                control={control}/>                
                <Box>
                    {
                        billingAddress === BILLING_TYPES.DIFFERENT &&  (
                        <Stack
                        sx={{ p: 2, ml: -1.5, mr: 2, backgroundColor: "#f5f5f5",transition:'all 0.3s linear' }}
                        gap={3}
                        >
                        <span className="text-xs text-red-600 font-bold">note: If you click on same as billing address. your different billing address will be empty.</span>
                            <CheckoutFormFields<CheckoutSchema> register={register} errors={errors} control={control} billingTypeValue="differentAddress"/>
                        </Stack>)
                    }
                </Box>
                <StyledButton sx={{ mb: 2 }} type="submit">Complete order</StyledButton>
            </Stack>
        </form>
    );
};

export default CheckoutForm;
