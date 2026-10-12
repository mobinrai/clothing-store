import { useLocation } from 'react-router'
import ProductFormContainer from './ProductFormContainer'

const ProductPageWrapper = () => {
    const location = useLocation()
    return <ProductFormContainer key={location.pathname}/>
}

export default ProductPageWrapper