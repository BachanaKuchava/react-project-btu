import React from "react";
import "./burgerMenuStyles.css";

function BurgerMenu({ open = false, onClose = () => {} }) {
  if (!open) return null;

  return (
    <div className="burger-menu-overlay" role="dialog" aria-modal="true">
      <div className="burger-menu-content">
        <button className="burger-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {/* აქ ჩადეთ თქვენი ბურგერის კონტენტი */}
        <nav className="burger-nav">
          <a href="#" onClick={onClose}>
            მთავარი
          </a>
          <a href="#" onClick={onClose}>
            კარიერა
          </a>
          <a href="#" onClick={onClose}>
            ჩვენს შესახებ
          </a>
          <a href="#" onClick={onClose}>
            კონტაქტი
          </a>
        </nav>
      </div>
    </div>
  );
}

export default BurgerMenu;