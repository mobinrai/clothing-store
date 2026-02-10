import {
  Box,
  Container,
  Drawer,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { Close, Search } from "@mui/icons-material";
import StyledButton from "../styled/StyledButton";
import { useForm } from "react-hook-form";
import { defaultValues, searchSchema, type SearchSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomRoundStack from "../styled/CustomRoundStack";
import React from "react";
import { useToggleSearchAndCart } from "../../../hooks/useToggleSearchAndCart";

const HeaderSearchIcon = () => {
    const {showSearchForm, setShowSearchForm} = useToggleSearchAndCart()
    const {register, handleSubmit, formState:{errors}} = useForm<SearchSchema>({
        mode:'all',
        resolver:zodResolver(searchSchema),
        defaultValues:defaultValues
    })
    const handleClick=(data:SearchSchema)=>{
        console.log(data);
    }
    const onClick=()=>setShowSearchForm(!showSearchForm)
    
    return (
        <React.Fragment>
            <CustomRoundStack onClick={onClick}>
                <Search sx={{ fontSize: 22 }} />
            </CustomRoundStack>
            <Drawer anchor="top" open={showSearchForm}>
                <Box sx={{ py: 3 }}>
                    <Container maxWidth={false}>
                    <Stack alignItems={'center'} gap={2}>
                            <form action="" className="w-6xl flex flex-col items-center">
                            <TextField
                                {...register('search')}
                                placeholder="Enter search text"
                                sx={{width:'70%', boxShadow:'0px 2px 6px 1px rgba(0,0,0,0.3)', borderRadius:10}}
                                slotProps={{
                                    input: {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                        <IconButton edge="end" onClick={handleSubmit(handleClick)}>
                                            <Search />
                                        </IconButton>
                                        </InputAdornment>
                                    ),
                                    sx:{ borderRadius:10, px:2}
                                    },
                                }}
                                error={!!errors.search}
                            />
                            <span className="text-xs text-red-500 my-2">{errors?.search?.message}</span>
                        </form>
                        <StyledButton sx={{width:30,  "& .MuiButton-endIcon": {transform: "rotate(0deg)"}}} endIcon={<Close/>} onClick={onClick}>
                            <h6>Cancle</h6>
                        </StyledButton>
                    </Stack>
                    </Container>
                </Box>
            </Drawer>
        </React.Fragment>
    );
};

export default HeaderSearchIcon;
