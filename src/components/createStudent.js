import React from 'react';

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

function CreateStudent() {
  return (
    <div style={createStyles.container}>
      <h1 style={createStyles.h1}>CRUD</h1>
      <form style={createStyles.formContainer} action="">
        <h2 style={createStyles.h2}>Add New Student</h2>
        <input style={createStyles.input} type="text" name="name" placeholder="Name" />
        <input style={createStyles.input} type="number" name="age" placeholder="Age" />
        <input style={createStyles.input} type="email" name="email" placeholder="Email" />
        <input style={createStyles.input} type="number" name="phone" placeholder="Phone" />
        <input style={createStyles.input} type="text" name="faculty" placeholder="Faculty" />
        <input style={createStyles.submitButton} type="submit" value="Add" />
      </form>
    </div>
  );
}

export default CreateStudent;
