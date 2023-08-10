import './App.css';
import React from 'react';
import CreateStudent from './components/createStudent';
import StudentList from './components/studentList';
import ViewDetail from './components/viewDetail';

function App() {
  return (
    <div className="App">
      <CreateStudent />
      <StudentList />
      <ViewDetail />
    </div>
  );
}

export default App;
