import React, { useState } from "react";
import { FaSearch, FaClipboardCheck, FaUser, FaClock, FaBars, FaTimes } from "react-icons/fa";

const DashboardContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[auto,1fr] min-h-screen bg-gray-100 relative">

      {/* Hamburger Icon - only visible on smaller screens */}
      <button
        className="absolute top-4 left-4 lg:hidden text-gray-600 z-20"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-10 w-64 p-4 bg-gray-50 shadow-md transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:block transition-transform duration-200 ease-in-out`}
      >
        <nav className="space-y-4">
          <a href="#" className="block text-gray-600 hover:text-gray-800">Dashboard</a>
          <a href="#" className="block text-gray-600 hover:text-gray-800">Users</a>
          <a href="#" className="block text-gray-600 hover:text-gray-800">Settings</a>
          {/* Add more sidebar links as needed */}
        </nav>
      </aside>
      
      {/* Overlay (only on smaller screens when sidebar is open) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="p-4 md:p-6 bg-white flex-1 pl-10 text-sm">
        <div className="font-[Open_Sans] text-xl md:text-2xl font-semibold leading-[31.2px] text-left">
          <h3 className="text-sm">Dashboard</h3>
        </div>

        {/* Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 pt-5">
          <div className="p-4 bg-white shadow rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-gray-700 font-semibold">Total Users</h3>
              <p className="text-2xl md:text-3xl font-bold">4,099</p>
              <p className="text-green-500 text-sm md:text-base">↑ 8.5% <span className="text-black">Up from yesterday</span></p>
            </div>
            <FaUser className="text-gray-400 text-2xl md:text-3xl" />
          </div>
          <div className="p-4 bg-white shadow rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-gray-700 font-semibold">Total Searches</h3>
              <p className="text-2xl md:text-3xl font-bold">89,000</p>
              <p className="text-red-500 text-sm md:text-base">↓ 4.3% <span className="text-black"> Down from yesterday</span></p>
            </div>
            <FaSearch className="text-gray-400 text-2xl md:text-3xl" />
          </div>
          <div className="p-4 bg-white shadow rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-gray-700 font-semibold">Total Matches</h3>
              <p className="text-2xl md:text-3xl font-bold">2040</p>
              <p className="text-green-500 text-sm md:text-base">↑ 1.8% <span className="text-black">Up from yesterday</span></p>
            </div>
            <FaClipboardCheck className="text-gray-400 text-2xl md:text-3xl" />
          </div>
        </section>

        {/* Recent Searches Section */}
        <section className="bg-white p-4 md:p-6 shadow rounded-lg mb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Recent Searches</h3>
            <div className="flex flex-wrap items-center space-x-2 sm:space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center w-full sm:w-auto justify-center">
                <FaClock className="mr-2" /> Today
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg w-full sm:w-auto">
                View All
              </button>
            </div>
          </div>
        </section>

        {/* Table Section */}
        <section className="bg-white p-4 md:p-6 shadow rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="p-2 md:p-4 border-b-2 text-sm md:text-base">User</th>
                  <th className="p-2 md:p-4 border-b-2 text-sm md:text-base">Search Word</th>
                  <th className="p-2 md:p-4 border-b-2 text-sm md:text-base">Date - Time</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className="text-gray-700">
                    <td className="p-2 md:p-4 border-b text-sm md:text-base">Daniel Benson</td>
                    <td className="p-2 md:p-4 border-b text-sm md:text-base">2 Pack Trauma Shears</td>
                    <td className="p-2 md:p-4 border-b text-sm md:text-base">12/06/2024 - 9:36AM</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardContent;
