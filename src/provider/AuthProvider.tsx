import { createContext, useContext, useEffect, useState } from "react";
import { privateApi } from "../api/axios";
import type { AuthContextType } from "../types/authTypes";
import type { IUser } from "../types/userInterface";
import { fetchMeQuery } from "../queries/allQueries";
import { useMutation } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router";
import { useGeneric } from "../components/pages/admin/hooks/useGenericState";
import { getFromLocalStorage } from "../utils/common";

export const AuthContext = createContext<AuthContextType|null>(null)

export const AuthProvider=()=>{
    const [user, setUser] = useState<IUser|null>(null)
    const {queryClient, navigate, setErrorMessage} = useGeneric()
    const {isSuccess, data} = fetchMeQuery()
    const token = localStorage.getItem("accessToken")
    const location = useLocation()
    const {mutateAsync} = useMutation({
            mutationFn:async ()=>{
                const {data}= await privateApi.post<{success:boolean, message:string}>('/auth/logout')
                return data
            },onSuccess:(data)=>{
                return data
            },
            onError:(error)=>{
                return error.message
            }
    })

    const afterUserLogin=(newUser:IUser, newToken:string)=>{
        setUser(newUser)
        localStorage.setItem('token', JSON.stringify(newToken))
        privateApi.defaults.headers.common['Authorization'] = `Bearer ${newToken}`
    }

    const logout = async()=>{
        const result = await mutateAsync()
        const token = getFromLocalStorage('token')
        if(!token){
            navigate('/',{replace:true})
        }
        if(result?.success){
            setUser(null)
            localStorage.removeItem('token')
            delete privateApi.defaults.headers.common['Authorization']
            queryClient.invalidateQueries({queryKey:['me']})
            navigate('/',{replace:true, state:{from:'logout'}})
        }else{
            setErrorMessage(result?.message)
        }
    }

    useEffect(() => {
        if (token) {
            privateApi.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${token}`
        }else if((location.pathname.startsWith('/admin') || location.pathname.startsWith('/user')) && !token){
            navigate('/account/login')
        }
    }, [token])

    useEffect(()=>{
        if(isSuccess && data?.user){
            setUser(data?.user)
        }
    }, [isSuccess, data])

    return (
        <AuthContext.Provider value={{ user, afterUserLogin, logout }}>
            <Outlet/>
        </AuthContext.Provider>
    )
}
export function useAuth() {
    const context= useContext(AuthContext)
    if(!context){
        throw new Error('useAuth must be within an Authprovider')
    }
    return context
}