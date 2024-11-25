import { useState } from "react";
import { FaClock, FaChevronDown } from "react-icons/fa";
import Card from "./Card";
import BaseLayout from "./BaseLayout"; // or "@/components/BaseLayout"

const DashboardContent = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <BaseLayout>
      <div className="min-h-screen bg-white flex flex-col pt-20">
        {" "}
        {/* Ensures space below navbar and full height */}
        <div className="flex-1 bg-white shadow-xl rounded-xl p-8">
          {" "}
          {/* flex-1 ensures this takes up the remaining space */}
          <header className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800">Dashboard</h3>
          </header>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </section>
          <section className="mt-10 bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Recent Searches</h3>
              <div className="relative flex items-center space-x-4">
                <button
                  className="bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center shadow-sm"
                  onClick={toggleDropdown}
                >
                  <FaClock className="mr-2" />
                  Today <FaChevronDown className="ml-2" />
                </button>
                <button className="bg-white border-[#E5F1F1] text-green-500 px-4 py-2 rounded-lg shadow-sm">
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

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left">User</th>
                    <th className="p-4 text-left">Recent Searches</th>
                    <th className="p-4 text-left">Date - Time</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 5 }, (_, i) => (
                    <tr key={i} className="border-t border-gray-200">
                      <td className="p-4">Daniel Benson</td>
                      <td className="p-4">2 Pack Trauma Shears</td>
                      <td className="p-4">12/06/2024 - 9:36 AM</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </BaseLayout>
  );
};

export default DashboardContent;
