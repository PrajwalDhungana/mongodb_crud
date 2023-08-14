import React  from 'react';
import axios from 'axios'
import { BASE_URL } from '../utils/constants';

const studentListStyles = {
  rightContainer: {
    marginTop: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  table: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    borderRadius: '20px',
    width: '100%',
  },
  th: {
    background: '#fff5',
    padding: '10px',
    height: '40px',
    textAlign: 'center',
  },
  tr: {
    textAlign: 'center',
    backgroundColor: '#ccc4',
    borderRadius: '20px',
    height: '60px',
    borderBottom: '1px solid #eee4',

  },
  evenRow: {
    backgroundColor: '#ebe4e4',
  },
  actionButtons: {
    padding: '0 10px',
  },
  button: {
    height: '25px',
    width: '60px',
    border: '0',
    cursor: 'pointer',
    color: '#fff',
    borderRadius: '5px',
    margin: '0 5px',
  },
  viewButton: {
    background: 'rgb(70, 160, 70)',
  },
  editButton: {
    background: 'rgb(87, 96, 177)',
  },
  deleteButton: {
    background: 'rgb(170, 40, 40)',
  },
};

function StudentList({ getEditStudent, studentsData, setUpdateList }) {

  const getRemoveId = (id) => {
    axios
      .delete(`${BASE_URL}/delete/${id}`)
      .then((res) => {
        setUpdateList();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div style={studentListStyles.rightContainer}>
      <table style={studentListStyles.table} border="0" cellSpacing="0">
        <thead>
          <tr>
            <th style={studentListStyles.th} width="40px">ID</th>
            <th style={studentListStyles.th} width="160px">Name</th>
            <th style={studentListStyles.th} width="50px">Age</th>
            <th style={studentListStyles.th} width="240px">Email</th>
            <th style={studentListStyles.th} width="150px">Phone Number</th>
            <th style={studentListStyles.th} width="150px">Faculty</th>
            <th style={studentListStyles.th} width="">Actions</th>
          </tr>
        </thead>
        <tbody>
          { studentsData !== [] && studentsData.map( ( student ) => {
            return (
              <tr style={studentListStyles.tr} key={student._id}>
                <td>{student._id.slice(0,5)}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.faculty}</td>
                <td style={studentListStyles.actionButtons}>
                  <button style={{ ...studentListStyles.button, ...studentListStyles.editButton }} onClick={() => getEditStudent( student )} >Edit</button>
                  <button style={{ ...studentListStyles.button, ...studentListStyles.deleteButton }} onClick={() => getRemoveId( student._id )} >Delete</button>
                </td>
              </tr>
            )
          } ) }
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
