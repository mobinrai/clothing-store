import { Pagination,  Table, TableBody, TableCell, TableRow} from "@mui/material";
import type { CategoryTableProps } from "../types";
import CustomTableHeader from "../share/CustomTableHeader";
import StyledButton from "../../../shared/styled/StyledButton";
import { blue} from "@mui/material/colors";
import React from "react";
import AdminSection from "../share/AdminSection";
import CategoryTableBody from "./CategoryTableBodyData";
import Loader from "../../../shared/Loader";
import Criteria from "../share/Criteria";

const DisplayCategories = ({ref,data,pending,criteria,navigate,handleCriteriaChange, handleDelete}: CategoryTableProps) => {
    return (
        <React.Fragment>
            <AdminSection sectionClassName="">
                <AdminSection.Title title="All Categories" sx={{}}>
                    <Criteria ref={ref} handleCriteriaChange={handleCriteriaChange} criteria={criteria}/>
                    <StyledButton
                        sx={{ px: 2 }}
                        hoverBackgroundColor={blue[900]}
                        onClick={() => navigate("/admin/categories/new")}
                    >
                        Add New Category
                    </StyledButton>
               
                </AdminSection.Title>
                <AdminSection.Content>
                    <Table>
                        <CustomTableHeader
                        headerList={["Id","Name","Image","Parent","Created At","Updated At","Action"]}
                        >
                        </CustomTableHeader>
                        {
                                pending ? <Loader/>:

                                    <TableBody>
                                        {
                                            data.categories.length ?
                                            <>
                                            <CategoryTableBody handleDelete={handleDelete} categories={data.categories} navigate={navigate}/>
                                            <TableRow>
                                                <TableCell colSpan={7}>
                                                    <Pagination count={data?.pagination?.totalPages} page={criteria.page} onChange={(_: React.ChangeEvent<unknown>, value: number)=>{
                                                        handleCriteriaChange(value,'page')
                                                    }}/>
                                                    </TableCell>
                                            </TableRow>
                                            </>
                                            :<TableRow>
                                                <TableCell colSpan={7} sx={{textAlign:'center'}}>
                                                    No data available
                                                </TableCell>
                                            </TableRow>
                                        }
                                        
                                    </TableBody>
                               
                            }                        
                    </Table>
                </AdminSection.Content>
            </AdminSection>
        </React.Fragment>
    );
};

export default DisplayCategories;
