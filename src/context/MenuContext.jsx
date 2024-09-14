import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchMenuItems } from "../services/apiService";
const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems()
      .then((res) => {
        setMenuItems(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // const getMenuItems = () => {
  //   fetchMenuItems()
  //     .then((res) => {
  //       setMenuItems(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <MenuContext.Provider value={{ menuItems }}>
      {children}
    </MenuContext.Provider>
  );
};

const useMenuItems = () => {
  return useContext(MenuContext);
};

export { MenuProvider, useMenuItems };
