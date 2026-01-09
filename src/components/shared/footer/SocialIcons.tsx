import { Stack } from '@mui/material'
import React from 'react'

const SocialIcons = ({padding='10px', children}:{padding:string, children:React.ReactNode}) => {
    return (
        <Stack sx={{background:'var(--color-button)', borderRadius:'50%', padding:padding, color:'black'}}>
            {children}
        </Stack>
    )
}

export default SocialIcons