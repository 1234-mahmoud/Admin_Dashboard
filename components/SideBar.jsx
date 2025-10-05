"use client";
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

  const { show, toggleShow } = useContext(DashboardContext);

  return (
    <aside
      className={`h-lvh bg-white py-[30px] px-[10px] border-r-[1px] border-gray-400
        max-md:bg-gray-200
        flex flex-col gap-[50px] overflow-hidden 
        transition-all duration-300 ease-in-out 
        md:hover:w-[300px]
        
        ${
          show
            ? `w-[300px] max-md:fixed max-md:z-20 max-md:w-full`
            : `w-[70px] max-md:w-0 max-md:p-0`
        }
        
        `}
    >
      {/* Logo */}
      <div
        className={`max-md:flex max-md:justify-between max-md:items-center
        max-md:px-[20px]
        `}
      >
        <div className="logo flex items-center gap-[20px] px-[3px]">
          <div className="img w-[40px] h-[40px] bg-amber-100 rounded-full overflow-hidden relative shrink-0">
  <Image
    src="/admin.webp"
    alt="admin pic"
    fill
    sizes="40px"
    priority
    className="object-cover"
  />
</div>
          Admin
        </div>
        {/* close button --> small screens  */}
        <button
          className="close hidden max-md:block w-[30px] h-[30px] overflow-hidden relative border rounded-full"
          onClick={toggleShow}
        >
          <Image src="close.svg" alt="close icon" width={30} height={30} />
        </button>
      </div>

      {/* Menu */}
      <ul className="flex flex-col gap-[20px]">
        {items.map((item, index) => (
          <li
            key={index}
            className={`overflow-hidden transition-all duration-500 ease-in-out 
              ${openIndex === index ? "h-[80px] bg-black/10" : "h-[40px]" } 
            rounded-md`}
          >
            <button
              className={`hover:bg-black/10 flex flex-col gap-[15px] w-full py-[9px]
                px-[12px]
                `}
              onClick={() => toggle(index)}
            >
              <span className="flex justify-between items-center ">
                <span className={`flex items-center gap-[15px] 
                  `}>
                  <span className={`w-[22px] h-[22px] overflow-hidden relative
                  
                    `}>
                    <Image
                      src={item.icon}
                      alt={item.text}
                      width={22}
                      height={22}
                    />
                  </span>
                
                  <span className="whitespace-nowrap">{item.text}</span>
                  
                </span>

              
                  <span className={`w-[30px] h-[22px] flex justify-center items-center overflow-hidden relative shrink-0
                    transition-all duration-500 ease-in-out
                    ${
                      openIndex === index ? '-rotate-180':''
                    }
                    `}>
                    <Image
                      src="drop_arrow.svg"
                      alt="arrow"
                      width={30}
                      height={22}
                    />
                  </span>
            
              </span>
             <Link href={item.link}>{item.link}</Link>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
