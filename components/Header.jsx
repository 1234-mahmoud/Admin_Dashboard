"use client";
import Image from "next/image";
import UserComp from "./UserComp";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleShow,
  toggleSettings,
  toggleUserProfile,
} from "@/store/dashboardSlice";

export default function Header() {

  const { settings, user_profile } = useSelector((state) => state.dashboard);

  const dispatch = useDispatch();

  return (
    <div className="relative">
      <div
        className={`w-full h-[50px] bg-white flex justify-between items-center p-[20px]
    border-b-[1px] border-gray-400 max-md:h-[50px]`}
      >
        <div
          className={`flex items-center gap-[10px]
        max-md:justify-between max-md:w-full`}
        >
          {/* show/hide sidebar */}
          <button
            className={`img w-[35px] h-[35px] overflow-hidden relative 
          max-md:w-[25px] max-md:h-[25px] shrink-0`}
            onClick={() => dispatch(toggleShow())}
          >
            <Image src="list.svg" alt="sidebar toggle" width={35} height={35} />
          </button>

          {/* search box */}
          <div
            className={`search w-full flex items-center gap-[10px]
    rounded-md px-2 py-1 ring-gray-600/50 ring-1 indent-1.5
    focus-within:ring-2 focus-within:ring-blue-500 transition duration-150`}
          >
            <Image
              src="search.svg"
              alt="search icon"
              width={20}
              height={20}
              className="object-cover"
            />
            <input
              type="search"
              className={`bg-transparent focus:outline-0 max-sm:w-full`}
              placeholder="Search"
            />
          </div>

          {/* toggle user profile (mobile) */}
          <button
            className={`overflow-hidden relative hidden
        max-md:block w-[25px] h-[25px] rotate-90`}
            onClick={() => dispatch(toggleUserProfile())}
          >
            <Image
              fill
              src="more.svg"
              alt="sidebar toggle"
              sizes="25px"
              className="object-cover"
            />
          </button>
        </div>

        <div className="max-md:hidden">
          <UserComp />
        </div>

        {/* settings box */}
        {settings && (
          <div
            className={`settings z-20 absolute w-[250px] h-[250px] bg-gray-500 right-[20px] top-[75px] rounded-xl
        max-md:top-[120px]`}
          ></div>
        )}
      </div>

      {/* user profile (mobile) */}
      {user_profile && (
        <div
          className={`hidden max-md:block max-md:w-full
        max-md:bg-white max-md:absolute max-md:bottom-[-50px] max-md:px-[20px]`}
        >
          <UserComp />
        </div>
      )}
    </div>
  );
}
