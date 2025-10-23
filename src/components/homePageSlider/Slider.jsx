import React from "react";
import './sliderStyles.css';

import mainSlider from '../../assets/homeslider.png';

function Slider() {
  return (

    <div className="main-slider-block">
        <div className="main-slider-container">
           <img src={mainSlider} alt="Main Slider" className="main-slider" /> 
        </div>
        
      
    </div>
  );
} export default Slider;