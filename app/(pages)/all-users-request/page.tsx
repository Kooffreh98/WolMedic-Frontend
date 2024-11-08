import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

const AllUsers: FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen text-gray-800 text-sm">
      {/* Main Content */}
      <main className="flex-1 p-4 md:ml-64 bg-gray-50"> {/* Adds margin only on medium+ screens */}
        {/* Header */}
        <header className="flex justify-between items-center">
          <div>
            <h2 className="text-base md:text-lg font-semibold text-gray-700">
              Accounts &gt; <span className="text-green-500">All Users</span>
            </h2>
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-gray-200 px-3 py-1 md:px-4 md:py-2 rounded-md text-gray-600 hover:bg-gray-300">
              Back
            </button>
          </div>
        </header>

        {/* Users Table */}
        <section className="mt-4 bg-white rounded-lg shadow-md p-4">
          <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-4">All Users</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 md:p-4 text-xs md:text-sm">Name</th>
                  <th className="p-2 md:p-4 text-xs md:text-sm">Occupation</th>
                  <th className="p-2 md:p-4 text-xs md:text-sm">Location</th>
                  <th className="p-2 md:p-4 text-xs md:text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Table rows */}
                {[
                  { name: 'Angela Bassett', occupation: 'Oncologist', location: 'Los Angeles, CA' },
                  { name: 'Rahmin Dunis', occupation: 'Oncologist', location: 'Mumbai, India' },
                  { name: 'Joe Chin', occupation: 'Gynaecologist', location: 'Cuba' },
                  { name: 'Halimar Abubakar', occupation: 'Optician', location: 'Kiev' },
                  { name: 'Gustavo Fring', occupation: 'Dentist', location: 'Tokyo' },
                  { name: 'Angela Bassett', occupation: 'Oncologist', location: 'Los Angeles, CA' },
                  { name: 'Rahmin Dunis', occupation: 'Oncologist', location: 'Mumbai, India' },
                  { name: 'Joe Chin', occupation: 'Gynaecologist', location: 'Cuba' },
                  { name: 'Halimar Abubakar', occupation: 'Optician', location: 'Kiev' },
                  { name: 'Gustavo Fring', occupation: 'Dentist', location: 'Tokyo' },
                ].map((user, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2 md:p-4 text-xs md:text-sm">{user.name}</td>
                    <td className="p-2 md:p-4 text-xs md:text-sm">{user.occupation}</td>
                    <td className="p-2 md:p-4 text-xs md:text-sm">{user.location}</td>
                    <td className="p-2 md:p-4 flex space-x-2 text-xs md:text-sm">
                      <button className="flex items-center text-green-500 p-1 sm:p-2">
                        <FontAwesomeIcon icon={faEye} className="h-4 w-4" />
                      </button>
                      <button className="flex items-center text-red-500 p-1 sm:p-2">
                        <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
                      </button>
                    </td>
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

export default AllUsers;
