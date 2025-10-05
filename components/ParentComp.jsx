'use client'
import React, { useContext } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import { DashboardContext } from "@/context/DashBoardContext"; // make sure this matches
import { BarChart } from '@mui/x-charts/BarChart';

export default function ParentComp() {
  const { mode } = useContext(DashboardContext);

  return (
    <div className={`${mode ? 'bg-black/90 text-white' : ''} min-h-screen`}>
      <div className="flex bg-gray-200/70">
        <SideBar />
        <div className="w-full">
          <Header />
          <BarChart
  xAxis={[
    {
      id: 'barCategories',
      data: ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug' , 'Sep' , 'Oct' , 'Nov' ,'Dec'],
    },
  ]}
  series={[
    {
      data: [10,20,30,40,50,60,70,80,90,100],
    },
  ]}
  height={300}
  width={500}
/>
        </div>
      </div>
    </div>
  );
}
