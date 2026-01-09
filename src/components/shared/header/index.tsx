import TopHeader from "./TopHeader"
import MiddleHeader from "./MiddleHeader"
import BottomHeader from "./BottomHeader"

const index = () => {
    return (
        <header style={{minHeight:'200px'}}>
            <TopHeader/>
            <MiddleHeader/>
            <BottomHeader/>
        </header>
    )
}

export default index