import { NavLink } from "react-router-dom";
import homeIcon from "../assets/icons/home-icon.svg";
import driversIcon from "../assets/icons/drivers-icon.svg";
import vehiclesIcon from "../assets/icons/vehicles-icon.svg";
import aboutIcon from "../assets/icons/about-icon.svg";
import { useMenuItems } from "../context/MenuContext";
import "../styles/menu.css";

function Menu({ onClick }) {
  const { menuItems, loading, error } = useMenuItems();
  const icons = [homeIcon, driversIcon, vehiclesIcon, aboutIcon];

  return (
    <aside className="menu">
      <nav className="menu-list">
        {loading && <p className="loading">Loading...</p>}
        {menuItems.length === 0 && (
          <p className="no-found">No menu items found</p>
        )}
        {!loading &&
          !error &&
          menuItems.map((item, index) => (
            <li key={index} className="menu-list-item">
              <NavLink to={item.url} onClick={(index) => onClick(index)}>
                <img src={icons[index]} />
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
      </nav>
    </aside>
  );
}

export default Menu;
