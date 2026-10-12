import { Stack, styled, TableCell, TableRow } from '@mui/material';
import StyledButton from '../../../shared/styled/StyledButton';
import { rotateEndIcon } from '../../../../utils/common';
import { green, red } from '@mui/material/colors';
import { Delete, Update } from '@mui/icons-material';
import type { CategoryType } from '../types';
import React from 'react';
import type { NavigateFunction } from 'react-router';

const TableCellSty = styled(TableCell)(({theme})=>({
    [theme.breakpoints.down('md')]:{
        fontSize:16
    }
}))
const CategoryTableBodyData = ({categories, handleDelete, navigate}:{categories:Array<CategoryType>,handleDelete:(id:string)=>void
    navigate:NavigateFunction}) => {

    return (
        <React.Fragment>
            {categories.map((category) => {
            return (
                <TableRow key={category._id}>
                <TableCell sx={{fontSize:{xs:16, xl:14}}}>{category._id}</TableCell>
                <TableCellSty>{category.name}</TableCellSty>
                <TableCell>
                    <img src={category.image?.imageUrl??import.meta.env.VITE_IMAGEKIT_NO_IMAGE_AVAILABLE} width={60} height={60}/>
                </TableCell>
                <TableCell>{
                    category.parent?.length 
                    ?
                    category.parent.map((elem)=>typeof elem==='string'?elem:elem.name).join(', ')
                    :
                    "-"
                }</TableCell>
                <TableCell>{category.createdAt}</TableCell>
                <TableCell>{category.updatedAt}</TableCell>
                <TableCell>
                    <Stack direction={"row"} gap={2}>
                    <StyledButton
                        sx={rotateEndIcon}
                        bgColor={green[800]}
                        endIcon={<Update />}
                        onClick={() =>
                        navigate(`/admin/categories/edit/${category._id}`)
                        }
                    >
                        Update
                    </StyledButton>
                    <StyledButton
                        sx={rotateEndIcon}
                        bgColor={red[800]}
                        endIcon={<Delete/>}
                        onClick={() =>
                        handleDelete(category._id as string)
                        }
                    >
                        Delete
                    </StyledButton>
                    </Stack>
                </TableCell>
                </TableRow>
            );
            })}
        </React.Fragment>
            
    )
}

export default CategoryTableBodyData