"use client";

import { useState } from "react"; // Import useState for managing local state
import { FiSearch } from "react-icons/fi";

// Define props interface for type safety
interface SearchSortByProps {
  title: string; // Title for the search section
}

const SearchSortBy = ({ title }: SearchSortByProps) => {
  const [searchTerm, setSearchTerm] = useState(""); // Local state for search input
  const [sortBy, setSortBy] = useState(""); // Local state for sort selection

  return (
    <form>
      <section className="flex items-center justify-between flex-wrap">
        {/* Title section */}
        <div className="py-2 text-green-800 text-2xl font-bold">{title}</div>

        {/* Search and Sort controls section */}
        <div className="flex flex-wrap">
          {/* Search input */}
          <div className="mr-5 py-2">
            <div className="border border-gray-300 flex items-center px-2">
              <FiSearch size={23} className="text-gray-500" />
              <input
                type="search"
                placeholder="Search"
                className="border-none focus:outline-none py-1 px-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
              />
            </div>
          </div>

          {/* Sort dropdown */}
          <div className="py-2">
            <select
              aria-label="Sort by"
              className="border border-gray-300 p-2 text-gray-600"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)} // Update state on selection change
            >
              <option value="">Sort by</option>
              <option value="name">Name</option>
              <option value="date">Date</option>
              <option value="status">Status</option>
            </select>
          </div>
        </div>
      </section>
    </form>
  );
};

export default SearchSortBy;
