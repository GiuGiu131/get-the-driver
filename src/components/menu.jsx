import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchMenuItems } from "../services/apiService";
import homeIcon from "../assets/icons/home-icon.svg";
import driversIcon from "../assets/icons/drivers-icon.svg";
import vehiclesIcon from "../assets/icons/vehicles-icon.svg";
import aboutIcon from "../assets/icons/about-icon.svg";
import hamburgerMenuIcon from "../assets/icons/hamburger-menu.svg";
import axios from "axios";
import "../styles/menu.css";
import { useMenuItems } from "../context/MenuContext";

function Menu() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { menuItems } = useMenuItems();
  const icons = [homeIcon, driversIcon, vehiclesIcon, aboutIcon];
  const iconsMobile = [];

  // useEffect(() => {
  //   fetchMenuItems()
  //     .then((res) => {
  //       setMenuItems(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   fetchDataMenu()
  //     .then((data) => {
  //       setMenuItems(data);
  //       // console.log(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error loading data!</p>;
  return (
    <aside className="menu">
      <nav className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-list-item">
            <NavLink to={item.url}>
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
