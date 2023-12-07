// src/LoginPage.jsx
import React, { useState } from 'react';
import './LoginPage.css';
import LogData from "./assets/Log.json";
import Test from "./Test.jsx";

const LoginPage = () => {

  //document.querySelector(".TestPage").style="display:none;";

  const [Reg, setReg] = useState('');
  const [Password, setPassword] = useState('');
  const [infoData, setInfo] = useState('');

  

  const handleSubmit = event => {
    //console.log('handleSubmit ran');
    
    event.preventDefault();

    console.log(LogData)

    for (let i = 0; i < LogData.Reg.length; i++) {
      let x=LogData.Reg[i];
      let y=LogData.Pass
      if(x==Reg){
        if(y[i]==Password){
          console.log("Welcome");
          setInfo(LogData.Reg[i]+"$"+LogData.Name[i]);
          document.querySelector(".TestPage").style="display:flex;";
          document.querySelector(".LogIn").style="display:none;";
        }else{
          alert("Password Incorrect !");
        }
      }
    }

    setReg('');
    setPassword('');
  };

  return (
    <>
      <div className='LogIn'>
        <form onSubmit={handleSubmit}>
          <input
            id="first_Reg"
            name="first_Reg"
            type="text"
            onChange={event => setReg(event.target.value)}
            value={Reg}
            placeholder='Reg'
          />
          <input
            id="last_Reg"
            name="last_Reg"
            type="text"
            value={Password}
            placeholder='Password'
            onChange={event => setPassword(event.target.value)}
          />

          <button type="submit">Submit form</button>
        </form>
      </div>
      <div className='TestPage'>
        <Test info={infoData}/>
      </div>
      
    </>
  );
};

export default LoginPage;
