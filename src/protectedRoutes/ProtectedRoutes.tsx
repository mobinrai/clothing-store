import { Navigate, Outlet } from "react-router";
import Loader from "../components/shared/Loader";
import useMe from "../hooks/useMe";


const ProtectedRoutes = ({roleName}:{roleName:string}) => {
    const {isLoading, isPending, data} = useMe()
    
    if(isPending || isLoading) return <Loader/>;
    
    if(!data?.user || data.user && data.user.roleName!==roleName){
        return <Navigate to="/account/login" replace/>
    }
    return <Outlet/>
}

export default ProtectedRoutes