import { Container} from '@mui/material'
import SectionTitle from "../../shared/section/SectionTitle";
import type { titleType } from '../../../types/commonTypes';
import DisplayProductAndDetails from './DisplayProductAndDetails';

const BestSeller = ({sectionTitle}:{sectionTitle:titleType}) => {
    return (
        <section className="mb-20">
            <Container maxWidth={false}>
                <SectionTitle sectionTitle={sectionTitle}/>
                <DisplayProductAndDetails/>
            </Container>
        </section>
    )
}

export default BestSeller