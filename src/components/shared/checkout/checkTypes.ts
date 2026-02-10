export const BILLING_TYPES={
    SAME:'sameAsBillingAddress',
    DIFFERENT:"differentShippingAddress"
}as const


export const billingTypes=[
    {
        value:BILLING_TYPES.SAME,
        label:"Same as billing address"
    },{
        value:BILLING_TYPES.DIFFERENT,
        label:"Different from billing address"
    }
]

export interface Address{
    firstName:string;
    lastName:string;
    country:string;
    city:string;
    street:string;
    houseNumber:string;
    postCode:string;
}

export type CheckoutFormData ={
    email:string;
    billingAddressType: string;
    billingAddress:Address
    differentAddress?:Address
}

export const defaultValues:CheckoutFormData={
    email:'',
    billingAddress:{
        firstName:'',
        lastName:'',
        country:'',
        city:'',
        street:'',
        houseNumber:'',
        postCode:'',
    },
    billingAddressType:BILLING_TYPES.SAME,
    differentAddress:{ 
        firstName:'',
        lastName:'',
        country:'',
        city:'',
        street:'',
        houseNumber:'',
        postCode:'',
    }
}