const UploadCard = () => {
    return (
      <div className="bg-white rounded-lg shadow p-4 md:p-6">
        <h2 className="text-lg font-semibold text-gray-700 text-center">
        Equipment List &gt; Basic Information &gt; Equipment Description &gt;  <span className="text-green-500">Upload Images</span>
      </h2>
        <div className="flex justify-center space-x-2 mb-4">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={`w-6 h-6 ${index < 3 ? 'text-green-500' : 'text-gray-600'}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12" />
            </svg>
          ))}
        </div>
        <h2 className="text-lg font-bold mb-2 text-black text-center">Upload Images</h2>
        <p className="text-sm text-center text-black mb-4">
          Upload clear images of the equipment
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <img
                key={index}
                src="/Images/Frame1.png"
                alt={`Uploaded Image ${index + 1}`}
                className="w-full sm:w-1/3 md:w-20 h-20 border rounded"
              />
            ))}
          <img
            src="/Images/Images Frame.png"
            alt="Choose Image"
            className="w-full sm:w-1/3 md:w-20 h-20 border rounded object-cover"
          />
        </div>
        <div className="flex justify-center mt-6 md:mt-10">
          <button className="w-full sm:w-40 py-2 px-4 bg-green-800 text-white rounded-lg hover:bg-green-700">
            Next
          </button>
        </div>
      </div>
    );
  };
  
  export default UploadCard;
  