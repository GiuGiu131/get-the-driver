import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import homeIcon from "../assets/icons/home-icon.svg";
import driversIcon from "../assets/icons/drivers-icon.svg";
import vehiclesIcon from "../assets/icons/vehicles-icon.svg";
import aboutIcon from "../assets/icons/about-icon.svg";
import axios from "axios";
import "../styles/menu.css";

function Menu() {
  const [menuItems, setMenuItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [users, setUsers] = useState([]);

  const icons = [homeIcon, driversIcon, vehiclesIcon, aboutIcon];

  useEffect(() => {
    axios
      .get("/data/menu.json")
      .then((res) => {
        setUsers(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
      <ul className="menu-list">
        {users.map((user, index) => (
          <li key={index} className="menu-list-item">
            <NavLink to={user.url}>
              <img src={icons[index]} />
              <span>{user.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Menu;
