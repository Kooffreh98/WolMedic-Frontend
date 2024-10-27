import React from "react";

const CustomLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600">Loading data...</p>
    </div>
  );
};

export default CustomLoader;
