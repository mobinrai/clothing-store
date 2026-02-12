import { createBrowserRouter } from "react-router";
import MainLayout from "./components/layout/MainLayout";
import React from "react";

const Home = React.lazy(()=> import("./components/pages/home"))
const ProductDetail = React.lazy(()=> import("./components/pages/productDetail"))
const AboutUs = React.lazy(()=> import("./components/pages/AboutUs"))
const ContactUs = React.lazy(()=> import("./components/pages/contact/ContactUs"))
const Login =React.lazy(()=>import("./components/pages/account/login"))
const Register =React.lazy(()=>import("./components/pages/account/register/Register"))
const ResetPassword =React.lazy(()=>import("./components/pages/account/Reset"))
const Cart =React.lazy(()=>import("./components/shared/cart"))
const Checkout =React.lazy(()=>import("./components/shared/checkout"))
const Collection =React.lazy(()=>import("./components/pages/collections"))
const CheckoutLayout =React.lazy(()=>import("./components/layout/CheckoutLayout"))

const router = createBrowserRouter([
    {
        Component:MainLayout,
        children:[
            {index:true, Component:Home},
            {
                path:'/itm/:productId', Component:ProductDetail
            },
            {
                path:'/cart', Component:Cart
            },
            {
                path:'/about-us', Component:AboutUs
            },
            {
                path:'/contact-us', Component:ContactUs
            },
            {
                path:'/all-products', Component:Collection
            },
            {
                path:'/account',
                children:[
                    {
                        path:'login', Component:Login
                    },
                    {
                        path:'register', Component:Register
                    },
                    {
                        path:'reset', Component:ResetPassword
                    }
                ]
            },
        ],
    },
    {
        path:'/checkout',
        Component:CheckoutLayout,
        children:[
            {index:true, Component:Checkout}
        ]
    },
])

export default router