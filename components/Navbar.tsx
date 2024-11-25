import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md p-2 z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Left section - Logo or other content */}
        <div className="flex items-center">
          {/* Add content for the left side if needed */}
        </div>

        {/* Right section - Profile */}
        <div className="flex items-center ml-auto">
          {/* Pill-shaped profile section */}
          <div className="relative flex items-center bg-gray-100 p-1 pl-1 pr-2 rounded-full shadow-md">
            {/* Profile Image */}
            <Image
              width={20} // Reduced size (half the original)
              height={20} // Reduced size (half the original)
              src="/work.svg"
              alt="Profile"
              className="w-5 h-5 rounded-full" // Adjusted image size
            />
            {/* Name and Designation */}
            <div className="ml-1">
              {" "}
              {/* Reduced margin */}
              <p className="text-xs font-semibold text-gray-800">
                Ella Barris
              </p>{" "}
              {/* Smaller text */}
              <p className="text-xxs text-gray-500">Admin</p>{" "}
              {/* Smaller text */}
            </div>
            {/* Dropdown Icon */}
            <button
              className="ml-1 text-gray-600 hover:text-gray-800 transform scale-75" // Reduced size by 70%
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              ▼
            </button>
            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-md shadow-lg w-40">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a href="/account">Account</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a href="/settings">Settings</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
