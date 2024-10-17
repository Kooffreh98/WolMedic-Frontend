"use client";

import { useState, useEffect } from "react";

import SearchSortBy from "./SearchSortBy";
import { BASE_URL } from "@/api/base-url";
import RequestTables from "./RequestTables"; // Import RequestTables to display data

// Define a type for the items in the fetched data
interface RequestItem {
  _id: string; // Assuming _id is a string, adjust according to your API response
  id: number; // Replace with actual fields based on your data structure
  message: string;
  createdAt: Date; // Change type to Date
  to: string;
  // Add other relevant fields here
}

// Define a type for the expected data structure from the API
interface ApiResponse {
  data: RequestItem[]; // Array of RequestItem
  message: string; // Message field from the response
}

const RecentRequest = () => {
  // State to hold the fetched data
  const [data, setData] = useState<RequestItem[]>([]); // Specify a more specific type
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        // Fetch data from three different API endpoints
        const [response1, response2, response3] = await Promise.all([
          fetch(`${BASE_URL}/registration/getallproductregistration/`),
          fetch(`${BASE_URL}/facilityregistration/getallfacilityregistration/`),
          fetch(`${BASE_URL}/clinicaltrial/getallclinicaltrials/`),
        ]);

        // Check if all requests were successful
        if (!response1.ok || !response2.ok || !response3.ok) {
          throw new Error("Failed to fetch data from one or more APIs");
        }

        // Parse JSON data from each API response
        const [data1, data2, data3]: [ApiResponse, ApiResponse, ApiResponse] =
          await Promise.all([
            response1.json(),
            response2.json(),
            response3.json(),
          ]);

        // Extract message fields and merge data
        const mergedData: RequestItem[] = [
          ...data1.data.map((item) => ({
            ...item,
            createdAt: new Date(item.createdAt), // Convert string to Date
            message: data1.message.split(" ")[0], // Adjust message parsing as needed
            to: "/product-registration-request",
          })),
          ...data2.data.map((item) => ({
            ...item,
            createdAt: new Date(item.createdAt), // Convert string to Date
            message: data2.message.split(" ")[0],
            to: "/facility-registration-request",
          })),
          ...data3.data.map((item) => ({
            ...item,
            createdAt: new Date(item.createdAt), // Convert string to Date
            message: data3.message.split(" ")[0],
            to: "/clinical-trial-request",
          })),
        ];

        // Sort the merged data by timestamp
        const sortedData = mergedData.sort(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime(), // Use getTime() for sorting
        );

        // Update the state with sorted data
        setData(sortedData);
      } catch (error: unknown) {
        // Handle any errors that occur during fetch
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchData(); // Call fetchData on component mount
  }, []);

  // Render loading spinner
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center mt-5">
        {/* Spinner using Tailwind CSS */}
        <div className="animate-spin h-10 w-10 border-4 border-t-4 border-blue-500 rounded-full"></div>
        <p className="mt-2">Loading data...</p>
      </div>
    );
  }

  // Render error message if any
  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-4">
      <SearchSortBy title="Recent Requests" />
      {/* Render the fetched data using RequestTables */}
      <RequestTables recent={true} data={data} />
      {/* Uncomment if pagination is needed */}
      {/* <div className="py-4">
        <Pagination pageNo={pageNo} setPageNo={setPageNo} maxPages={...} />
      </div> */}
    </div>
  );
};

export default RecentRequest;
