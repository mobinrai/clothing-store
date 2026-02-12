import { Outlet} from 'react-router'
import Header from '../shared/header'
import Footer from '../shared/footer'
import Subscribe from '../shared/subscribe'
import  React from 'react'


const MainLayout = () => {
    return (
        <React.Fragment>
            <Header/>            
            <Outlet/>
            <Subscribe/>
            <Footer/>
        </React.Fragment>    
    )
}

export default MainLayout