import { Outlet} from 'react-router'
import Header from '../shared/header'
import Footer from '../shared/footer'
import Subscribe from '../shared/subscribe'
import  React from 'react'
import { useIsFetching } from '@tanstack/react-query'
import Loader from '../shared/Loader'
import MySnackBar from '../shared/snackBar/MySnackBar'

const MainLayout = () => {
    const isFetching = useIsFetching({queryKey:['homeQuery']})

    React.useEffect(()=>{
        if(isFetching>0){
            document.body.style.overflow = 'hidden';
        }
        return ()=>{
            document.body.style.overflow = 'unset'
        }
    },[isFetching])
    
    return (
        <React.Fragment>
            {
                isFetching > 0 && <Loader/>
            }
            <Header/>
            <Outlet/>
            <Subscribe/>
            <Footer/>
            <MySnackBar/>
        </React.Fragment>    
    )
}

export default MainLayout