import { Box } from '@mui/material'
import { type ReactNode } from 'react'

type BgBoxProps={
    image:string,
    height?:number|string,
    children?:ReactNode
}

const BgBox = ({image, height, children}:BgBoxProps) => {
    return (
        <Box sx={{
            position:'relative',
            width:'100%',
            height:height?height:'620px',
        }}>
            <Box sx={{
                position:'absolute',
                inset:0,
                backgroundImage:`url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0,               
                borderRadius:'0 0 20px 20px'
            }}>
                <Box sx={{ position: 'relative' }}>{children}</Box>
            </Box>
        </Box>
    )
}

export default BgBox