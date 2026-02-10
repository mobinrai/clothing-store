import { Stack } from "@mui/material";
import {styled} from "@mui/material/styles";

const CustomRoundStack=styled(Stack)(({theme}) => ({
    position: "relative",
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:theme.palette.common.white,
    padding: 0,
    boxShadow:'2px 3px 8px 2px rgb(200,200,200)',
    borderRadius: 40,
    height: 54,
    minWidth: 54,
    cursor: "pointer",
    transition: "background .17s linear",
    "&:hover": { background: theme.palette.common.black, color: theme.palette.common.white}
}))
    
export default CustomRoundStack