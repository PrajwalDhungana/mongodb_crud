import './App.css';
import React, { useState, useEffect } from 'react';
import StudentList from './components/studentList';

import axios from 'axios'
import { BASE_URL } from './utils/constants'
import { v4 as uuid } from "uuid";

function App() {
  const [name, setName] = useState('') 
  const [age, setAge] = useState('')  
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [faculty, setFaculty] = useState('')
  const [studentID, setStudentID] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [updateList, setUpdateList] = useState(false)
  const [studentsData, setStudentsData] = useState([])


  const getEditStudent = (student) => {
    setEditMode(true);
    setStudentID(student._id)
    setName(student.name)
    setAge(student.age)
    setEmail(student.email)
    setPhone(student.phone)
    setFaculty(student.faculty)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    name !== "" && age !== '' && email !== "" && phone !== "" && faculty !== "" && 
      axios
        .post(`${BASE_URL}/create`, { unique_id: uuid(), name: name, age: age, email: email, phone: phone, faculty: faculty })
        .then((res) => {
          setUpdateList(!updateList);
          setName("");
          setAge('');
          setEmail("");
          setPhone("");
          setFaculty("");
        })
  };

  const updateStudent = (e) => {
    e.preventDefault();
    axios
      .put(`${BASE_URL}/edit/${studentID}`, { name: name, age: age, email: email, phone: phone, faculty: faculty })
      .then((res) => {
        setUpdateList(!updateList);
        setEditMode(false);
        setName("");
        setAge("");
        setEmail("");
        setPhone("");
        setFaculty("");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/get`).then((res) => {
      setStudentsData(res.data.students)
    }).catch((error) => console.log(error))
  }, [updateList])

  return (
    <div className="App">
      <div style={createStyles.container}>
        <h1 style={createStyles.h1}>CRUD</h1>
        <form style={createStyles.formContainer} action="">
          <h2 style={createStyles.h2}>{editMode ? "Edit Student Details" : "Add New Student"}</h2>
          <input style={createStyles.input} type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} required />
          <input style={createStyles.input} type="number" value={age} placeholder="Age" onChange={(e) => setAge(e.target.value)} required />
          <input style={createStyles.input} type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          <input style={createStyles.input} type="number" value={phone} placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
          <input style={createStyles.input} type="text" value={faculty} placeholder="Faculty" onChange={(e) => setFaculty(e.target.value)} required />
          <button style={createStyles.submitButton} onClick={editMode ? updateStudent : handleSubmit}>{editMode ? "Save" : "Add"}</button>
        </form>
      </div>
      <StudentList studentsData={studentsData} getEditStudent={getEditStudent} setUpdateList={setUpdateList} />
    </div>
  );
}

export default App;

const createStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  h1: {
    margin: '35px 0',
  },
  h2: {
    textTransform: 'uppercase',
  },
  formContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'white',
    border: '1px solid transparent',
    borderRadius: '20px',
    background: '#223',
    padding: '20px',
    boxShadow: '25px 23px 29px 0px rgba(0,0,0,0.5)',
    marginBottom: '20px',
  },
  input: {
    height: '40px',
    width: '400px',
    margin: '10px',
    border: '1px solid #666',
    color: '#eee',
    backgroundColor: '#445',
    paddingLeft: '10px',
    textAlign: 'center',
    borderRadius: '10px',
    fontSize: '16px',
  },
  submitButton: {
    backgroundColor: '#001',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
    color: '#aaa',
    cursor: 'pointer',
    fontSize: '16px',
    boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.5)',
    width: '96%',
  },
};