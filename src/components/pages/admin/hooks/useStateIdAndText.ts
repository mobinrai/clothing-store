import { useState } from "react"
import type { baseGenericType } from "../types"

export default function useStateIdAndText(defaultInitialState:baseGenericType){
    const [state, setState] = useState<baseGenericType>(defaultInitialState)

    const handleUpdate=(id:string)=>{
        const newText = ''
        setState(prev=>{
            return {
                ...prev,
                id,
                newText
            }
        })
    }
    
    const handleCancel=()=>{
        setState(defaultInitialState)
    }

    const handleTextChange=(value:string)=>{
        if(!(/^[a-zA-Z-_0-9]*$/.test(value))){
            return false
        }
        setState(prev=>({...prev, newText:value}))
        return true
    }
    return {
        state,
        id:state.id,
        newText:state.newText,
        image:state.image,
        setState,
        handleCancel,
        handleUpdate,
        handleTextChange
    }
}