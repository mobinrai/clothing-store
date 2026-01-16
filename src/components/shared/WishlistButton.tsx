import CustomRoundedDiv from './styled/CustomRoundedDiv'
import { StarOutlineOutlined } from '@mui/icons-material'

const WishlistButton = () => {
    return (
        <CustomRoundedDiv className="wishlistBtn">
            <StarOutlineOutlined sx={{ fontSize: "18px" }}/>
        </CustomRoundedDiv>
    )
}

export default WishlistButton