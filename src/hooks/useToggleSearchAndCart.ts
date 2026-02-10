import  { useState } from "react";
import type { ShowShoppingOrSearchContent } from "../types/commonTypes";

export const useToggleSearchAndCart = () => {
    const [showCart, setShowCart] = useState(false);
    const [showSearchForm, setShowSearchForm] = useState(false);
    const toggleContent = (name: ShowShoppingOrSearchContent) =>{
        if(name == "shoppingCart"){
            setShowCart(!showCart);
            setShowSearchForm(false);
        }else{
            setShowCart(false);
            setShowSearchForm(!showSearchForm);
        }
    };
    return { toggleContent, showCart, showSearchForm };
};
