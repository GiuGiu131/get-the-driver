import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import "../styles/menu.css";

// import { fetchMenuItems, apiClient } from "../services/apiService";
// import { fetchDataMenu } from "../services/apiService";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Menu() {
  // const fetchData = async () => {
  //   try {
  //     const response = await apiClient.get("/menu");
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  const [menuItems, setMenuItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [users, setUsers] = useState([]);

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
    <div className="menu">
      <ul>
        {/* {menuItems} */}
        {/* {menuItems.map((li, index) => (
          <li key={index}>{li.title}</li>
        ))} */}
        {/* {console.log(users)} */}

        {users.map((user, index) => (
          <li key={index}>
            {user.title}: {user.url}
            {/* {console.log(user)} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
