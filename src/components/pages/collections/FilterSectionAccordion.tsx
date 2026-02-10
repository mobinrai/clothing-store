import type { ComponentType, ReactElement, ReactNode } from "react";
import type { CommonCustomFormControllerProps, Option } from "../../../types/commonTypes";
import { Accordion, AccordionDetails, Divider, Stack } from "@mui/material";
import MyAccordionSummary from "../../customController/accordion/MyAccordionSummary";
import { KeyboardArrowDown } from "@mui/icons-material";
import CustomCheckboxFormController from "../../customController/CustomCheckBoxFormController";
import type { FieldPath, FieldValues } from "react-hook-form";

const FilterSectionAccordion = <T extends FieldValues>({
    name,
    summaryText,
    options,
    icon = <KeyboardArrowDown />,
    children,
    ComponentName= CustomCheckboxFormController<T>,
}: {
    name:FieldPath<T>;
    summaryText: string;
    options?: Option[];
    icon?: ReactElement;
    children?:ReactNode;
    ComponentName?: ComponentType<CommonCustomFormControllerProps<T>>;
}) => {
    return (
        <>
            <Divider />
            <Stack sx={{ my: 2 }}>
                <Accordion defaultExpanded sx={{ boxShadow: 0 }}>
                <MyAccordionSummary icon={icon} summaryText={summaryText} />
                <AccordionDetails sx={{ px: 0, mt: -2, ml:1 }}>
                    {children || <ComponentName options={options??[]} name={name} sx={{'& .MuiButtonBase-root':{padding:0.5}, '& .MuiFormControlLabel-label':{color:'#535353', fontSize:'0.9rem'}}}/>}
                </AccordionDetails>
                </Accordion>
            </Stack>
        </>
    );
};

export default FilterSectionAccordion;
