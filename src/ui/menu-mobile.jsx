import Menu from "../components/menu";
import hamburgerMenuIcon from "../assets/icons/hamburger-menu.svg";
import { useState } from "react";
import "../styles/menu-mobile.css";

function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="menu-mobile">
      <button className="menu-mobile-button" onClick={() => setIsOpen(!isOpen)}>
        <img src={hamburgerMenuIcon} />
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
