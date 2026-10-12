import React from "react"
import { createBrowserRouter } from "react-router"
import MainLayout from "./components/layout/MainLayout"
import ErrorPage from "./components/error/ErrorPage"
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes"
import AdminLayout from "./components/layout/AdminLayout"
import UserLayout from "./components/layout/UserLayout"
import { AuthProvider } from './provider/AuthProvider.tsx'

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
const AdminDashboard=React.lazy(()=>import("./components/pages/admin/Dashboard"))
const AdminRole=React.lazy(()=>import("./components/pages/admin/roles"))
const AdminAddNewRole=React.lazy(()=>import("./components/pages/admin/roles/AddNewRole"))
const AdminCategory=React.lazy(()=>import("./components/pages/admin/categories"))
const AdminProduct=React.lazy(()=>import("./components/pages/admin/products"))
const ProductWrapper=React.lazy(()=>import("./components/pages/admin/products/ProductWrapper"))
const UserDashboard=React.lazy(()=>import("./components/pages/users/UserDashboard"))
const CategoryWrapper=React.lazy(()=>import("./components/pages/admin/categories/CategoryWrapper"))

const router = createBrowserRouter([
    {errorElement:<ErrorPage/>},
    {element:<AuthProvider/>,
        children:[
            {
        path:'/account',
        children:[
            {path:'login', Component:Login},
            {path:'register', Component:Register },
            {path:'reset', Component:ResetPassword}
        ]
    },
    {
        Component:MainLayout,
        errorElement:<ErrorPage/>,
        children:[
            {index:true, Component:Home},
            {
                path:'/product/:slug', Component:ProductDetail
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
        ],
    },
    {
        errorElement:<ErrorPage/>,
        path:'/checkout',
        Component:CheckoutLayout,
        children:[
            {index:true, Component:Checkout}
        ]
    },
    {
        element:<ProtectedRoutes roleName="admin"/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                Component:AdminLayout,
                path:'/admin',
                children:[
                    {index:true, Component:AdminDashboard},
                    {path:'dashboard',Component:AdminDashboard},
                    {path:'roles', children:[
                        {index:true, Component:AdminRole},
                        {path:'new', Component:AdminAddNewRole}
                    ]},
                    {path:'categories/',
                        children:[
                            {index:true,  Component:AdminCategory},
                            {path:'edit/:id',Component:CategoryWrapper},
                            {path:'new',Component:CategoryWrapper}
                        ]
                    },
                    {path:'products/',
                        children:[
                            {index:true,  Component:AdminProduct},
                            {path:'edit/:id',Component:ProductWrapper},
                            {path:'new',Component:ProductWrapper}
                        ]
                    }
                ]
            },
            
        ]
    },
    {
        element:<ProtectedRoutes roleName="user"/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                Component:UserLayout,
                path:'/user',
                children:[
                    {index:true, Component:UserDashboard},
                    {path:'dashboard', Component:UserDashboard}
                ]
            },
            
        ]
    }
        ]
    }

])

export default router