import { AccountCircle } from '@mui/icons-material'
import { IconButton, Stack } from '@mui/material'
import type { withChildren } from '../../../types/commonTypes'
import useToggleMenu from '../../../hooks/useToggleMenu'
import {Menu as MainMenu, MenuItem} from '@mui/material'

const ToggleMenu = ({children,menuItemList}:{menuItemList?:Array<string>}&withChildren) => {
    const {handleMenuClose, handleMenuOpen, isOpen, anchorEl} = useToggleMenu()
    return (
        <Stack direction={'row'} alignItems={'center'}>
            <IconButton
            size='large'
            color='inherit'
            onClick={handleMenuOpen}>
                <AccountCircle/>
            </IconButton> 
            <MainMenu anchorEl={anchorEl} open={Boolean(isOpen)}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                onClose={handleMenuClose}>
                {
                    children? children:menuItemList?.length?menuItemList.map((list)=>{
                        return <MenuItem key={`user-${list}`} onClick={handleMenuClose}>{list}</MenuItem>
                    }):''
                }
            </MainMenu>
        </Stack>
    )
}

export default ToggleMenu