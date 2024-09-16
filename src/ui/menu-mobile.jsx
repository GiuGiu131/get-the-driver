import { useState, useEffect, useRef } from "react";
import Menu from "../components/menu";
import hamburgerMenuIcon from "../assets/icons/hamburger-menu.svg";
import closeIcon from "../assets/icons/close-icon.svg";

import "../styles/menu-mobile.css";

function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClicks);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClicks);
    };
  }, [isOpen]);

  const handleOutsideClicks = (event) => {
    if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="menu-mobile" ref={menuRef}>
      <button className="menu-mobile-button" onClick={(e) => handleClick(e)}>
        {isOpen ? (
          <img className="menu-mobile-button-close" src={closeIcon} />
        ) : (
          <img className="menu-mobile-button-hamb" src={hamburgerMenuIcon} />
        )}
      </button>

      {isOpen && (
        <div className="menu-mobile-nav">
          <Menu onClick={(e) => handleClick(e)} />
        </div>
      )}
    </div>
  );
}

export default MenuMobile;
