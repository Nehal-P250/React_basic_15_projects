import React, { useState, useContext } from "react";

// Reffer this for understanding useContext
// https://www.youtube.com/watch?v=CI7EYWmRDJE
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
// Now wiht custom hooks it is compulsary to name them starting with
// useContextName else it will give an error.
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
