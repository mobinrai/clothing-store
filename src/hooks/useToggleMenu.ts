import React from 'react'

const useToggleMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement| null>(null)
    const isOpen = Boolean(anchorEl)

    const handleMenuOpen=(event:React.MouseEvent<HTMLElement>)=>{
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = ()=>{
        setAnchorEl(null)
    }
  return {
    anchorEl,
    isOpen,
    handleMenuOpen,
    handleMenuClose
  }
}

export default useToggleMenu