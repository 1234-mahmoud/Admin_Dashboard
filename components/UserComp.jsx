'use client';
import { useDispatch, useSelector } from "react-redux";
import { toggleMode, toggleSettings } from "@/store/dashboardSlice";
import Image from "next/image";

export default function UserComp() {
  const dispatch = useDispatch();
  const { mode, settings } = useSelector((state) => state.dashboard);
    
  return (

    <div className={`flex items-center gap-[15px]
    max-md:justify-between  max-md:h-[50px]
    `}>
        {/* light / dark mode */}
        <div  className={`flex items-center gap-[15px]`}>

        <button className="mode w-[20px] h-[20px] overflow-hidden relative bg-gray-200 rounded-full" onClick={() => dispatch(toggleMode())}>
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
        </div>
        
        {/* search box mob */}
        {/* <div className={`search hidden max-md:block`}>
          <input type="search" className="bg-amber-700" />
        </div> */}
  

        {/* user profile */}
        <div className="user flex items-center gap-[10px]" onClick={() => dispatch(toggleSettings())}>
          <div className="img w-[40px] h-[40px] bg-white rounded-full overflow-hidden relative shrink-0">
  <Image
    src="/admin.webp"
    alt="admin pic"
    fill
    sizes="40px"
    priority
    className="object-cover"
  />
</div>
          <span className="flex items-center">
            Admin
            <span className={`w-[30px] h-[22px] overflow-hidden relative shrink-0
                   transition-all duration-500 ease-in-out
              ${
                settings?'-rotate-180':''
              }
              `}>
              <Image fill src="drop_arrow.svg" alt="arrow" className="absolute object-contain" />
            </span>
          </span>
        </div>
      </div>
  
  )
}
