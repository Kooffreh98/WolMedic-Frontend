import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Pagination component to handle navigating between pages
interface PaginationProps {
  pageNo: number; // Current page number
  setPageNo: (page: number) => void; // Function to update the page number
  maxPages: number; // Maximum number of pages
}

const Pagination = ({ pageNo, setPageNo, maxPages }: PaginationProps) => {
  // Generate an array for the previous two-page numbers if they exist and reverse them
  const prevThreeNoArr = Array.from(
    { length: 2 },
    (_, index) => pageNo - 1 - index,
  )
    .filter((value) => value > 0)
    .reverse();

  // Generate an array for the next two-page numbers if they are within the max page limit
  const nextFourNoArr = Array.from(
    { length: 2 },
    (_, index) => pageNo + index,
  ).filter((value) => value <= maxPages);

  // Combine previous and next page arrays into a single array for rendering
  const paginationArr = [...prevThreeNoArr, ...nextFourNoArr];

  // Handle clicking the "Next" button
  const handleNext = () => {
    if (pageNo < maxPages) {
      setPageNo(pageNo + 1);
    }
  };

  // Handle clicking the "Previous" button
  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  return (
    <div className="flex items-center justify-between py-2">
      {/* Previous Button */}
      <div>
        {pageNo > 1 ? (
          <button
            onClick={handlePrev}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded flex items-center"
          >
            <IoIosArrowBack /> Prev
          </button>
        ) : (
          <button
            disabled
            className="bg-gray-200 text-gray-400 font-semibold py-2 px-4 rounded flex items-center cursor-not-allowed"
          >
            <IoIosArrowBack /> Prev
          </button>
        )}
      </div>

      {/* Page Number Buttons */}
      <div className="flex space-x-2">
        {paginationArr.map((value) => (
          <button
            onClick={() => setPageNo(value)}
            className={`py-2 px-4 rounded ${
              value === pageNo
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
            key={value}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <div>
        {pageNo < maxPages ? (
          <button
            onClick={handleNext}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded flex items-center"
          >
            Next <IoIosArrowForward />
          </button>
        ) : (
          <button
            disabled
            className="bg-gray-200 text-gray-400 font-semibold py-2 px-4 rounded flex items-center cursor-not-allowed"
          >
            Next <IoIosArrowForward />
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
