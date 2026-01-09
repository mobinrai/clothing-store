import { ListItem } from '@mui/material'
import { NavLink } from 'react-router'
import type { HeaderListItemProps } from './headerTypes'

const HeaderListItem = ({linkTo, title}:HeaderListItemProps) => {
    return (
        <ListItem sx={{width:'fit-content'}}>
            <NavLink to={linkTo} style={{textTransform:'uppercase', fontWeight:600, fontSize:12}}>{title}</NavLink>
        </ListItem>
    )
}

export default HeaderListItem