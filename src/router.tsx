import { createBrowserRouter } from "react-router";
import Home from "./components/pages/home";
import ProductDetail from "./components/pages/productDetail";
import MainLayout from "./components/layout/MainLayout";

const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {index:true, Component:Home},
            {
                path:'/itm/:productId', Component:ProductDetail
            }
        ]
    }
])

export default router