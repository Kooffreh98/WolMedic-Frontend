import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

const AllUsers: FC = () => {
  return (
    <div className="flex min-h-screen text-gray-800 text-sm">

      {/* Main Content */}
      <main className="flex-1 p-4">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div>
          <h2 className="text-lg font-semibold text-gray-700">
              Accounts &gt; <span className="text-green-500">All Users</span></h2>
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-gray-200 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-300">
              Back
            </button>
          </div>
        </header>

        {/* Users Table */}
        <section className="mt-6 bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">All Users</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-md">
              <thead>
                <tr className="text-left bg-gray-100 w-full">
                  <th className="p-4 font-medium text-gray-600">Name</th>
                  <th className="p-4 font-medium text-gray-600">Occupation</th>
                  <th className="p-4 font-medium text-gray-600">Location</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Angela Bassett', occupation: 'Oncologist', location: 'Los Angeles, CA' },
                  { name: 'Rahmin Duris', occupation: 'Pediatrician', location: 'Mumbai, India' },
                  { name: 'Joe Chin', occupation: 'Gynecologist', location: 'Cuba' },
                  { name: 'Halima Abubakar', occupation: 'Optician', location: 'Kiev' },
                  { name: 'Joe Chin', occupation: 'Gynecologist', location: 'Cuba' },
                  { name: 'Angela Bassett', occupation: 'Oncologist', location: 'Los Angeles, CA' },
                  { name: 'Rahmin Duris', occupation: 'Pediatrician', location: 'Mumbai, India' },
                  { name: 'Joe Chin', occupation: 'Gynecologist', location: 'Cuba' },
                  { name: 'Halima Abubakar', occupation: 'Optician', location: 'Kiev' },
                  { name: 'Joe Chin', occupation: 'Gynecologist', location: 'Cuba' },

                ].map((user, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50">
                    <td className="p-1">{user.name}</td>
                    <td className="p-4">{user.occupation}</td>
                    <td className="p-4">{user.location}</td>
                    <td className="p-4 space-x-4">
                      <button>
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button>
                        <FontAwesomeIcon icon={faTrash} />
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
