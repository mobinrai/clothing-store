import NewArriavleSection from "./NewArriavleSection";
import Services from "./Services";
import WeeklyTrending from "./WeeklyTrending";
import CoupleClothes from "./CoupleClothes";
import BestSeller from "../../shared/section/BestSeller";

const Home = () => {
    return (
        <>
            <NewArriavleSection />
            <WeeklyTrending />
            <BestSeller sectionTitle="Our bestseller for mens"/> 
            <BestSeller sectionTitle="Our bestseller for womens"/> 
            <BestSeller sectionTitle="Our bestseller for children"/> 
            <CoupleClothes/>
            <Services />
        </>
    );
};

export default Home;
