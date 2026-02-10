import { createBrowserRouter } from "react-router";
import Home from "./components/pages/home";
import ProductDetail from "./components/pages/productDetail";
import MainLayout from "./components/layout/MainLayout";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/contact/ContactUs";
import Login from "./components/pages/account/login";
import ResetPassword from "./components/pages/account/Reset";
import Register from "./components/pages/account/register/Register";
import Cart from "./components/shared/cart";
import CheckoutLayout from "./components/layout/CheckoutLayout";
import checkout from "./components/shared/checkout";
import Collection from "./components/pages/collections";

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
            {index:true, Component:checkout}
        ]
    },
])

export default router