import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import withAuth from '@/hoc/WithAuth';

const Accounts: FC = () => {
  return (
    <div className="p-4 space-y-6">
      <div className="bg-white p-4 rounded-md">
      <h2 className="text-black text-sm">
        Accounts
      </h2>
        <h3 className="text-sm font-semibold mb-3">All Users</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="p-2 text-sm">Name</th>
              <th className="p-2 text-sm">Occupation</th>
              <th className="p-2 text-sm">Location</th>
              <button className="mb-4 p-2">View All</button>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr className="border-t">
              <td className="p-2 text-sm">Angela Bassett</td>
              <td className="p-2 text-sm">Oncologist</td>
              <td className="p-2 text-sm">Los Angeles, CA</td>
              <td className="p-2 flex space-x-2 text-sm">
                <button className="flex items-center text-green-500">                  <FontAwesomeIcon icon={faEye} className="h-4 w-4 mr-1" />
                </button>
                <button className="flex items-center text-red-500">
                  <FontAwesomeIcon icon={faTrash} className="h-4 w-4 mr-1" />
                </button>
              </td>
            </tr>
            {/* Additional rows can go here */}

            <tr className="border-t">
              <td className="p-2 text-sm">Rahmin Dunis</td>
              <td className="p-2 text-sm">Oncologist</td>
              <td className="p-2 text-sm">Mumbai, India</td>
              <td className="p-2 flex space-x-2 text-sm">
                <button className="flex items-center text-green-500">                  <FontAwesomeIcon icon={faEye} className="h-4 w-4 mr-1" />
                </button>
                <button className="flex items-center text-red-500">
                  <FontAwesomeIcon icon={faTrash} className="h-4 w-4 mr-1" />
                </button>
              </td>
            </tr>

            <tr className="border-t">
              <td className="p-2 text-sm">Joe Chin</td>
              <td className="p-2 text-sm">Gynacologist</td>
              <td className="p-2 text-sm">Cuba</td>
              <td className="p-2 flex space-x-2 text-sm">
                <button className="flex items-center text-green-500">                  <FontAwesomeIcon icon={faEye} className="h-4 w-4 mr-1" />
                </button>
                <button className="flex items-center text-red-500">
                  <FontAwesomeIcon icon={faTrash} className="h-4 w-4 mr-1" />
                </button>
              </td>
            </tr>

            <tr className="border-t">
              <td className="p-2 text-sm">Halimar Abubakar</td>
              <td className="p-2 text-sm">Optician</td>
              <td className="p-2 text-sm">Kiev</td>
              <td className="p-2 flex space-x-2 text-sm">
                <button className="flex items-center text-green-500">                  <FontAwesomeIcon icon={faEye} className="h-4 w-4 mr-1" />
                </button>
                <button className="flex items-center text-red-500">
                  <FontAwesomeIcon icon={faTrash} className="h-4 w-4 mr-1" />
                </button>
              </td>
            </tr>

            <tr className="border-t">
              <td className="p-2 text-sm">Gustavo Fring</td>
              <td className="p-2 text-sm">Dentist</td>
              <td className="p-2 text-sm">Tokyo</td>
              <td className="p-2 flex space-x-2 text-sm">
                <button className="flex items-center text-green-500">                  
                  <FontAwesomeIcon icon={faEye} className="h-4 w-4 mr-1" />
                </button>
                <button className="flex items-center text-red-500">
                  <FontAwesomeIcon icon={faTrash} className="h-4 w-4 mr-1" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white p-4 shadow rounded-md">
        <h3 className="text-sm font-semibold mb-3">Top Users</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="p-2 text-sm">Username</th>
              <th className="p-2 text-sm">Searches</th>
              <th className="p-2 text-sm">Saved</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2 text-sm">Jonathan Barks</td>
              <td className="p-2 text-sm">500+</td>
              <td className="p-2 text-sm">45</td>
            </tr>

            <tr className="border-t">
              <td className="p-2 text-sm">Jonathan Barks</td>
              <td className="p-2 text-sm">500+</td>
              <td className="p-2 text-sm">45</td>
            </tr>

            <tr className="border-t">
              <td className="p-2 text-sm">Jonathan Barks</td>
              <td className="p-2 text-sm">500+</td>
              <td className="p-2 text-sm">45</td>
            </tr>

            <tr className="border-t">
              <td className="p-2 text-sm">Jonathan Barks</td>
              <td className="p-2 text-sm">500+</td>
              <td className="p-2 text-sm">45</td>
            </tr>

            <tr className="border-t">
              <td className="p-2 text-sm">Jonathan Barks</td>
              <td className="p-2 text-sm">500+</td>
              <td className="p-2 text-sm">45</td>
            </tr>
            {/* Additional rows can go here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default withAuth(Accounts);
