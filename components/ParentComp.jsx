'use client'
import React, { useContext } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import { DashboardContext } from "@/context/DashBoardContext"; // make sure this matches

export default function ParentComp() {
  const { mode } = useContext(DashboardContext);

  return (
    <div className={`${mode ? 'bg-black/90 text-white' : ''} min-h-screen`}>
      <div className="flex">
        <SideBar />
        <div className="w-full">
          <Header />
        </div>
      </div>
    </div>
  );
}
