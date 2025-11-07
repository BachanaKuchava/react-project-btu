import React from "react";
import './burgerMenuStyle.css';

function BurgerMenu({open = false, onClose = () => {}}) {
    if (!open) return null;
    return(<>
    <div className="burger-menu-overlay" role="dialog" aria-modal="true">
        <div className="burger-name-content">
            <button className="burger-close" onClick={onClose} aria-label="Close"> X </button>
            <nav className="burger-nav"> 
                <a href="$"> categorya</a>
                <a href="$"> categorya</a>
                <a href="$"> categorya</a>
                <a href="$"> categorya</a>
                <a href="$"> categorya</a>
            </nav>

        </div>

    </div>


    </>)
} export default BurgerMenu;

