"use client";

import React, { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { SidebarContext } from "@/context/SideBarContext";
import Link from "next/link";
import { BiBuildings, BiLogOut } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiFirstAidKitLine } from "react-icons/ri";
import { GoGear } from "react-icons/go";

// Define types for sidebar items and subitems
interface SubItem {
  name: string;
  href: string;
  icon?: React.ComponentType; // Icon is optional
  position?: boolean;
  bottom?: number;
}

interface SidebarItem {
  name: string;
  href: string;
  icon?: React.ComponentType; // Icon is optional
  subItems?: SubItem[]; // Optional subItems property
  position?: boolean;
  bottom?: number;
}

const Sidebar = () => {
  const pathname = usePathname(); // Get the current pathname
  const { isCollapsed, toggleSidebarCollapse } = useContext(SidebarContext); // Sidebar context for state management

  // Sidebar items definition with proper types
  const sidebarItems: SidebarItem[] = [
    {
      name: "Dashboard",
      href: "/",
      icon: MdOutlineDashboard, // Main icon for Dashboard
    },
    {
      name: "Accounts",
      href: "/auth",
      icon: HiOutlineUsers // Main icon for Onboard
    },
    {
      name: "Equipments",
      href: "/equipments",
      icon: RiFirstAidKitLine
    },
    {
      name: "Settings",
      href: "/settings",
      icon: GoGear
    },
    {
      name: "Log out",
      href: "/sign-out",
      icon: BiLogOut,
      position: true
    },
  ];

  // Check if the parent item is active
  const isParentActive = (item: SidebarItem) => {
    return pathname === item.href;
  };

  return (
    <div className="flex flex-col h-full w-[25%] shadow-md">
      <aside
        className={`bg-white text-white w-64 transition-transform duration-300 h-full`}
      >
            <Image
              width={140}
              height={85}
              src="/Logo.svg" 
              alt="logo"
              priority
            />
        <ul className="mt-4 relative flex h-3/4 flex-col p-4 gap-4">
          {sidebarItems.map(({ name, href, icon: Icon, position }) => (
            <li className={`w-full ${
              position? "absolute bottom-0":''
            }`} key={name}>
              <Link
                  className={`flex items-center px-4 py-2 rounded text-black hover:text-teal-600 transition ${
                    pathname === href ? "text-teal-600" : ""
                  }`}
                  href={href}
                >
                  <span className="mr-2">
                    {Icon ? <Icon /> : null} {/* Render icon only if defined */}
                  </span>
                  <span>{name}</span>
                </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
