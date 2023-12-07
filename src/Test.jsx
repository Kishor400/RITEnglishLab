import './TestStyle.css';
import FormTest from "./FormTest.jsx";
import WebTest from "./WebTest.jsx";
import React, { useState } from 'react';
import LogImg from "./assets/LogImg.png";




function Test(info) {

    let io=JSON.stringify(info);
    let ios=io.split("{")[2].split("}")
    console.log(ios);
    

    function opnForm(){
        document.querySelector('.FormT').style="display:flex;";
        document.querySelector('.TestHome').style="display:none;";
      }
      function opnWeb(){
        document.querySelector('.WebT').style="display:flex;";
        document.querySelector('.TestHome').style="display:none;";
      }
    
     
    return (
    <>
    <p className='namer'>{io}</p>
        <div className='TestHome'>
            
            <div>
                <img src={LogImg} className='testImger'/>
            </div>
            <div className='TestR'>
                <p className='TestT'>Take Performance Test</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquid facilis praesentium! Optio cum iusto esse voluptatum porro aliquam, et mollitia fuga, exercitationem quibusdam cumque tempora! Dicta dolorum.</p>
                <div className='butCont'>
                    <button  className='testBut' onClick={opnForm}>Google Form Test</button>
                    <button  className='testBut' onClick={opnWeb}>Web Test</button>
                </div>
            </div>
            
        </div>
        <div className='FormT'>
          <FormTest/>
      </div>
      <div className='WebT'>
          <WebTest/>
      </div>
        
    </>
  )
}

export default Test