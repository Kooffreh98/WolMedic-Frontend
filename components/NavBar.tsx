"use client";

import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import Link from "next/link";

// Type for the timeout reference
type Timeout = ReturnType<typeof setTimeout>;

const NavBar = () => {
  const [search, setSearch] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");
  const timeoutRef = useRef<Timeout | null>(null);

  const userName =
    typeof window !== "undefined" && localStorage.getItem("userName")
      ? localStorage.getItem("userName")
      : "Name Surname";

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setContent(e.target.value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      setSearch(false);
    }

    timeoutRef.current = setTimeout(() => {
      setSearch(true);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (content.length === 0) setSearch(false);
    let timeoutId: Timeout | null = null;

    if (search) {
      timeoutId = setTimeout(() => {
        setSearch(false);
      }, 2000);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [content.length, search]);

  return (
    <nav className="border-b border-gray-300 pb-3 mb-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Toggle Button (for mobile view) */}
        <button className="block md:hidden">
          {/* Add the toggle functionality for mobile view if necessary */}
          <span className="sr-only">Open menu</span>
        </button>

        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 px-4 py-2 w-full md:w-2/3">
          <BsSearch />
          <input
            type="search"
            placeholder="Search"
            className="ml-2 w-full focus:outline-none"
            value={content}
            onChange={handleOnChange}
          />
          {search && (
            <div className="ml-4">
              <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-gray-600 rounded-full"></div>
            </div>
          )}
        </div>

        {/* Notification and User Profile */}
        <div className="flex items-center gap-4">
          {/* Notification Icon */}
          <Link href="#">
            <FaRegBell size={20} className="text-green-700" />
          </Link>

          {/* User Dropdown */}
          <div className="relative group">
            <button className="flex items-center focus:outline-none">
              <Image
                src="/user.svg"
                alt="User DP"
                width={30}
                height={30}
                priority
                className="rounded-full"
              />
              <span className="ml-2 text-gray-800">{userName}</span>
            </button>
            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block">
              <Link
                href="/settings"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Profile
              </Link>
              <Link
                href="/sign-out"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
