import { useState } from "react";
import { FaClock, FaChevronDown } from "react-icons/fa";
import Card from "./Card";
import Layout from "app/(root)/layout"; // Assuming this is the correct path
import Navbar from "@/components/Navbar";

const DashboardContent = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Layout>
        <div className="hidden md:block md:w-1/4 bg-white shadow-lg">
          {/* Sidebar content if needed */}
        </div>
        <Navbar />
      </Layout>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6 pt-20 bg-gray-100">
        {/* Dashboard Header */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Total Users"
            value="4,099"
            trend="↑ 8.5%"
            trendType="up"
            iconSrc="/icons/Icon.svg"
            iconWidth={150}
            iconHeight={150}
          />
          <Card
            title="Total Searches"
            value="89,000"
            trend="↓ 4.3%"
            trendType="down"
            iconSrc="/icons/reshape.svg"
            iconWidth={150}
            iconHeight={150}
          />
          <Card
            title="Total Matches"
            value="2,040"
            trend="↑ 1.8%"
            trendType="up"
            iconSrc="/icons/combineshape.svg"
            iconWidth={150}
            iconHeight={150}
          />
        </div>

        {/* Recent Searches Section */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
          <div className="flex justify-between items-center border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Recent Searches
            </h3>
            <div className="relative flex items-center space-x-4">
              <button
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg flex items-center shadow-sm hover:bg-green-600 hover:text-white"
                onClick={toggleDropdown}
              >
                <FaClock className="mr-2" />
                Today <FaChevronDown className="ml-2" />
              </button>
              <button className="bg-gray-100 text-green-500 px-4 py-2 rounded-lg shadow-sm hover:bg-green-600 hover:text-white">
                View All
              </button>

              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {[
                    "Yesterday's Searches",
                    "Last Week's Searches",
                    "Two Weeks Ago",
                    "Last Month",
                    "Two Months Ago",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="overflow-x-auto mt-4 flex-1">
            <table className="w-full text-sm border border-gray-200 rounded-xl">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left text-gray-600">User</th>
                  <th className="p-4 text-left text-gray-600">
                    Recent Searches
                  </th>
                  <th className="p-4 text-left text-gray-600">Date - Time</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }, (_, i) => (
                  <tr key={i} className="border-t hover:bg-gray-50">
                    <td className="p-4">Daniel Benson</td>
                    <td className="p-4">2 Pack Trauma Shears</td>
                    <td className="p-4">12/06/2024 - 9:36 AM</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
