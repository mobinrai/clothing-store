import { useCallback, useState } from "react";

export function useAddSubtract(){
    const [productQty, setProductQty] = useState(1);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim();
        if (value.length > 3) {
            return false;
        }
        if (parseInt(value)) {
            setProductQty(parseInt(value));
        }
    };

    const handleAddClick=useCallback(()=>{
       setProductQty(prev=>prev+1);
    },[])

    const handleSubClick=()=>{
        setProductQty(prev=>prev==1?1:prev-1);
    }

    return {productQty, handleAddClick, handleSubClick, handleChange}

}