import React, { useEffect, useMemo, useState } from "react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import StudentList from "./components/StudentList";
import studentsData from "./studentsdata.json";
import PerformanceChart from "./components/PerformanceChart";
import StudentModal from "./components/StudentModal"; // don't forget to import

const App = () => {
  const [students] = useState(studentsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode target of HTML Page
  useEffect(() => {
    const isDark = localStorage.getItem('isDarkMode') === 'true';
    setIsDarkMode(isDark);
    if (isDark) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, []);

  // it's Filter option
  const filteredStudents = useMemo(() => {
    let filteredList = [...students];
    if (selectedSubject) {
      filteredList = filteredList.filter(student => student.subject === selectedSubject);
    }
    if (selectedGrade) {
      filteredList = filteredList.filter(student => student.grade === selectedGrade);
    }
    if (searchQuery) {
      filteredList = filteredList.filter(student =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filteredList;
  }, [students, searchQuery, selectedSubject, selectedGrade]);

  // Sort option
  const sortedStudents = useMemo(() => {
    if (!sortConfig.key) {
      return filteredStudents;
    }
    const sortableList = [...filteredStudents];
    sortableList.sort((a, b) => {
      // Numerical sorting for ID and Score
      if (sortConfig.key === 'id' || sortConfig.key === 'score') {
        return sortConfig.direction === 'ascending' ? a[sortConfig.key] - b[sortConfig.key] : b[sortConfig.key] - a[sortConfig.key];
      }
      
      // String sorting for Name and Grade
      const aValue = String(a[sortConfig.key]).toLowerCase();
      const bValue = String(b[sortConfig.key]).toLowerCase();

      if (aValue < bValue) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    return sortableList;
  }, [filteredStudents, sortConfig]);

  // Average score
  const chartData = useMemo(() => {
    const subjectScores = sortedStudents.reduce((acc, student) => {
      if (!acc[student.subject]) {
        acc[student.subject] = { totalScore: 0, count: 0 };
      }
      acc[student.subject].totalScore += student.score;
      acc[student.subject].count += 1;
      return acc;
    }, {});
    return Object.keys(subjectScores).map(subject => ({
      subject,
      averageScore: (subjectScores[subject].totalScore / subjectScores[subject].count).toFixed(2),
    }));
  }, [sortedStudents]);

  // Sort ascending checking(Extra created for My opinial)
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  const openModal = (student) => setSelectedStudent(student);
  const closeModal = () => setSelectedStudent(null);

  // Dark mode on/off controller
  const handleDarkModeToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('isDarkMode', newMode);
    if (newMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  };

  const uniqueSubjects = [...new Set(students.map(item => item.subject))];
  const uniqueGrades = [...new Set(students.map(item => item.grade))].sort();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 [data-theme=dark]:bg-gray-900 [data-theme=dark]:text-gray-100 transition-colors duration-300 font-sans">
      <NavBar isDarkMode={isDarkMode} handleDarkModeToggle={handleDarkModeToggle} />
      <main className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        <Sidebar
          selectedSubject={selectedSubject}
          handleSubjectChange={(e) => setSelectedSubject(e.target.value)}
          selectedGrade={selectedGrade}
          handleGradeChange={(e) => setSelectedGrade(e.target.value)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          uniqueSubjects={uniqueSubjects}
          uniqueGrades={uniqueGrades}
        />
        <section className="md:col-span-3 flex flex-col space-y-6">
          <StudentList
            students={sortedStudents}
            sortConfig={sortConfig}
            requestSort={requestSort}
            openModal={openModal}
          />
          <PerformanceChart
            chartData={chartData}
            isDarkMode={isDarkMode}
          />
        </section>
      </main>
      {selectedStudent && (
        <StudentModal
          selectedStudent={selectedStudent}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;
