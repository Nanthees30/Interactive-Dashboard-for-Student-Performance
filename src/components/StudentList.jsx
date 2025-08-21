import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const StudentList = ({ students, sortConfig, requestSort, openModal }) => (
  <div className="ml-0 md:ml-10 rounded-2xl shadow-xl p-6 md:p-6 bg-white dark:bg-gray-800 dark:text-white">
    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
      Student List
    </h2>

    {/* Table Container */}
    <div className="overflow-x-auto overflow-y-auto max-h-[400px] rounded-xl">
      <table className="min-w-[600px] md:min-w-full text-left table-auto">
        <thead className="sticky top-0 uppercase text-md bg-gradient-to-b from-blue-300 to-blue-100 dark:bg-gray-800 dark:text-gray-900 text-gray-800">
          <tr>
            <th className="p-3 cursor-pointer" onClick={() => requestSort("id")}>
              <div className="flex items-center gap-1">
                ID
                {sortConfig.key === "id" &&
                  (sortConfig.direction === "ascending" ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />)}
              </div>
            </th>
            <th className="p-3 cursor-pointer" onClick={() => requestSort("name")}>
              <div className="flex items-center gap-1">
                Name
                {sortConfig.key === "name" &&
                  (sortConfig.direction === "ascending" ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />)}
              </div>
            </th>
            <th className="p-3">Subject</th>
            <th className="p-3">Grade</th>
            <th className="p-3 cursor-pointer" onClick={() => requestSort("score")}>
              <div className="flex items-center gap-1">
                Score
                {sortConfig.key === "score" &&
                  (sortConfig.direction === "ascending" ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />)}
              </div>
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {students.length > 0 ? (
            students.map(student => (
              <tr
                key={student.id}
                onClick={() => openModal(student)}
                className="transition-colors cursor-pointer hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-600 hover:text-white"
              >
                <td className="p-3 font-medium">{student.id}</td>
                <td className="p-3 font-medium">{student.name}</td>
                <td className="p-3">{student.subject}</td>
                <td className="p-3">{student.grade}</td>
                <td className="p-3">{student.score}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-3 text-center text-gray-500 dark:text-gray-400">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);

export default StudentList;
