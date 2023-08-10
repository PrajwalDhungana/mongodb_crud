import React from 'react';

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
    height: '40px',
    textAlign: 'center',
    backgroundColor: '#ccc4',
    borderRadius: '20px',
    height: '50px',
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

function StudentList() {
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
          <tr style={studentListStyles.tr}>
            <td>id</td>
            <td>Punit Maharjan</td>
            <td>22</td>
            <td>punitsaur12@gmail.com</td>
            <td>9808894725</td>
            <td>BSc CSIT</td>
            <td style={studentListStyles.actionButtons}>
              <button style={{ ...studentListStyles.button, ...studentListStyles.viewButton }}>View</button>
              <button style={{ ...studentListStyles.button, ...studentListStyles.editButton }}>Edit</button>
              <button style={{ ...studentListStyles.button, ...studentListStyles.deleteButton }}>Delete</button>
            </td>
          </tr>
          <tr style={studentListStyles.tr}>
            <td>id</td>
            <td>Punit Maharjan</td>
            <td>22</td>
            <td>punitsaur12@gmail.com</td>
            <td>9808894725</td>
            <td>BSc CSIT</td>
            <td style={studentListStyles.actionButtons}>
              <button style={{ ...studentListStyles.button, ...studentListStyles.viewButton }}>View</button>
              <button style={{ ...studentListStyles.button, ...studentListStyles.editButton }}>Edit</button>
              <button style={{ ...studentListStyles.button, ...studentListStyles.deleteButton }}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
