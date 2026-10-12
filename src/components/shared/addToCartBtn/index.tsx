import useAddToCart from '../../../hooks/useAddToCart'
import StyledButton from '../styled/StyledButton'
import { ArrowForward } from '@mui/icons-material'
import { useGeneric } from '../../pages/admin/hooks/useGenericState'

type AddToCartBtnProps={
    data:{
        quantity:number
        productId:string
        variantId?:string
        size?:string
        color?:string
    }
}

const AddToCartBtn = ({data}:AddToCartBtnProps) => {
    const {navigate, location} = useGeneric()
    const {handleAddToCart, mutationPending, user} = useAddToCart()
    return (
        <StyledButton
            className="productAddToCart"
            bgColor="white"
            textColor="black"
            disabled={Boolean(mutationPending)}
            sx={{
                bottom: 10,
                minWidth:'90%',
                left: '0%',
                borderRadius:'0 !important',
                transform:"translateY(15px)",
                transition:".5s",
                opacity:1,
                zIndex:99,
                mx:2
            }}
            endIcon={<ArrowForward />}
            onClick={(event)=>{
                event.preventDefault()
                event.stopPropagation()
                if(!user){
                    localStorage.setItem('pendingAction',JSON.stringify({
                        cardDetails:{
                            quantity:data.quantity,
                            productId:data.productId,
                        },
                        type:'ADD_TO_CART'
                    }))
                    navigate('/account/login',{
                        state:{from:location.pathname}
                    })
                    return;
                }
                handleAddToCart({quantity:data.quantity, productId:data.productId})}}>
            Add to cart
        </StyledButton>
    )
}

export default AddToCartBtn