import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useMenuItems } from "../context/MenuContext";
import homeIcon from "../assets/icons/home-icon.svg";
import driversIcon from "../assets/icons/drivers-icon.svg";
import vehiclesIcon from "../assets/icons/vehicles-icon.svg";
import aboutIcon from "../assets/icons/about-icon.svg";

import axios from "axios";
import "../styles/menu.css";

function Menu() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { menuItems } = useMenuItems();

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (menuItems) setItems(menuItems);
  }, []);

  console.log(menuItems);

  const icons = [homeIcon, driversIcon, vehiclesIcon, aboutIcon];

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
    <div className="menu">
      <ul className="menu-list">
        {items.map((item, index) => (
          <li key={index} className="menu-list-item">
            <NavLink to={item.url}>
              <img src={icons[index]} />
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
