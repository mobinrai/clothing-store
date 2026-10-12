import {Container} from '@mui/material'
import SectionTitle from "../../shared/section/SectionTitle";
import type { titleType } from '../../../types/commonTypes';
import type { ProductItem } from '../../pages/admin/types';
import DisplayProductAndDetails from './DisplayProductAndDetails';
import { ArrowForward } from '@mui/icons-material';
import StyledButton from '../styled/StyledButton';

const BestSeller = ({sectionTitle,data}:{sectionTitle:titleType, data:ProductItem[]}) => {
    return (
        <section className="my-20">
            <Container maxWidth={false}>
                <SectionTitle sectionTitle={sectionTitle}/>
                <DisplayProductAndDetails products={data}/>
                <StyledButton endIcon={<ArrowForward/>} bgColor="#f5f5f5" textColor="#000" sx={{px:'20px',py:'10px', mt:6,fontSize:'12px', fontWeight:'bold',height:'52px', left:"44%"}}>Shop all products</StyledButton>
            </Container>
        </section>
    )
}

export default BestSeller