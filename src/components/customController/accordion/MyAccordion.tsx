import { type ReactElement, type ReactNode } from 'react'
import MyAccordionSummary from './MyAccordionSummary'
import { Accordion, AccordionDetails, type SxProps } from '@mui/material'
import { KeyboardArrowDown } from '@mui/icons-material';

const MyAccordion = ({
    summaryText,
    sx,
    icon = <KeyboardArrowDown/>,
    children,
}: {
    sx?:SxProps;
    summaryText?: string;
    icon?: ReactElement;
    children?:ReactNode;
}) => {
    return (
            <Accordion defaultExpanded sx={{ boxShadow: 0, pl:3, ...sx}}>
            <MyAccordionSummary icon={icon} summaryText={summaryText ?? ''} />
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    )
}

export default MyAccordion