'use client';
import { DashboardContext } from "@/context/DashBoardContext";
import Image from "next/image";
import { useContext } from "react";

export default function Header() {
  const { show, toggleShow, mode, toggleMode,settings,toggleSettings } = useContext(DashboardContext);

  return (
    <div className="relative w-full h-[70px] bg-gray-300 flex justify-between items-center p-[20px] max-md:flex-col">
      <div className="flex items-center gap-[10px]">
        {/* show/hide sidebar */}
        <button className="img w-[35px] h-[35px] overflow-hidden relative" onClick={toggleShow}>
          <Image fill src="list.svg" alt="sidebar toggle" className="absolute object-cover" />
        </button>

        {/* search box */}
        <div className="search">
          <input type="search" className="bg-amber-700" />
        </div>
      </div>

      <div className="flex items-center gap-[15px]">
        {/* light / dark mode */}
        <button className="mode w-[20px] h-[20px] overflow-hidden relative bg-gray-200 rounded-full" onClick={toggleMode}>
          {mode ? (
            <Image fill src="sun.svg" alt="light mode" className="absolute object-cover" />
          ) : (
            <Image fill src="moon.svg" alt="dark mode" className="absolute object-cover" />
          )}
        </button>

        {/* notification */}
        <button className="notifications w-[20px] h-[20px] overflow-hidden relative bg-gray-200 rounded-full">
          <Image fill src="notification.svg" alt="notification icon" className="absolute object-cover" />
        </button>

        {/* user profile */}
        <div className="user flex items-center gap-[10px]" onClick={toggleSettings}>
          <div className="img w-[40px] h-[40px] bg-amber-100 rounded-full overflow-hidden relative shrink-0">
            <Image fill src="/admin.webp" alt="admin pic" className="absolute object-cover" priority />
          </div>
          <span className="flex items-center">
            Admin
            <span className="w-[30px] h-[22px] overflow-hidden relative shrink-0">
              <Image fill src="drop_arrow.svg" alt="arrow" className="absolute object-contain" />
            </span>
          </span>
        </div>
      </div>

      {/* settings */}
      {settings && (
        <div className="settings absolute w-[250px] h-[250px] bg-gray-100 right-[20px] top-[75px] rounded-xl">
        </div>
      )}
    </div>
  );
}
