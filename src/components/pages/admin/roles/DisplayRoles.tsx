import type { DisplayRolesProps } from "../types";
import {
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TextField,
} from "@mui/material";
import StyledButton from "../../../shared/styled/StyledButton";
import { Add} from "@mui/icons-material";
import { Link } from "react-router";
import ActionTableCell from "../share/ActionTableCell";
import CustomTableHeader from "../share/CustomTableHeader";

const DisplayRoles = ({roles, editId, updatedText,handlePatch, handleCancel, handleUpdate, handleTextChange}:DisplayRolesProps) => {
    return (
            <section className="admin-role w-auto items-center flex justify-start md:justify-center px-5 py-5">
                <Paper sx={{p:3}}>
                    <Stack direction={'row'} justifyContent={'space-between'} sx={{borderBottom:'1px solid #1976d2', paddingBottom:'5px'}}>
                        <h6 className="pb-1">All Roles</h6>
                        <Link to={'/admin/roles/new'}>
                            <StyledButton
                                sx={{
                                    "& .MuiButton-endIcon": {
                                    transform: "rotate(0deg)",
                                    },
                                    padding:'2px 15px'
                                }}
                                endIcon={<Add/>}
                                >
                                Add new Role
                                </StyledButton>
                        </Link>
                    </Stack>
                    <Table>
                        <CustomTableHeader headerList={['Id','Name','Is Deleted', 'Created At', 'Updated At', 'Action']}/>
                        {
                            roles.length > 0 && <TableBody>
                                {roles.map((role) => {
                                    const isEditing = editId === role._id ? true : false;
                                    return (
                                    <TableRow key={role._id}>
                                        <TableCell>{role._id}</TableCell>
                                        <TableCell>
                                        {isEditing ? (
                                            <TextField 
                                            value={updatedText?updatedText:role.name}
                                            onChange={(event)=>handleTextChange(event.target.value)}
                                            />
                                        ) : (
                                            role.name
                                        )}
                                        </TableCell>
                                        <TableCell>{role.isDeleted == true ? "true" : "false"}</TableCell>
                                        <TableCell>{role.createdAt}</TableCell>
                                        <TableCell>{role.updatedAt}</TableCell>
                                        <ActionTableCell id={role._id as string} isEditing={isEditing} handlePatch={handlePatch}
                                         handleUpdate={handleUpdate}
                                        handleCancel={handleCancel}
                                        isDeleted={role.isDeleted}/>
                                    </TableRow>
                                    );
                                })}
                            </TableBody>
                        }
                        
                    </Table>
                </Paper>
            </section>
        
    );
};

export default DisplayRoles;
