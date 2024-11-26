import React from "react";

interface ModalProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 shadow-lg w-80">
        <p className="text-gray-700 mb-4">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;