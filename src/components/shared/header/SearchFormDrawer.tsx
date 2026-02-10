import {
  Box,
  Container,
  Drawer,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import type { ShowShoppingOrSearchContent } from "../../../types/commonTypes";
import { Close, Search } from "@mui/icons-material";
import StyledButton from "../styled/StyledButton";
import { useForm } from "react-hook-form";
import { defaultValues, searchSchema, type SearchSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

const SearchFormDrawer = ({showSearchForm,toggleContent}: 
    {showSearchForm: boolean; toggleContent: (name: ShowShoppingOrSearchContent) => void;}) => 
    {
    const {register, handleSubmit, formState:{errors}} = useForm<SearchSchema>({
        mode:'all',
        resolver:zodResolver(searchSchema),
        defaultValues:defaultValues
    })
    const handleClick=(data:SearchSchema)=>{
        console.log(data);
    }
    return (
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
                <StyledButton sx={{width:30,  "& .MuiButton-endIcon": {transform: "rotate(0deg)"}}} endIcon={<Close/>} onClick={()=>toggleContent("searchForm")}>
                    <h6>Cancle</h6>
                </StyledButton>
            </Stack>
            </Container>
        </Box>
        </Drawer>
    );
};

export default SearchFormDrawer;
