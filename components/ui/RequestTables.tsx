import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

// Define the structure of each item in the data array
interface RequestData {
  _id: string;
  companyName?: string;
  businessName?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  mobile?: string;
  requestType?: string;
  message?: string;
  noProductsRegistration?: string;
  existingFacility?: boolean;
  category?: string;
  status?: string;
  businessType?: string;
  clinicalTrial?: string;
  date?: string;
  createdAt: Date;
  to: string;
  cro?: boolean; // Add the cro property here
}

// Define the props for the RequestTables component
interface RequestTablesProps {
  form?: boolean;
  cro?: boolean;
  recent?: boolean;
  type?: string;
  data: RequestData[]; // Use the RequestData type for the data array
  to?: string;
}

const RequestTables = (props: RequestTablesProps) => {
  return (
    <section className="mt-5">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {!props.form ? (
              <th className="text-left text-green-700 px-5 py-3">
                {props.cro || props.recent ? "Company Name" : "Business Name"}
              </th>
            ) : (
              <>
                <th className="text-left text-green-700 px-5 py-3">
                  First Name
                </th>
                <th className="text-left text-green-700 px-5 py-3">
                  Last Name
                </th>
              </>
            )}
            {!props.recent && (
              <>
                {!props.form && (
                  <th className="text-left text-green-700 px-5 py-3">
                    Email Address
                  </th>
                )}
                <th className="text-left text-green-700 px-5 py-3">
                  Phone Number
                </th>
              </>
            )}
            {!props.form && (
              <>
                <th className="text-left text-green-700 px-5 py-3">
                  {props.recent
                    ? "Request type"
                    : props.cro
                      ? "CRO"
                      : "Existing Facility?"}
                </th>
                <th className="text-left text-green-700 px-5 py-3">
                  {props.type ? "Clinical Trial" : "Business Type"}
                </th>
              </>
            )}
            <th className="text-left text-green-700 px-5 py-3">
              {props.form
                ? props.type === "contact"
                  ? "TimeStamp"
                  : "Status"
                : "TimeStamp"}{" "}
              <FaArrowDown />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr key={item._id} className="border-b hover:bg-gray-50">
              {!props.form ? (
                <td className="text-green-700 px-5 py-4">
                  {item.companyName || item.businessName}
                </td>
              ) : (
                <>
                  <td className="text-green-700 px-5 py-4">{item.firstName}</td>
                  <td className="text-green-700 px-5 py-4">{item.lastName}</td>
                </>
              )}
              {!props.recent && (
                <>
                  {!props.form && <td className="px-5 py-4">{item.email}</td>}
                  <td className="px-5 py-4">{item.phone || item.mobile}</td>
                </>
              )}
              {!props.form && (
                <>
                  {props.recent ? (
                    <td className="px-5 py-4">
                      {item.requestType ||
                        `${item.message} ${item.message === "Clinical" ? "Trial" : "Registration"}` ||
                        item.noProductsRegistration}
                    </td>
                  ) : (
                    <td className="px-5 py-4">
                      {item.cro
                        ? item.cro
                          ? "Yes"
                          : "No"
                        : item.category ||
                          (item.existingFacility ? "Yes" : "No")}
                    </td>
                  )}
                  <td className="px-5 py-4">
                    {item.status || item.businessType || item.clinicalTrial}
                  </td>
                </>
              )}
              <td className="px-5 py-4">
                {item.date || item.createdAt.toLocaleString().split("T")[0]}
              </td>
              <td className="text-green-700 px-5 py-4">
                <Link
                  href={
                    props.to
                      ? `${props.to}/${item._id}`
                      : `${item.to}/${item._id}`
                  }
                >
                  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                    View
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RequestTables;
