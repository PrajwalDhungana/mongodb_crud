import React from 'react';

const viewStyles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30px',
    background: '#ccc5',
    marginBottom: '30px',
    borderRadius: '10px',
    padding: '20px',
    fontSize: '20px',
    boxShadow: '25px 23px 20px 0px rgba(0,0,0,0.5)',
    flexDirection: 'column',
  },
  viewTable: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    borderCollapse: 'collapse',
  },
  th: {
    width: '200px',
    textAlign: 'left',
    padding: '0 10px',
  },
  td: {
    textAlign: 'left',
    height: '40px',
  },
  button:{
    background: 'rgb(70, 160, 70)',
    marginTop: '20px',
    padding: '10px 0',
    width: '100%',
    border: '0',
    boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.5)',
    borderRadius:'5px',
  },
};

function ViewDetail() {
  return (
    <div style={viewStyles.card}>
      <table style={viewStyles.viewTable} className="viewtable">
        <thead>
          <tr>
            <th style={viewStyles.th}>Name</th>
            <td style={viewStyles.td}>Punit Maharjan</td>
          </tr>
          <tr>
            <th style={viewStyles.th}>Age</th>
            <td style={viewStyles.td}>22</td>
          </tr>
          <tr>
            <th style={viewStyles.th}>Email</th>
            <td style={viewStyles.td}>punitsaur12@gmail.com</td>
          </tr>
          <tr>
            <th style={viewStyles.th}>Phone No</th>
            <td style={viewStyles.td}>9808894725</td>
          </tr>
          <tr>
            <th style={viewStyles.th}>Faculty</th>
            <td style={viewStyles.td}>Bsc Csit</td>
          </tr>
        </thead>
      </table>
      <button style={viewStyles.button}>Back</button>
    </div>
  );
}

export default ViewDetail;
