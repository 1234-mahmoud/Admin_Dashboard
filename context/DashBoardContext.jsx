'use client';
import { createContext, useState } from "react";

export const dashboard = createContext();

export const AppProvider = ({children})=>{
    const [show,setShow] = useState(false);
    const [mode,setMode] = useState(false);
 const showSide = ()=>{
    setShow(!show)
 }

 const toggleMode = ()=>{
    setMode(!mode)
 }




    const values ={
        show,
        showSide,
        mode,
        toggleMode,
    }


    return(
        <dashboard.Provider value={values}>
            {children}
        </dashboard.Provider>
    )
}