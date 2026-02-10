import { styled } from "@mui/material"

const CustomRoundedDiv = styled('p')(({theme})=>({
    display:'flex',
    justifyContent:'center',
    backgroundColor: "#fff",
    borderRadius:'50px',
    padding:theme.spacing(1),
    marginBottom:'10px',
    boxShadow:'5px 8px 12px #747373e0',
    transition: "0.3s",
    transform: "translateY(-65px)",
    cursor:'pointer',
    opacity: 0,
    "&:hover":{
        backgroundColor:theme.palette.common.black,
        color:'#fff',
    }
    
}))

export default CustomRoundedDiv