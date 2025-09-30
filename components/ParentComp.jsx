'use client'
import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import { useContext } from "react"
import { dashboard } from "@/context/DashBoardContext";
export default function ParentComp() {
    const {show,showSide,mode,toggleMode} = useContext(dashboard)
    return (
    <div className={`${mode?'bg-black/90 text-white':''}`}>
      <div className={`flex`}>
        <SideBar />
        <div className={`w-full`}>
          <Header />
        </div>
      </div>
    </div>
  );
}
