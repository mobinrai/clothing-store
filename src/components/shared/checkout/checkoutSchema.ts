import z from "zod";

const allFields = {
    firstName:z.string().min(1, 'First Name field is required'),
    lastName:z.string().min(1, 'Last Name field is required'),
    country:z.string().min(1, 'Country field is required'),
    city:z.string().min(1, 'City field is required'),
    street:z.string().min(1, 'Street field is required'),
    houseNumber:z.string().min(1, 'House Number field is required'),
    postCode:z.string().min(1, 'Post Code field is required'),
}

export const formSchema=z.object({
    billingAddress:z.object({...allFields}),    
    billingAddressType:z.string(),
    differentAddress:z.object({...allFields}).optional()
})

export type CheckoutSchema = z.infer<typeof formSchema>