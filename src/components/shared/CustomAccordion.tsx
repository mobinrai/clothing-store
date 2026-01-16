import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type CustomAccordionProps={
    data:{    title:string;
        summary:string
}[]
}

const CustomAccordion = ({data}:CustomAccordionProps) => {
    return (
        <>
            {
                data.map((item, index)=>{
                    return <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    {item.title}
                    </AccordionSummary>
                    <AccordionDetails>
                    {item.summary}
                    </AccordionDetails>
                </Accordion>
                })
            }
        </>
    )
}

export default CustomAccordion