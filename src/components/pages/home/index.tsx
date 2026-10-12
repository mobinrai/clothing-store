import NewArriavleSection from "./NewArriavleSection"
import Services from "./Services"
import WeeklyTrending from "./WeeklyTrending"
import CoupleClothes from "./CoupleClothes"
import BestSeller from "../../shared/section/BestSeller"
import React from "react"
import Sliders from "./Sliders"
import { fetchHomeQuery } from "../../../queries/allQueries"
import { Box } from "@mui/material"
import MyImageKit from "../../shared/imageKit"
import { Link } from "react-router"

const Home = () => {
    const {isFetching, data, error} = fetchHomeQuery()
   
    if(isFetching){
        return
    }
    if(error){
        return <span>{error.message}</span>
    }
    if(!data){
        return <h3>could not load data. please </h3>
    }
    const {newArrivals, trending, mens,womens,children, sliders} = data?.[0]
    return (
        <React.Fragment>
            {
                sliders.length>0 && sliders.length<2 ? <Box sx={{display:'grid', gridTemplateAreas:'stack', placeItems:'center'}}>
                     <Box sx={{gridArea:'stack'}}>
                        <MyImageKit imageUrl={sliders[0].mainImages[0].imageUrl} loading='eager' width={1700} height={720}/>
                     </Box>
                    
                    <Box sx={{gridArea:'stack', bgcolor:'rgba(0,0,0,0.5)', height:'auto', padding:5, color:'white'}}>
                        <h6 className={'text-5xl font-medium leading-1 mb-10'}>{sliders[0].name}</h6>
                        <p className="text-xs mb-2 text-gray-500"> {sliders[0].category.name}</p>
                        <Link className='bg-red-600 px-2 py-1 mt-5' to={`/product/${sliders[0].slug}`}>
                            View More
                        </Link>
                    </Box>
                 </Box>:<Sliders sliders={sliders}/>
            }
            {
                newArrivals.length>0 && <NewArriavleSection newArrivals={newArrivals}/>
            }
            {
                mens.length>0 && <BestSeller data={mens} sectionTitle="Our bestseller for mens"/>
            }
            {
                womens.length>0 && <BestSeller data={womens} sectionTitle="Our bestseller for womens"/> 
            }
            {
                children.length>0 && <BestSeller data={children} sectionTitle="Our bestseller for children"/>
            }
            {
                trending.length>0 && <WeeklyTrending trending={trending}/>
            }
            <CoupleClothes/>            
            <Services />
        </React.Fragment>
    )
}

export default Home
