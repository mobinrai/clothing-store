import { useQuery } from "@tanstack/react-query"
import type { LoginUserDetails } from "../types/authTypes"
import { privateApi, publicApi } from "../api/axios"
import type { ProductItem } from "../components/pages/admin/types"
import type { IUser } from "../types/userInterface"
import { getFromLocalStorage } from "../utils/common"

export function fetchMeQuery(){
    const token = getFromLocalStorage('token')
    return useQuery<LoginUserDetails>({
            queryKey:['me'],
            queryFn:async()=>{
                const loginUser = await privateApi.get('/auth/me')
                return loginUser?.data
            },
            retry:false,
            staleTime:5 * 60 * 1000,
            enabled:!!token,
            refetchOnReconnect: true,
            refetchOnWindowFocus:false,
            refetchOnMount:true
    })
}

export function fetchHomeQuery(){
    return useQuery({
        queryKey:['homeQuery'],
        queryFn:async()=>{
            const {data} = await publicApi.get<{success:boolean, data:Array<Record<string, ProductItem[]>>}>('/home/')
            return data.data
        }
    })
}

export function fetchShoppingCart(user:IUser|null){
    return  useQuery({
            queryKey:['savedCarts'],
            queryFn:async () => {
                const {data} = await privateApi.get('/carts')
                return data.data
            },
            enabled:!!user
        })
}