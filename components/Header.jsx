'use client';
import { DashboardContext } from "@/context/DashBoardContext";
import Image from "next/image";
import { useContext } from "react";
import UserComp from "./UserComp";

export default function Header() {
  const {toggleShow,settings,
    user_profile,toggleUserProfile
  } = useContext(DashboardContext);

  return (
 <div className="relative">
     <div className={` w-full h-[50px] bg-gray-300 flex justify-between items-center p-[20px]
    max-md:h-[50px]
    `}>
      <div className={`flex items-center gap-[10px]
        max-md:justify-between max-md:w-full
        `}>
        {/* show/hide sidebar */}
        <button className={`img w-[35px] h-[35px] overflow-hidden relative 
          max-md:w-[25px] max-md:h-[25px] shrink-0
          `} onClick={toggleShow}>
          <Image src="list.svg" alt="sidebar toggle" width={35} height={35} />
        </button>

        {/* search box */}
        
          <input type="search" className={`bg-amber-700
            max-sm:w-full
            `} />
       

<button className={`overflow-hidden relative hidden
        max-md:block  w-[25px] h-[25px] rotate-90
          `} onClick={toggleUserProfile}>
          <Image fill src="more.svg" alt="sidebar toggle" sizes="25px" className="object-cover" />
        </button>



      </div>
<div className="max-md:hidden">
      <UserComp/>
</div>

      {/* settings */}
      {settings && (
        <div className={`settings absolute w-[250px] h-[250px] bg-gray-100 right-[20px] top-[75px] rounded-xl\
        max-md:top-[120px]
        `}>
        </div>
      )}
    </div>
    {/* user profile small screens  */}
    {
      user_profile && <div className={`
     hidden
     max-md:block
     max-md:w-full
        max-md:bg-amber-300
        max-md:absolute max-md:bottom-[-50px] max-md:px-[20px]
      `}>
       <UserComp/>
     </div>
    }

 </div>
  );
}
