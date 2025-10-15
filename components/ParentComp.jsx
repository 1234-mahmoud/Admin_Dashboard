'use client'
import React, { useContext } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import { DashboardContext } from "@/context/DashBoardContext"; // make sure this matches
import StatisticsParent from "./StatisticsParent";

export default function ParentComp({ children }) {
  const { mode } = useContext(DashboardContext);

  return (
    <div className={`${mode ? 'bg-black/90 text-white' : ''}
    
    `}>
      <div className="flex bg-gray-200/70 min-h-lvh">
        <SideBar />
        <div className="w-full">
          <Header />

<StatisticsParent/>
{children}
        </div>
      </div>
    </div>
  );
}
