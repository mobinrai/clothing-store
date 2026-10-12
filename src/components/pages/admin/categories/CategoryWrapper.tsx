import CategoryFormContainer from './CategoryFormContainer'
import { useLocation } from 'react-router'

const CategoryWrapper = () => {
    const location = useLocation()
    return (
        <CategoryFormContainer  key={location.pathname}/>
    )
}

export default CategoryWrapper