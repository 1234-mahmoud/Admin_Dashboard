"use client";
import { dashboard } from "@/context/DashBoardContext";
import Image from "next/image";
import { useContext } from "react";
export default function Header() {
  const { show, showSide, mode, toggleMode } = useContext(dashboard);

  return (
    <div className={`w-full h-[80px] bg-gray-300
    flex justify-between items-center
    max-md:flex-col
    `}>
      <div className={`flex items-center gap-[10px]`}>
        <button
          className={`img
                w-[35px] h-[35px] 
                overflow-hidden relative
                `}
          onClick={showSide}
        >
          <Image
            fill
            src={`list.svg`}
            alt={`admin pic`}
            className="absolute object-cover"
          />
        </button>

        <div className="search">
          <input type="search" name="" id="" className="bg-amber-700" />
        </div>
      </div>

      <div>
        <button
          className={`mode 
            w-[20px] h-[20px]
                overflow-hidden relative bg-gray-200 rounded-full
            `}
          onClick={toggleMode}
        >
          {mode ? (
            <Image
              fill
              src={`sun.svg`}
              alt={`light mode`}
              className="absolute object-cover"
            />
          ) : (
            <Image
              fill
              src={`moon.svg`}
              alt={`dark mode`}
              className="absolute object-cover"
            />
          )}
        </button>
      
             <button
          className={`notifications 
            w-[20px] h-[20px]
                overflow-hidden relative bg-gray-200 rounded-full
            `}
      
        >
          
            <Image
              fill
              src={`notification.svg`}
              alt={`notification icon`}
              className="absolute object-cover"
            />
          
          
        </button>
      
        <div className="user"></div>
      </div>
    </div>
  );
}
