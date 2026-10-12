import Loading from '@images/loading.gif'
import { Box } from '@mui/material'

const Loader = () => {
    return (
        <Box sx={{position:'fixed', top:0, bottom:0,left:0, right:0, display:'flex', alignItems:'center', justifyContent:'center', zIndex:9999, bgcolor:'rgb(255, 255, 255)'}}>
            <img src={Loading} width={90}/>
        </Box>
    )
}

export default Loader