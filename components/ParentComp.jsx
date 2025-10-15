"use client";
import React from "react";
import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import Header from "./Header";
import StatisticsParent from "./StatisticsParent";

export default function ParentComp({ children }) {

  const mode = useSelector((state) => state.dashboard.mode);

  return (
    <div className={`${mode ? "bg-black/90 text-white" : ""}`}>
      <div className="flex bg-gray-200/70 min-h-lvh">
        <SideBar />
        <div className="w-full">
          <Header />
          <StatisticsParent />
          {children}
        </div>
      </div>
    </div>
  );
}
