import { createContext, useContext, useState, type ReactNode } from "react";
import {type SnackbarCloseReason } from "@mui/material";
import type { SnackBarContextType, SnackBarStates } from "../types/commonTypes";

export const SnackBarContext = createContext<SnackBarContextType|null>(null)

export function MySnackBarProvider({children}:{children:ReactNode}){
    const [snackbarState, setSnackbarState] = useState<SnackBarStates>({
        open:false,
        message:''
    })
    
    const handleClose = (_?:React.SyntheticEvent|Event, reason?: SnackbarCloseReason)=>{
        if (reason === 'clickaway') {
            setSnackbarState({
                open:false,
                message:''
            })
            return
        }
         setSnackbarState({
            open:false,
            message:''
        })
    }

    const value={snackbarState, setSnackbarState, handleClose}

    return <SnackBarContext.Provider value={value}>
            {children}
    </SnackBarContext.Provider>
}

export function useMySnackBar() {
    const context= useContext(SnackBarContext)
    if(!context){
        throw new Error('useMySnackBar must be inside MySnackBarProvider')
    }
    return context
}