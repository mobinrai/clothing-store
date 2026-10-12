import { Stack } from '@mui/material'
import StyledButton from '../../../shared/styled/StyledButton'
import type { NavigateFunction } from 'react-router'

const SubmitCancelButtons = ({navigate}:{navigate:NavigateFunction}) => {
    return (
        <Stack direction={'row'} gap={2} width={'50%'}>
            <StyledButton sx={{width:'50%'}} bgColor="#1565c0" type="submit">
                Submit
            </StyledButton>
            <StyledButton sx={{width:'50%'}} bgColor="red" onClick={()=>{navigate(-1)}}>
                Cancel
            </StyledButton>
        </Stack>
    )
}

export default SubmitCancelButtons