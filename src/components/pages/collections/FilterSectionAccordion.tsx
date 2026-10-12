import type { ComponentType, ReactElement, ReactNode } from "react";
import type { CommonCustomFormControllerProps, Option } from "../../../types/commonTypes";
import {Divider, Stack } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import CustomCheckboxFormController from "../../customController/CustomCheckBoxFormController";
import type { FieldPath, FieldValues } from "react-hook-form";
import MyAccordion from "../../customController/accordion/MyAccordion";
import React from "react";

const FilterSectionAccordion = <T extends FieldValues>({
    name,
    summaryText,
    options,
    icon = <KeyboardArrowDown />,
    ComponentName= CustomCheckboxFormController<T>,
    children
}: {
    name:FieldPath<T>;
    summaryText: string;
    options?: Option[];
    icon?: ReactElement;
    children?:ReactNode;
    ComponentName?: ComponentType<CommonCustomFormControllerProps<T>>;
}) => {
    return (
        <React.Fragment>
            <Divider />
            <Stack sx={{ my: 2 }}>
                <MyAccordion summaryText={summaryText} icon={icon}>
                    {
                        children || <ComponentName options={options??[]} name={name} sx={{'& .MuiButtonBase-root':{padding:0.5}, '& .MuiFormControlLabel-label':{color:'#535353', fontSize:'0.9rem'}}}/>
                    }
                </MyAccordion>
            </Stack>
        </React.Fragment>
    );
};

export default FilterSectionAccordion;
