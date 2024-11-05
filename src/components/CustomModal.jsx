import React from 'react';

const CustomModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
                <span className="text-lg font-medium text-black-800 mb-4 block"> are you sure you want to delete ?</span>
                <div className="flex justify-end space-x-3">
                    <button
                        onClick={onClose}
                        className="px-5 py-2 bg-gray-200 text-gray-700 rounded-md"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-5 py-2 bg-red-600 text-white rounded-md"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomModal;
