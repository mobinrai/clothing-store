import { Box, Stack } from "@mui/material";
import { get, type FieldValues} from "react-hook-form";
import CustomSelectFormController from "../../customController/CustomSelectFormController";
import CustomTextField from "../../customController/CustomTextField";
import type {  Path } from "react-hook-form";
import type { CheckoutFormProps } from "./checkTypes";

const CheckoutFormFields = <T extends FieldValues>({
    billingTypeValue='billingAddress', register, errors, control}:CheckoutFormProps<T>)=>{
    const countries = [{
        value:'germany',
        label:'Germany'
    },{
        value:'unitedKingdom',
        label:'United Kingdom'
    }];

    return (
        <>
            <CustomSelectFormController<T> control={control} name={`${billingTypeValue}country` as Path<T>} options={countries}/>
            <Box display={"flex"} gap={2}>
                <Box flex={1}>
                    <CustomTextField<T>
                    name={`${billingTypeValue}.firstName` as Path<T>}
                    placeHolder="First name"
                    label="First Name"
                    register={register}
                    error={get(errors, `${billingTypeValue}.firstName`)}
                />
                </Box>
                <Box flex={1}>
                    <CustomTextField<T>
                    name={`${billingTypeValue}.lastName` as Path<T>}
                    placeHolder="Last name"
                    label="Last Name"
                    register={register}
                    error={get(errors, `${billingTypeValue}.lastName`)}
                />
                </Box>
            </Box>
            <CustomTextField<T>
                name={`${billingTypeValue}.city` as Path<T>}
                placeHolder="City"
                label="City"
                register={register}
                error={get(errors, `${billingTypeValue}.city`)}
                />
            <CustomTextField<T>
                name={`${billingTypeValue}.street` as Path<T>}
                placeHolder="Street"
                label="Street"
                register={register}
                error={get(errors, `${billingTypeValue}.street`)}
                />
            
            <Stack direction={'row'} gap={1}>
                <Box flex={1}>
                    <CustomTextField<T>
                    name={`${billingTypeValue}.houseNumber` as Path<T>}
                    placeHolder="House Number"
                    label="House number"
                    register={register}
                    sx={{flex:1}}
                    error={get(errors, `${billingTypeValue}.houseNumber`)}
                    />
                </Box>
                <Box flex={1}>
                    <CustomTextField<T>
                    name={`${billingTypeValue}.postCode` as Path<T>}
                    placeHolder="Post code"
                    label="Post Code"
                    register={register}
                    error={get(errors, `${billingTypeValue}.postCode`)}
                    />
                </Box>
            </Stack>
        </>
    );
};

export default CheckoutFormFields;
