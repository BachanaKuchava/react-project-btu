import React from "react";
import logo from '../assets/logo.png';
import './upperHeaderStyle.css';

function UpperHeader() {
  return (
    <>
    <div className="upper-header"> 
        <div className="upper-header-block">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="upper-header-right-block">
                <button className="upper-header-BTNS">კარიერა</button>
                <button className="upper-header-BTNS">ჩვენს შესახებ</button>
                <div className="languaheChanger">EN</div>
            </div>

        </div>

    </div>
        
    
    </>
  );
}

export default UpperHeader;

