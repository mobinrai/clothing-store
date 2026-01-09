import { Bolt, Brightness1 } from "@mui/icons-material"
import { Box } from "@mui/material"

const BottomHeader = () => {
    return (
        <Box sx={{ overflow: 'hidden', width: '100%', py: 1 }}>
        <Box sx={{ 
            display: 'flex',
            animation: 'slide 20s linear infinite',
            '@keyframes slide': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' }
            }
        }}>
            {[...Array(12)].map((_, i) => (
            <Box key={i} sx={{ 
                display: 'flex', 
                alignItems: 'center',
                fontSize: 11,
                fontWeight: 600,
                whiteSpace: 'nowrap',
                flexShrink: 0,
                px: 3
            }}>
                <Bolt sx={{ fontSize: 12, mr: 1 }} />
                free shipping on all order above 200
                <Brightness1 sx={{ fontSize: 6, ml: 2 }} />
            </Box>
            ))}
        </Box>
        </Box>
    )
}

export default BottomHeader