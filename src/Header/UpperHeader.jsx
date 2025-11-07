import React, { useState } from "react";
import logo from '../assets/logo.png';
import './upperHeaderStyle.css';
import menu from '../assets/Menu.svg';
import BurgerMenu from './BurgerMenu/BurgerMenu';

function UpperHeader() {

  const [burgerOpen, setBurgerOpen] = useState(false);

  

  return (
    <>
    <div className="upper-header"> 
        <div className="upper-header-block">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="upper-header-right-block">
                <button className="upper-header-BTNS">კარიერა</button>
                <button className="upper-header-BTNS">ჩვენს შესახებ</button>
                <div className="languaheChanger">EN</div>
                <img
                  src={menu}
                  alt="menu"
                  className="burger-icon"
                  onClick={() => setBurgerOpen(true)}
                  
                  
                />
            </div>

        </div>

    </div>
          <BurgerMenu open={burgerOpen} onClose={() => setBurgerOpen(false)}/>

    </>
  );
}

export default UpperHeader;

