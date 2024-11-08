"use client";

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "components/Sidebar";
import { SubItem } from "components/subItem";
import DashboardContent from "components/Dashboardcontent";
import Accounts from "components/Accounts";
import AllUsers from "components/AllUsers";
import UserProfile from "components/UserProfile";
import Navbar2 from "components/Navbar2";

export default function Home() {
  const [activeNav, setActiveNav] = useState<string>('dashboard');
  const [accountsSubNav, setAccountsSubNav] = useState<SubItem[]>([]);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    // Reset sub-navigation when switching to the 'dashboard' tab
    if (activeNav !== 'accounts') {
      setAccountsSubNav([]);
    }
  }, [activeNav]);


    return (
    <div className="flex h-screen w-full bg-[#FBFDFC] gap-6">
      {/* Sidebar */}
        <Sidebar
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          setAccountsSubNav={setAccountsSubNav}
        />

      {/* Main Content */}
      {/* <div className="flex flex-col ml-0 lg:ml-[15%] w-full lg:w-[80%] overflow-y-auto p-4 pt-12"> */}
        {/* Dashboard Content */}
        {activeNav === "dashboard" && (
          <div className="flex">
            <Navbar2 />
            <DashboardContent />
          </div>
        )}

        {/* Render specific Accounts sub-navigation components based on activeNav */}
        {activeNav === "accounts" && (
          <div className="flex px-4">
            {accountsSubNav.some(subItem => subItem.name === "Accounts") && <Accounts />}
            {accountsSubNav.some(subItem => subItem.name === "All Users") && <AllUsers />}
            {accountsSubNav.some(subItem => subItem.name === "User Profile") && <UserProfile />}
          </div>
        )}
      </div>
    // </div>
  );
}
