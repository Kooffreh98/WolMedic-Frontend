"use client";

import { FC } from "react";
import Layout from "app/(root)/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTrash,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Accounts: FC = () => {
  return (
    <div className="flex bg-white flex-col lg:flex-row">
      {/* Sidebar Placeholder - hidden on small screens */}
      <Layout>
        <div className="hidden w-full md:ml-64 w-1/4 bg-white p-4">
          {/* Sidebar content here */}
        </div>
      </Layout>

      {/* Main Content */}
      <div className="w-full lg:ml-[22%] lg:w-3/4 p-2 pt-20 md:pt-20 lg:pt-20 space-y-4">
        <div className="bg-white p-3 rounded-md shadow-md">
          <h2 className="text-lg font-semibold text-black lg:text-xl lg:font-bold">
            Accounts
          </h2>
          <div className="flex justify-between items-center pt-3">
            <h3 className="text-sm font-semibold text-gray-700">All Users</h3>
            <button className="text-black bg-green-400 px-3 py-1 rounded-md flex items-center space-x-1 border border-gray-300 hover:border-gray-400">
              <span>View All</span>
              <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
            </button>
          </div>

          <div className="overflow-x-auto mt-2">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left text-gray-600">
                  <th className="p-2 text-sm">Name</th>
                  <th className="p-2 text-sm">Occupation</th>
                  <th className="p-2 text-sm">Location</th>
                  <th className="p-2 text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Angela Bassett",
                    occupation: "Oncologist",
                    location: "Los Angeles, CA",
                  },
                  {
                    name: "Rahmin Dunis",
                    occupation: "Oncologist",
                    location: "Mumbai, India",
                  },
                  {
                    name: "Joe Chin",
                    occupation: "Gynacologist",
                    location: "Cuba",
                  },
                  {
                    name: "Halimar Abubakar",
                    occupation: "Optician",
                    location: "Kiev",
                  },
                  {
                    name: "Gustavo Fring",
                    occupation: "Dentist",
                    location: "Tokyo",
                  },
                ].map((user, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2 text-sm">{user.name}</td>
                    <td className="p-2 text-sm">{user.occupation}</td>
                    <td className="p-2 text-sm">{user.location}</td>
                    <td className="p-2 flex space-x-1 text-sm">
                      <button className="flex items-center text-green-500 p-1">
                        <FontAwesomeIcon icon={faEye} className="h-4 w-4" />
                      </button>
                      <button className="flex items-center text-red-500 p-1">
                        <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-3 shadow-md rounded-md">
          <div className="flex justify-between items-center pt-3">
            <h3 className="text-sm font-semibold text-gray-700">Top User</h3>
            <button className="text-black bg-red-500 px-3 py-1 rounded-md flex items-center space-x-1 border border-gray-300 hover:border-gray-400">
              <span>June</span>
              <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
            </button>
          </div>

          <div className="overflow-x-auto mt-2">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left text-gray-600">
                  <th className="p-2 text-sm">Username</th>
                  <th className="p-2 text-sm">Searches</th>
                  <th className="p-2 text-sm">Saved</th>
                </tr>
              </thead>
              <tbody>
                {Array(5)
                  .fill({
                    username: "Jonathan Barks",
                    searches: "500+",
                    saved: 45,
                  })
                  .map((user, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-2 text-sm">{user.username}</td>
                      <td className="p-2 text-sm">{user.searches}</td>
                      <td className="p-2 text-sm">{user.saved}</td>
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

export default Accounts;
