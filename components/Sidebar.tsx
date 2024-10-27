"use client";

import React, { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { SidebarContext } from "@/context/SideBarContext";
import Link from "next/link";
import {
  AiOutlineDashboard,
  AiOutlineHome,
  AiOutlineIdcard,
  AiOutlineFileImage,
  AiOutlineTeam,
} from "react-icons/ai";
import { PiTestTubeBold } from "react-icons/pi";
import { FiLayers } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { BiBuildings, BiLogOut } from "react-icons/bi";
import { GoGear } from "react-icons/go";
import { RiNewsLine } from "react-icons/ri";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
  MdOutlinePublish,
} from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { LiaUsersSolid } from "react-icons/lia";

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
      icon: AiOutlineHome, // Main icon for Dashboard
    },
    {
      name: "Onboard",
      href: "/clinical-trial-request",
      icon: RiNewsLine, // Main icon for Onboard
      subItems: [
        {
          name: "Clinical Trials",
          href: "/clinical-trial-request",
          icon: PiTestTubeBold,
        },
        {
          name: "Product Registrations",
          href: "/product-registration-request",
          icon: BsBoxSeam,
        },
        {
          name: "Facility Registrations",
          href: "/facility-registration-request",
          icon: BiBuildings,
        },
        { name: "Contact Us", href: "/contact-form", icon: FiLayers },
      ],
    },
    {
      name: "IHA",
      href: "/publications",
      icon: AiOutlineTeam,
      subItems: [
        {
          name: "Create publication",
          href: "/publications/create",
          icon: MdOutlinePublish,
        },
        {
          name: "View publications",
          href: "/publications",
          icon: AiOutlineFileImage,
        },
        { name: "View Users", href: "/users", icon: LiaUsersSolid },
      ],
    },
    ...(localStorage.getItem("userRole") === "SA" ||
    localStorage.getItem("userRole") === "PA"
      ? [
          {
            name: "Admin",
            href: "/user-management",
            icon: BiBuildings,
            subItems: [
              {
                name: "User Profile",
                href: "/user-profile",
                icon: AiOutlineIdcard,
              },
              {
                name: "Create Admin",
                href: "/create-admin",
                icon: GrUserAdmin,
              },
              {
                name: "User Management",
                href: "/user-management",
                icon: AiOutlineDashboard,
              },
            ],
          },
        ]
      : []),
    {
      name: "Settings",
      href: "/settings",
      icon: GoGear,
      position: true,
      bottom: 50,
    },
    {
      name: "Log out",
      href: "/sign-out",
      icon: BiLogOut,
      position: true,
      bottom: 0,
    },
  ];

  // State for dropdown visibility
  const [isRequestsDropdownOpen, setIsRequestsDropdownOpen] = useState(false);
  const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);
  const [isIHADropdownOpen, setIsIHADropdownOpen] = useState(false);

  // Function to toggle dropdowns based on the parent item
  const toggleDropdown = (name: string) => {
    if (name === "Onboard") {
      setIsRequestsDropdownOpen(!isRequestsDropdownOpen);
      setIsAdminDropdownOpen(false);
      setIsIHADropdownOpen(false);
    } else if (name === "Admin") {
      setIsAdminDropdownOpen(!isAdminDropdownOpen);
      setIsRequestsDropdownOpen(false);
      setIsIHADropdownOpen(false);
    } else if (name === "IHA") {
      setIsIHADropdownOpen(!isIHADropdownOpen);
      setIsRequestsDropdownOpen(false);
      setIsAdminDropdownOpen(false);
    }
  };

  // Check if any subitem is active
  const isSubItemActive = (subItems: SubItem[]) => {
    return subItems.some((subItem) => pathname === subItem.href);
  };

  // Check if the parent item is active
  const isParentActive = (item: SidebarItem) => {
    return pathname === item.href || isSubItemActive(item.subItems || []);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Hamburger button for mobile view */}
      <button className="lg:hidden p-2 text-xl" onClick={toggleSidebarCollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside
        className={`bg-gray-800 text-white w-64 transition-transform duration-300 ${
          isCollapsed ? "transform -translate-x-full" : ""
        }`}
      >
        <div className="p-4 flex justify-center">
          {isCollapsed ? (
            <Image
              width={100}
              height={100}
              className="h-12"
              src="/small-iha-logo.svg"
              alt="logo"
              priority
            />
          ) : (
            <Image
              width={190}
              height={80}
              className="h-16"
              src="/iha-logo.svg"
              alt="logo"
              priority
            />
          )}
        </div>
        <ul className="mt-4">
          {sidebarItems.map(({ name, href, icon: Icon, subItems }) => (
            <li className="relative" key={name}>
              {subItems ? (
                <div>
                  <button
                    className={`flex items-center justify-between w-full px-4 py-2 text-left rounded hover:bg-gray-700 transition ${
                      isParentActive({ name, href, icon: Icon, subItems })
                        ? "bg-gray-700"
                        : ""
                    }`}
                    onClick={() => toggleDropdown(name)}
                  >
                    <div className="flex items-center">
                      <span className="mr-2">
                        {Icon ? <Icon /> : null}{" "}
                        {/* Render icon only if defined */}
                      </span>
                      <span>{name}</span>
                    </div>
                    <span>
                      {!isCollapsed && (
                        <>
                          {name === "Onboard" &&
                            (isRequestsDropdownOpen ? (
                              <MdKeyboardArrowUp size={20} />
                            ) : (
                              <MdOutlineKeyboardArrowDown size={20} />
                            ))}
                          {name === "IHA" &&
                            (isIHADropdownOpen ? (
                              <MdKeyboardArrowUp size={20} />
                            ) : (
                              <MdOutlineKeyboardArrowDown size={20} />
                            ))}
                          {name === "Admin" &&
                            (isAdminDropdownOpen ? (
                              <MdKeyboardArrowUp size={20} />
                            ) : (
                              <MdOutlineKeyboardArrowDown size={20} />
                            ))}
                        </>
                      )}
                    </span>
                  </button>
                  {subItems && (
                    <ul className="ml-4">
                      {((name === "Onboard" && isRequestsDropdownOpen) ||
                        (name === "Admin" && isAdminDropdownOpen) ||
                        (name === "IHA" && isIHADropdownOpen)) && (
                        <div>
                          {subItems.map((subItem) => (
                            <li
                              key={subItem.name}
                              className={`flex items-center p-2 rounded hover:bg-gray-600 ${
                                pathname === subItem.href ? "bg-gray-600" : ""
                              }`}
                            >
                              <Link
                                className="flex items-center w-full"
                                href={subItem.href}
                                onClick={() => {
                                  // Close all dropdowns when a subitem is clicked
                                  setIsRequestsDropdownOpen(false);
                                  setIsAdminDropdownOpen(false);
                                  setIsIHADropdownOpen(false);
                                }}
                              >
                                <span className="mr-2">
                                  {subItem.icon ? <subItem.icon /> : null}{" "}
                                  {/* Render subitem icon only if defined */}
                                </span>
                                <span>{subItem.name}</span>
                              </Link>
                            </li>
                          ))}
                        </div>
                      )}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  className={`flex items-center px-4 py-2 rounded hover:bg-gray-700 transition ${
                    pathname === href ? "bg-gray-700" : ""
                  }`}
                  href={href}
                >
                  <span className="mr-2">
                    {Icon ? <Icon /> : null} {/* Render icon only if defined */}
                  </span>
                  <span>{name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
