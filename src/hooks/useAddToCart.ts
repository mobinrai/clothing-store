import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useAuth } from '../provider/AuthProvider'
import type { ShoppingCartItem } from '../types/commonTypes'
import useApiMutation from '../api/useApiMutation'
import { fetchShoppingCart } from '../queries/allQueries'
import { useMySnackBar } from '../provider/MySnackBarProvider'

const useAddToCart = () => {
    const {user, logout}= useAuth()
    const [carts, setCarts] = React.useState<ShoppingCartItem|null>(null)
    const queryClient = useQueryClient()
    const {setSnackbarState}= useMySnackBar()

    const {isPending:mutationPending, mutate, isError:mutationError} = useApiMutation({cbSuccess,cbError})

    const {data:savedCarts, isFetching, error:cartError} = fetchShoppingCart(user)

    React.useEffect(()=>{
        if(!isFetching && savedCarts){
            setCarts(savedCarts)
        }
    },[savedCarts,isFetching])

    const handleAddToCart = ({quantity=1, productId=''}:{quantity:number, productId:string})=>{
        mutate({
            url:'/carts/add',
            methodName:'post',
            data:{quantity, productId}
        })
    }
    
    const handleDeleteCart=(id:string)=>{
        console.log(id);
    }
    
    function cbSuccess(data:any){
        queryClient.invalidateQueries({queryKey:['savedCarts']})
        setSnackbarState({
            open:true,
            message:data?.message
        })
    }
    function cbError(error:Error){
        setSnackbarState({
            open:true,
            message:error?.message
        })
    }

    return {
        user,
        carts,
        cartError,
        isFetching,
        mutationPending,
        mutationError,
        logout,
        handleAddToCart,
        handleDeleteCart
    }
}

export default useAddToCart