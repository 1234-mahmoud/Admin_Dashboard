"use client";
import { dashboard } from "@/context/DashBoardContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

export default function SideBar() {
  // We'll store the index of the currently open li. null means none open
  const [openIndex, setOpenIndex] = useState(false);

  const toggle = (index) => {
    // If clicked li is already open, close it; otherwise, open the clicked one
    setOpenIndex(openIndex === index ? false : index); //== toggle
  };

  const items = [
    { text: "Dashborad", link: "E-Commerce", icon: "dashboard.svg" },
    { text: "Calendar", link: "-", icon: "calendar.svg" },
    { text: "User Profile", link: "-", icon: "user.svg" },
    { text: "Forms", link: "-", icon: "form.svg" },
    { text: "Tables", link: "-", icon: "table.svg" },
    { text: "Pages", link: "-", icon: "pages.svg" },
  ];

  const {show} = useContext(dashboard)

  return (
    <aside
      className={`h-lvh bg-gray-200/40
    py-[30px] px-[10px]
    flex flex-col gap-[50px]
    overflow-hidden transition-all duration-300 ease-in-out
    ${show?'w-[300px]':'w-[60px]'}
    `}
    >
      <div className={`logo  flex items-center gap-[10px]`}>
        <div
          className={`img
          w-[40px] h-[40px] bg-amber-100 rounded-full
          overflow-hidden relative  shrink-0
          `}
        >
          <Image
            fill
            src={`/admin.webp`}
            alt={`admin pic`}
            className="absolute object-cover"
            priority={true}
          />
        </div>
        Admin
      </div>
      <ul className=" flex flex-col gap-[20px]">
        {items.map((item, index) => (
          <li
            key={index}
            className={`
     flex flex-col items-center
                         overflow-hidden transition-all duration-500 ease-in-out
                     ${openIndex === index ? "h-[80px]" : "h-[40px]"}
                     rounded-md
                    `}
          >
            <button
              className={`bg-violet-200 flex flex-col gap-[15px]
                           w-full  p-[10px] 
                          `}
              onClick={() => toggle(index)}
            >
              <span className="flex justify-between items-center">
                <span className={`flex items-center gap-[10px]`}>
                  <span
                    className={`w-[22px] h-[22px] overflow-hidden relative
                              `}
                  >
                    <Image
                      fill
                      src={`${item.icon}`}
                      alt={`${item.text}`}
                      className="absolute object-contain"
                    />
                  </span>
                  <span className="whitespace-nowrap">{item.text}</span>
                </span>

                <span
                  className={`w-[30px] h-[22px] overflow-hidden relative
                    shrink-0
                              `}
                >
                  <Image
                    fill
                    src={`drop_arrow.svg`}
                    alt={`arrow`}
                    className="absolute object-contain"
                  />
                </span>
              </span>
              <Link href={``}>{item.link}</Link>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
