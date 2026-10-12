import { Stack, styled, Tooltip } from '@mui/material'
import CustomRoundedDiv from '../styled/CustomRoundedDiv'
import { PhotoLibraryOutlined, StarOutlineOutlined } from '@mui/icons-material'

const CustomToolTipStyled = styled(Tooltip)(()=>({
    "&:hover .quickView": {
        transform: "translateY(0)",
        opacity: 1,
    },
    "&:hover .wishlistBtn": {
        transform: "translateY(0)",
        opacity: 1,
    },
}))

const CustomToolTip = () => {
    return (
        <Stack sx={{ position: "absolute", top: 10, right: 15 }}>
            <CustomToolTipStyled title="wish list" placement="left-start" arrow>
                    <CustomRoundedDiv className="wishlistBtn">
                        <StarOutlineOutlined sx={{ fontSize: "18px" }}/>
                    </CustomRoundedDiv>
                </CustomToolTipStyled>
            <CustomToolTipStyled title="quick view" placement="left-start" arrow>
                <CustomRoundedDiv className="quickView">
                    <PhotoLibraryOutlined sx={{ fontSize: "18px" }} />
                </CustomRoundedDiv>
            </CustomToolTipStyled>
        </Stack>
    )
}

export default CustomToolTip