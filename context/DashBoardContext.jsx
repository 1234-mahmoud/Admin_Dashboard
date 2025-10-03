'use client';
import { createContext, useState,useCallback } from "react";

export const DashboardContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    show: false,
    mode: false,
    settings:false,
    user_profile:false,
  });

  // Toggle show
const toggleShow = useCallback(() => {
  setState(prev => ({ ...prev, show: !prev.show }));
}, []);

  // Toggle mode
  const toggleMode = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      mode: !prevState.mode
    }));
  },[])
  //Toggle Settings

const toggleSettings=useCallback(()=>{
    setState(prevState=>({
        ...prevState,
        settings:!prevState.settings
    }))
},[])

const toggleUserProfile =useCallback( ()=>{
  setState((prev)=>({
    ...prev,
    user_profile:!prev.user_profile
  }))
},[])


  const values = {
    show: state.show,
    mode: state.mode,
    settings:state.settings,
    toggleShow,
    toggleMode,
    toggleSettings,
    user_profile:state.user_profile,
    toggleUserProfile
  };

  return (
    <DashboardContext.Provider value={values}>
      {children}
    </DashboardContext.Provider>
  );
};
