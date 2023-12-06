// src/LoginPage.jsx
import React, { useState } from 'react';
import './LoginPage.css';
import LogData from "./assets/Log.json"

const LoginPage = () => {
  const [Reg, setReg] = useState('');
  const [Password, setPassword] = useState('');

  const handleSubmit = event => {
    //console.log('handleSubmit ran');
    event.preventDefault();

    console.log({Reg:Password});
    let ref={Reg:Password};
    if(ref in LogData){
      console.log("IO");
    }

    setReg('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="first_Reg"
          name="first_Reg"
          type="text"
          onChange={event => setReg(event.target.value)}
          value={Reg}
        />
        <input
          id="last_Reg"
          name="last_Reg"
          type="text"
          value={Password}
          onChange={event => setPassword(event.target.value)}
        />

        <button type="submit">Submit form</button>
      </form>
    </div>
  );
};

export default LoginPage;
