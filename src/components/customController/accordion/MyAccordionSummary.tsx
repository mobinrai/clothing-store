// import { KeyboardArrowDown } from '@mui/icons-material'
import { AccordionSummary, type SxProps } from '@mui/material'
import type { ReactElement, ReactNode } from 'react'

type MyAccordionSummaryProps={summaryText?:string,sx?:SxProps,icon?:ReactElement,children?:ReactNode}

const MyAccordionSummary = ({summaryText,sx, icon,children}:MyAccordionSummaryProps) => {

    return (
        <AccordionSummary
            expandIcon={icon}
            sx={{...sx, flexDirection: "row-reverse", p: 0}}
        >
            {children || <h6 className="font-bold">{summaryText}</h6>}
        </AccordionSummary>
    )
}

export default MyAccordionSummary