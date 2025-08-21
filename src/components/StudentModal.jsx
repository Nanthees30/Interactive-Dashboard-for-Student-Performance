import { icons } from "lucide-react";
import React from "react";

const StudentModal = ({ selectedStudent, closeModal }) => (
  <div
    className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4 z-50"
    style={{ backdropFilter: 'blur(8px)' }}
  >
    <div className="bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 p-6 sm:p-8 rounded-3xl border border-white border-opacity-30 shadow-2xl max-w-lg w-full transform scale-100 transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Student Details</h3>
        <button
          onClick={closeModal}
          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          {icons.close}
        </button>
      </div>
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <p><strong>Name:</strong> {selectedStudent.name}</p>
        <p><strong>Subject:</strong> {selectedStudent.subject}</p>
        <p><strong>Grade:</strong> {selectedStudent.grade}</p>
        <p><strong>Score:</strong> {selectedStudent.score}</p>
        <p className="text-sm italic mt-2">ID: {selectedStudent.id}</p>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={closeModal}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

export default StudentModal;
