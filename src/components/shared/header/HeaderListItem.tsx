import { ListItem } from '@mui/material'
import { NavLink } from 'react-router'
import type { HeaderListItemProps } from './headerTypes'

const HeaderListItem = ({linkTo, title}:HeaderListItemProps) => {
    return (
        <ListItem sx={{width:'fit-content'}}>
            <NavLink to={linkTo} className={'font-bold uppercase text-[12px] hover:text-red-500 hover:transition-colors hover:duration-200'}>{title}</NavLink>
        </ListItem>
    )
}

export default HeaderListItem