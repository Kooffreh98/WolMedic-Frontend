import React from 'react';

const Specifications: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-lg font-semibold text-gray-700 text-center">
        Equipment List &gt; Upload Images &gt;  <span className="text-green-500">Add Specification</span>
      </h2>

      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        {/* Dash icons at the top */}
        <div className="flex justify-center space-x-2 mb-4">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={`w-6 h-6 ${index < 4 ? 'text-green-500' : 'text-gray-600'}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12" />
            </svg>
          ))}
        </div>
        
        <h2 className="text-xl font-semibold text-center text-black">Specifications</h2>
        <p className="mt-2 text-sm text-gray-600 text-center">
          Enter detailed specifications for the equipment
        </p>
        
        <div className="mt-4 space-y-4">
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-black">Age</label>
            <input
              id="age"
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="19-35"
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-black">Gender</label>
            <input
              id="gender"
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Female"
            />
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button className="flex justify-center items-center w-20 py-2 px-4 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        <p className="mt-2 text-black text-center">Add name</p>

        <div className="flex justify-center mt-4">
          <button className="w-40 py-2 px-4 bg-green-800 text-white rounded-lg hover:bg-green-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
