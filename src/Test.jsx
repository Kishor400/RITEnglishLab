import './TestHome.css';
import FormTest from "./FormTest.jsx";
import WebTest from "./WebTest.jsx";
import React, { useState } from 'react';
import LogImg from "./assets/LogImg.png";
import Card1 from "./assets/landscape-1.png";
import Card2 from "./assets/landscape-2.png";




function Test(info) {

    let io=JSON.stringify(info);
    let ios=io.split('"')[3].split("$")

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
      <p className='namer'>{ios[1]}</p>
      <div className='TestHome'>

         <div className='HeaderTest'>
            <div className='loTest'>
               <a>Practice</a>
            </div>
         </div>
        <div className="containerTest">
         
         <div className="card__containerTest">
            <button className="card__article" onClick={opnWeb}>
               <img src={Card1} alt="image" className="card__img"/>

               <div className="card__data">
                  <span className="card__description">Let Get Pratice On</span>
                  <h2 className="card__title">Web Module</h2>
               </div>
            </button>

            <button className="card__article" onClick={opnForm}>
               <img src={Card2} alt="image" className="card__img"/>

               <div className="card__data">
                  <span className="card__description">Let Get Pratice On</span>
                  <h2 className="card__title">Google Forms</h2>
               </div>
            </button>

            
         </div>
      </div>
      </div>
        <div className='FormT'>
          <FormTest/>
      </div>
      <div className='WebT'>
          <WebTest logInfo={ios}/>
      </div>
        
    </>
  )
}

export default Test