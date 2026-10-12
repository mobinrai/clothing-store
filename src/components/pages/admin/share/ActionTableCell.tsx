import { Cancel, Delete, EditNote, Restore, Update } from "@mui/icons-material";
import { Stack, TableCell } from "@mui/material";
import React from "react";
import StyledButton from "../../../shared/styled/StyledButton";
import type { ActionTableCellProps } from "../types";
import { blue, cyan, green, indigo, red } from "@mui/material/colors";

const ActionTableCell = ({id, isEditing, isDeleted,handleUpdate, handleCancel, handlePatch}:ActionTableCellProps) => {
    return (
        <TableCell>
            <Stack direction={"row"} gap={2}>
                {isEditing ? (
                <React.Fragment>
                    <StyledButton
                    sx={{
                        "& .MuiButton-endIcon": {
                        transform: "rotate(0deg)",
                        },
                    }}
                    bgColor={indigo[700]}
                    hoverBackgroundColor={indigo[400]}
                    endIcon={<EditNote />}
                    onClick={() =>handlePatch(id, 'edit')}
                    >
                    Edit
                    </StyledButton>
                    <StyledButton
                    sx={{
                        "& .MuiButton-endIcon": {
                        transform: "rotate(0deg)",
                        },
                    }}
                    bgColor={cyan[700]}
                    hoverBackgroundColor={cyan[400]}
                    endIcon={<Cancel />}
                    onClick={handleCancel}
                    >
                    Cancel
                    </StyledButton>
                </React.Fragment>
                ) : (
                <React.Fragment>
                    <StyledButton
                    sx={{
                        "& .MuiButton-endIcon": {
                        transform: "rotate(0deg)",
                        },
                    }}
                    bgColor={green[800]}
                    endIcon={<Update />}
                    onClick={()=>handleUpdate(id)}
                    >
                    Update
                    </StyledButton>
                    {
                        isDeleted==true?
                        <StyledButton
                            sx={{
                                "& .MuiButton-endIcon": {
                                transform: "rotate(0deg)",
                                },
                            }}
                            bgColor={blue[700]}
                            hoverBackgroundColor="#fff"
                            hoverTextColor="#000"
                            endIcon={<Restore />}
                            onClick={() =>handlePatch(id, "restore")}
                            >
                            Restore
                        </StyledButton>
                        :
                        <StyledButton
                        sx={{
                            "& .MuiButton-endIcon": {
                            transform: "rotate(0deg)",
                            },
                        }}
                        bgColor={red[800]}
                        hoverBackgroundColor={red[500]}
                        endIcon={<Delete />}
                        onClick={() =>handlePatch(id, "delete")}
                        >
                        Delete
                        </StyledButton>
                    }
                </React.Fragment>
                )}
            </Stack>
        </TableCell>
    )
}

export default ActionTableCell