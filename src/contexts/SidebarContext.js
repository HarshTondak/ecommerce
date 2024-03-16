import React, { useState, createContext } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // To close the sidebar
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
