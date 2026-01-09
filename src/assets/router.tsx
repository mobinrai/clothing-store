import { createBrowserRouter } from "react-router";
import Home from "../components/pages/Home";
import MainLayout from "../components/layout/MainLayout";

const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {index:true, Component:Home}
        ]
    }
])

export default router