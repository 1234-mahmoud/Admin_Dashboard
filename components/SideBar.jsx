'use client';
import { DashboardContext } from "@/context/DashBoardContext"; // make sure the name matches
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

export default function SideBar() {
  const [openIndex, setOpenIndex] = useState(null); // null means no item open

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // toggle
  };

  const items = [
    { text: "Dashboard", link: "/dashboard", icon: "dashboard.svg" },
    { text: "Calendar", link: "/calendar", icon: "calendar.svg" },
    { text: "User Profile", link: "/profile", icon: "user.svg" },
    { text: "Forms", link: "/forms", icon: "form.svg" },
    { text: "Tables", link: "/tables", icon: "table.svg" },
    { text: "Pages", link: "/pages", icon: "pages.svg" },
  ];

  const { show } = useContext(DashboardContext);

  return (
    <aside
      className={`h-lvh bg-gray-200/40 py-[30px] px-[10px] flex flex-col gap-[50px] overflow-hidden transition-all duration-300 ease-in-out ${show ? 'w-[300px]' : 'w-[60px]'}`}
    >
      {/* Logo */}
      <div className="logo flex items-center gap-[10px]">
        <div className="img w-[40px] h-[40px] bg-amber-100 rounded-full overflow-hidden relative shrink-0">
          <Image fill src="/admin.webp" alt="admin pic" className="absolute object-cover" priority />
        </div>
        {show && "Admin"}
      </div>

      {/* Menu */}
      <ul className="flex flex-col gap-[20px]">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex flex-col items-center overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "h-[80px]" : "h-[40px]"} rounded-md`}
          >
            <button className="bg-violet-200 flex flex-col gap-[15px] w-full p-[10px]" onClick={() => toggle(index)}>
              <span className="flex justify-between items-center">
                <span className="flex items-center gap-[10px]">
                  <span className="w-[22px] h-[22px] overflow-hidden relative">
                    <Image fill src={item.icon} alt={item.text} className="absolute object-contain" />
                  </span>
                  {show && <span className="whitespace-nowrap">{item.text}</span>}
                </span>

                {show && (
                  <span className="w-[30px] h-[22px] overflow-hidden relative shrink-0">
                    <Image fill src="drop_arrow.svg" alt="arrow" className="absolute object-contain" />
                  </span>
                )}
              </span>
              {show && <Link href={item.link}>{item.link}</Link>}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
