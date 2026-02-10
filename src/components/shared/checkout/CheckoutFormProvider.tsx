import { defaultValues } from './checkTypes';
import { FormProvider, useForm } from 'react-hook-form';
import CheckoutForm from './CheckoutForm';
import { zodResolver } from "@hookform/resolvers/zod";
import {type CheckoutSchema, formSchema} from './checkoutSchema'

const CheckoutFormProvider = () => {
    const methods = useForm<CheckoutSchema>({
            mode: "all",
            defaultValues,
            resolver:zodResolver(formSchema)
        });
    return (
        <FormProvider {...methods}>
            <CheckoutForm/>
        </FormProvider>
    )
}

export default CheckoutFormProvider