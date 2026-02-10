// import { KeyboardArrowDown } from '@mui/icons-material'
import { AccordionSummary, type SxProps } from '@mui/material'
import type { ReactElement } from 'react'

const MyAccordionSummary = ({summaryText,sx, icon}:{summaryText:string,sx?:SxProps, icon:ReactElement}) => {
    // const defaultIcon = <KeyboardArrowDown />
    return (
        <AccordionSummary
            expandIcon={icon}
            sx={{...sx, flexDirection: "row-reverse", px: 0 }}
        >
            <h6 className="ml-2 font-bold">{summaryText}</h6>
        </AccordionSummary>
    )
}

export default MyAccordionSummary