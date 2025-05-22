import Clover from "/src/components/logoClover/clover.jsx";
import Header from "/src/components/header/header.jsx";
import SideBar from "/src/components/sideBar/sideBar.jsx";
import Cards from "/src/components/defaultComponents/cards.jsx";
import HomeContent from "/src/components/HomeContent/homeContent.jsx";
import { useState } from "react";
function Home(){
    const [firstView] = useState(true);
    return(
        <div className="page-wrapper">
            <div className=" fixed top-0 left-0 w-full h-full bg-[#1c1d22] z-[-1]"></div>
            <Clover toCorner={firstView} debugButton={true}/>
            <Header />
            <SideBar/>
            <HomeContent/>
        </div>
    );
}
export default Home