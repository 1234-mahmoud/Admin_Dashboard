'use client';
import { createContext, useState } from "react";

export const DashboardContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    show: false,
    mode: false,
    settings:false
  });

  // Toggle show
  const toggleShow = () => {
    setState(prevState => ({
      ...prevState,
      show: !prevState.show
    }));
  };

  // Toggle mode
  const toggleMode = () => {
    setState(prevState => ({
      ...prevState,
      mode: !prevState.mode
    }));
  };
  //Toggle Settings

const toggleSettings=()=>{
    setState(prevState=>({
        ...prevState,
        settings:!prevState.settings
    }))
}

  const values = {
    show: state.show,
    mode: state.mode,
    settings:state.settings,
    toggleShow,
    toggleMode,
    toggleSettings
  };

  return (
    <DashboardContext.Provider value={values}>
      {children}
    </DashboardContext.Provider>
  );
};
