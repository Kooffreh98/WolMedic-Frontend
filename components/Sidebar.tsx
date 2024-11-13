"use client";

import React, { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { SidebarContext } from "@/context/SideBarContext";
import Link from "next/link";
import { BiBuildings, BiLogOut, BiMenu } from "react-icons/bi";
import { HiOutlineUsers, HiUser, HiUsers } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiFirstAidKitLine } from "react-icons/ri";
import { GoGear } from "react-icons/go";

interface SubItem {
  name: string;
  href: string;
  icon?: React.ComponentType;
}

interface SidebarItem {
  name: string;
  href: string;
  icon?: React.ComponentType;
  subItems?: SubItem[];
  position?: boolean;
  bottom?: number;
}

const Sidebar = () => {
  const pathname = usePathname();
  const { isCollapsed, toggleSidebarCollapse } = useContext(SidebarContext);
  const [isAccountsOpen, setIsAccountsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarItems: SidebarItem[] = [
    {
      name: "Dashboard",
      href: "/",
      icon: MdOutlineDashboard,
    },
    {
      name: "Accounts",
      href: "/auth",
      icon: HiOutlineUsers,
      subItems: [
        { name: "Accounts", href: "/auth", icon: HiOutlineUsers },
        { name: "All Users", href: "/auth/all-users", icon: HiUsers },
        { name: "User Profile", href: "/auth/profile", icon: HiUser },
      ],
    },
    {
      name: "Equipments",
      href: "/equipments",
      icon: RiFirstAidKitLine,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: GoGear,
    },
    {
      name: "Log out",
      href: "/sign-out",
      icon: BiLogOut,
      position: true,
    },
  ];

  return (
    <div className="flex bg-white flex-col md:flex-row pb-3 md:h-full lg:h-full h-0">
      {/* Fixed Hamburger Icon for Mobile */}
      <div className="p-4 md:hidden">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-teal-600 focus:outline-none"
        >
          <BiMenu size={28} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-[70%] md:w-[20%] bg-white shadow-md z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300`}
      >
        <div className="shadow h-15 bg-white border w-full p-4">
          <Image width={140} height={85} src="/Logo.svg" alt="logo" priority />
        </div>
        <aside className="bg-white text-white w-full h-full">
          <ul className="mt-4 relative flex h-3/4 flex-col p-4 gap-4">
            {sidebarItems.map(({ name, href, icon: Icon, subItems, position }) => (
              <li className={`w-full ${position ? "absolute bottom-0" : ""}`} key={name}>
                <div>
                  <Link
                    className={`flex items-center px-4 py-2 rounded text-black hover:text-teal-600 transition ${
                      pathname === href ? "text-teal-600" : ""
                    }`}
                    href={href}
                    onClick={(e) => {
                      if (subItems) {
                        e.preventDefault();
                        setIsAccountsOpen(!isAccountsOpen);
                      }
                    }}
                  >
                    <span className="mr-2">{Icon ? <Icon /> : null}</span>
                    <span>{name}</span>
                  </Link>
                  {subItems && isAccountsOpen && (
                    <ul className="ml-6 mt-2 space-y-2">
                      {subItems.map(({ name, href, icon: SubIcon }) => (
                        <li key={name}>
                          <Link
                            className={`flex items-center px-4 py-2 rounded text-black hover:text-teal-600 transition ${
                              pathname === href ? "text-teal-600" : ""
                            }`}
                            href={href}
                          >
                            <span className="mr-2">{SubIcon ? <SubIcon /> : null}</span>
                            <span>{name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
