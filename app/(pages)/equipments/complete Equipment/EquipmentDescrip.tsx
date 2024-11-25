import React from 'react';

const EquipmentDescription: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-lg font-semibold text-gray-700 text-center">
        Equipment List &gt; Basic Information &gt; <span className="text-green-500">Equipment Description</span>
      </h2>
      <div className="w-full md:pt-10 max-w-lg p-6 bg-white rounded-lg shadow-md">
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
      className={`w-6 h-6 ${index < 2 ? 'text-green-500' : 'text-gray-600'}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12" />
    </svg>
  ))}
</div>


        <h2 className="text-xl font-semibold text-center text-black">Equipment Description</h2>
        <p className="mt-2 text-sm text-gray-600 text-center">
          Provide a detailed description of the equipment
        </p>
        <div className="mt-4">
  <label htmlFor="equipment-description" className="block text-sm font-medium text-black">Equipment Description</label>
  <textarea
    id="equipment-description"
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Ut euismod, augue eu varius pellentesque, magna lorem ultricies nunc, vel vestibulum ligula ex quis augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ut enim quis erat elementum tincidunt. Fusce aliquam, eros id vestibulum posuere, felis elit gravida mi, nec suscipit felis libero et quam. Donec dignissim odio at malesuada euismod. Aliquam erat volutpat. Suspendisse interdum turpis id ligula sodales, nec vestibulum purus convallis. Sed auctor gravida libero, at sagittis odio dictum nec. Proin vel dui ac tortor cursus finibus ac eget velit."
  />
</div>

        <div className="flex justify-center">
        <button className="w-40 md:mt-10 bg-green-800 text-white rounded-lg hover:bg-green-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDescription;
