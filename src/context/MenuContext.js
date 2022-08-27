import { useState } from "react";
import { createContext } from "react";

export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("notes");
  
  return (
    <MenuContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
