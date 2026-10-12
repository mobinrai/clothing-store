import { useLocation } from "react-router"
import ProductFormContainer from "./ProductFormContainer"

const ProductWrapper = () => {
    const location = useLocation()
    return (
        <ProductFormContainer key={location.pathname}/>
    )
}

export default ProductWrapper