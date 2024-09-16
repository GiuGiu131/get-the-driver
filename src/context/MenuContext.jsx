import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchMenuItems } from "../services/apiService";
const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenuItems()
      .then((res) => {
        setMenuItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, []);

  return (
    <MenuContext.Provider value={{ menuItems, loading, error }}>
      {children}
    </MenuContext.Provider>
  );
};

const useMenuItems = () => {
  return useContext(MenuContext);
};

export { MenuProvider, useMenuItems };
