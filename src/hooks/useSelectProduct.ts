import React from "react"
import type { ProductItem } from "../components/pages/admin/types"

export default function useSelectProduct(){
    const [selectedProduct, setSelectedProduct]= React.useState<ProductItem|null>(null)
    const [selectedSize, setSelectedSize] = React.useState<{id:string, name:string,stock: number;}| null>(null)
    const [selectedColor, setSelectedColor] = React.useState<{id: string; name: string; stock: number; price: number; } | null>(null)
    const [selectedQty, setSelectedQty] = React.useState(1)
    const sizes = React.useMemo(() => {
            if (!selectedProduct) return []    
            return selectedProduct.variants.map(item => ({
                id: item._id ?? '',
                name: item.size,
                stock:item.stock
            }))
        }, [selectedProduct])

    React.useEffect(()=>{
        if(!selectedProduct){
             setSelectedSize(null)
             return
        }
        const firstAvailable = selectedProduct.variants.find(v => v.stock > 0);
        setSelectedSize(firstAvailable ? {
            id: firstAvailable._id ?? '',
            name: firstAvailable.size,
            stock:firstAvailable.stock
        } : null)
    }, [selectedProduct])
    return {
        sizes,selectedProduct, selectedSize, selectedColor,selectedQty, setSelectedQty, setSelectedColor,setSelectedSize, setSelectedProduct
    }
}