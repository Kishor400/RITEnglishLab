// src/LoginPage.jsx
import './LoginPage.css';
import LogData from "./assets/Log.json";
import Test from "./Test.jsx";
import React, { useState, useEffect } from 'react';

const LoginPage = () => {

  useEffect(() => {
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const container = document.getElementById('container');

    if (registerBtn && loginBtn && container) {
      registerBtn.addEventListener('click', () => {
        container.classList.add("active");
      });

      loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
      });
    }
    
    return () => {
      // Cleanup the event listeners when the component unmounts
      if (registerBtn && loginBtn) {
        registerBtn.removeEventListener('click', () => {
          container.classList.add("active");
        });

        loginBtn.removeEventListener('click', () => {
          container.classList.remove("active");
        });
      }
    };
  }, []);
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
          document.querySelector(".Page").style="display:none;";
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
      {/*<div className='LogIn'>
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
      </div>*/}
      <div className='Page'>
        <div className="container LogInPage" id="container">
          <div className="form-container sign-up">
              <form>
                  <h1>Create Account</h1>
                  <input type="text" placeholder="Name"/>
                  <input type="email" placeholder="Email"/>
                  <input type="password" placeholder="Password"/>
                  <button>Sign Up</button>
              </form>
          </div>
          <div className="form-container sign-in LogIn">
              <form  onSubmit={handleSubmit}>
                  <h1>Sign In</h1>
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
                    type="password"
                    value={Password}
                    placeholder='Password'
                    onChange={event => setPassword(event.target.value)}
                  />
                  <button type="submit">Sign In</button>
              </form>
          </div>
          <div className="toggle-container">
              <div className="toggle">
                  <div className="toggle-panel toggle-left">
                      <h1>Welcome Back!</h1>
                      <p>Enter your personal details to use all of site features</p>
                      <button className="hidden" id="login">Sign In</button>
                  </div>
                  <div className="toggle-panel toggle-right">
                      <h1>Hello, Friend!</h1>
                      <p>Register with your personal details to use all of site features</p>
                      <button className="hidden" id="register">Sign Up</button>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div className='TestPage'>
        <Test info={infoData}/>
      </div>
     
    </>
  );
};

export default LoginPage;
