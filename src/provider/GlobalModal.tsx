import { createContext, useContext, useState } from "react";
import type { withChildren } from "../types/commonTypes";
import { Box, Modal, type SxProps } from "@mui/material";

type GlobalModalContextProps={
    isModalOpen:boolean;
    handleOpenModal:()=>void;
    handleCloseModal:()=>void;
}

const GlobalModalContext = createContext<GlobalModalContextProps|null>(null)

const GlobalModal = ({children}:withChildren)=>{
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal=()=>setIsModalOpen(true)

    const handleCloseModal=()=>setIsModalOpen(false)

    return (
        <GlobalModalContext.Provider value={{isModalOpen, handleOpenModal, handleCloseModal}}>
            {children}
        </GlobalModalContext.Provider>
    )
}

export const useGlobalModal = ()=>{
    const context = useContext(GlobalModalContext)
    if(!context) {
        throw new Error('useGlobalModal must be inside GlobalModalProvider')
    }
    return context
}

GlobalModal.Content = ({children, sx, onClose}:withChildren&{sx?:SxProps, onClose?:()=>void})=>{
    const {isModalOpen, handleCloseModal} = useGlobalModal()
    const close = ()=>{
        handleCloseModal()
        onClose?.()
    }
    return <Modal sx={{display:'grid',placeItems:'center',...sx}} open={isModalOpen} onClose={close}
            keepMounted={false}>
        <Box>{children}</Box>
    </Modal>
}

export default GlobalModal

