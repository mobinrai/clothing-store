import Loading from '@images/loading.gif'
import { Stack } from '@mui/material'

const Loader = () => {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{height:'100vh'}}>
            <img src={Loading} width={90}/>
        </Stack>
    )
}

export default Loader