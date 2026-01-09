import { Outlet } from 'react-router'
import Header from '../shared/header'
import Footer from '../shared/footer'
import Subscribe from '../shared/subscribe'


const MainLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Subscribe/>
            <Footer/>
        </>
    )
}

export default MainLayout