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
    <div className="flex bg-gray-100 flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <Layout>
        <div className="hidden md:block md:w-1/4 bg-white shadow-lg">
          {/* Sidebar content if needed */}
        </div>
      </Layout>

      {/* Main Content */}
      <div className="flex-1 lg:ml-[21%] p-6 space-y-6 pt-20">
        {/* Accounts Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Accounts</h2>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-sm font-medium text-gray-600">All Users</h3>
            <button className="text-gray-600 bg-gray-100 px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-green-600 hover:text-white">
              <span>View All</span>
              <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
            </button>
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="w-full border border-gray-200 rounded-xl overflow-hidden text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left text-gray-600">Name</th>
                  <th className="p-3 text-left text-gray-600">Occupation</th>
                  <th className="p-3 text-left text-gray-600">Location</th>
                  <th className="p-3 text-left text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="rounded-lg">
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
                    occupation: "Gynecologist",
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
                  <tr
                    key={index}
                    className="border-t hover:bg-gray-50 rounded-lg"
                  >
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.occupation}</td>
                    <td className="p-3">{user.location}</td>
                    <td className="p-3 flex space-x-3">
                      <button className="text-green-500 bg-gray-100 hover:text-green-700 rounded-md">
                        <FontAwesomeIcon icon={faEye} className="h-4 w-4" />
                      </button>
                      <button className="text-red-500 bg-gray-100 hover:text-red-700 rounded-md">
                        <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top User Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-gray-600">Top User</h3>
            <button className="text-white bg-red-500 px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-red-600">
              <span>June</span>
              <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
            </button>
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="w-full border border-gray-200 rounded-xl text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left text-gray-600">Username</th>
                  <th className="p-3 text-left text-gray-600">Searches</th>
                  <th className="p-3 text-left text-gray-600">Saved</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }, (_, i) => ({
                  username: "Jonathan Barks",
                  searches: "500+",
                  saved: 45,
                })).map((user, index) => (
                  <tr
                    key={index}
                    className="border-t hover:bg-gray-50 rounded-lg"
                  >
                    <td className="p-3">{user.username}</td>
                    <td className="p-3">{user.searches}</td>
                    <td className="p-3">{user.saved}</td>
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
