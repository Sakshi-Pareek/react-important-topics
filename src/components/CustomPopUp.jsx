import React, { useState } from 'react';

const CustomPopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  if (isOpen === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative h-screen bg-black flex justify-center items-center">
        <button
          onClick={togglePopup}
          className="bg-[#5f9ea0] text-white text-2xl font-bold px-4 py-2 rounded"
        >
          Open Popup
        </button>
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-[#5f9ea0] p-6 rounded-lg text-center">
              <h2 className="text-3xl text-white font-bold mb-4">Popup Content</h2>
              <p className='text-white'>congrats! you create a custom popup by tailwind css</p>
              <button
                onClick={togglePopup}
                className="bg-black text-white px-4 py-2 mt-4 rounded"
              >
                Close Popup
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomPopUp;
