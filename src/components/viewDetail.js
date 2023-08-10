import React from 'react';
import '../App.css';

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
    position: 'absolute',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background: 'rgba(200, 200, 200,0.9)',
    width: '30px',
    height: '30px',
    border: '0',
    boxShadow: '3px 3px 3px 0px rgba(0,0,0,0.3)',
    borderRadius:'50%',
    fontSize:'16px',
    transform: 'translateX(230px) translateY(-120px)',
    cursor:'pointer',
  },
};

function ViewDetail() {
  return (
    <div style={viewStyles.card}>
      <table style={viewStyles.viewTable} className="viewtable">
        <thead>
          <tr>
            <th colSpan={2}
              style={{
                paddingLeft:'10px',
                textTransform: 'uppercase',
                color:'white',
                fontSize:'24px',
                textAlign:'left',
              }}
            >Student's Detail</th> 
          </tr>
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
      <button style={viewStyles.button} 
      // onClick={}
      >
        ✖
      </button>
    </div>
  );
}

export default ViewDetail;
