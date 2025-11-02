import React from "react";
import './homeStyles.css';  
import Slider from "../../components/homePageSlider/Slider";
import Analytics from "../../components/Analytics/Analytics";
import LowerBlocks from "../../components/homePage-lowerBlocks/LowerBlocks";
function Home() {
  return (
   <>
   <Slider />
   <Analytics />
    <LowerBlocks />
   </>
  );
} export default Home;