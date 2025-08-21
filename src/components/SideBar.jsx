import React from "react";

const Sidebar = ({ selectedSubject, handleSubjectChange, selectedGrade, handleGradeChange, searchQuery, setSearchQuery, uniqueSubjects, uniqueGrades }) => (
  <aside className="fixed top-0 left-0 h-screen pt-20 my-10 w-full md:w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:mr-6 mb-6 md:mb-0">
    <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Filters</h2>
    <div className="flex flex-col space-y-4">
      <label>
        <span className="text-gray-700 dark:text-gray-300">Subject</span>
        <select value={selectedSubject} onChange={handleSubjectChange} className="w-full p-2 mt-1 rounded-lg bg-white dark:bg-gray-700 dark:text-gray-200">
          <option value="">All Subjects</option>
          {uniqueSubjects.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </label>
      <label>
        <span className="text-gray-700 dark:text-gray-300">Grade</span>
        <select value={selectedGrade} onChange={handleGradeChange} className="w-full p-2 mt-1 rounded-lg bg-white dark:bg-gray-700 dark:text-gray-200">
          <option value="">All Grades</option>
          {uniqueGrades.map((g) => <option key={g} value={g}>{g}</option>)}
        </select>
      </label>
      <label>
        <span className="text-gray-700 dark:text-gray-300">Search</span>
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search by name..." className="w-full p-2 mt-1 rounded-lg bg-white dark:bg-gray-700 dark:text-gray-200"/>
      </label>
    </div>
  </aside>
);

export default Sidebar;
