import { Accordion, AccordionDetails, AccordionSummary, Box } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type ProductDescriptionProps={
    data:{
        title:string;
        summary:string
    }[]
}

const ProductDescription = ({data}:ProductDescriptionProps) => {    
    return (
        <Box sx={{mt:3 }}>
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
        </Box>
    )
}

export default ProductDescription