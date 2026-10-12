import React from "react"
import Header from "../pages/admin/Header"
import { Outlet } from "react-router"
import Footer from "../shared/footer"
import Subscribe from '../shared/subscribe'
import MySnackBar from "../shared/snackBar/MySnackBar"

const UserLayout = () => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(true)
    
    const toggleDrawer=()=>{
            setIsDrawerOpen(!isDrawerOpen)
        }
    return (
        <React.Fragment>
            <Header toggleDrawer={toggleDrawer}/>            
            <Outlet/>
            <Subscribe/>
            <Footer/>
            <MySnackBar/>
        </React.Fragment>
    )
}

export default UserLayout