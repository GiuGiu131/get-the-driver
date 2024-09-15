import { useState } from "react";
import Menu from "../components/menu";
import hamburgerMenuIcon from "../assets/icons/hamburger-menu.svg";
import closeIcon from "../assets/icons/close-icon.svg";

import "../styles/menu-mobile.css";

function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-mobile">
      <button className="menu-mobile-button" onClick={(e) => handleClick(e)}>
        {isOpen ? (
          <img className="menu-mobile-button-close" src={closeIcon} />
        ) : (
          <img className="menu-mobile-button-hamb" src={hamburgerMenuIcon} />
        )}
      </button>

      {isOpen && (
        <div className="menu-mobile-nav">
          <Menu />
        </div>
      )}
    </div>
  );
}

export default MenuMobile;
