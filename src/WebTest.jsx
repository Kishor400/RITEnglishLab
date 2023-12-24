import './TestStyle.css';
import Temp from "./WebTestModule.jsx";
import data from "./assets/testdata.json";
import LogImg from "./assets/LogImg.png";
import { Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react';


function WebTest(logInfo) {

  console.log(logInfo.logInfo);
    
  const [Test, setTest] = useState('');
  function chgTest(x){
    //document.querySelector("Temp").test="{x}";
    setTest(x);
    document.querySelector(".tt").style="display:none;";
    document.querySelector(".testMod").style="display:flex;";
  }
    return (
    <>
        <div className='tt'>
            <p>Assessment On Web</p>
            <div>
                <p>Latest</p>
                <div className='Tests'>
                    <div>
                      <a onClick={()=>chgTest(data.Test1)}>{data.Test1.Title}</a>
                    </div>
                    <div>
                      <a onClick={()=>chgTest(data.Test2)}>{data.Test2.Title}</a>
                    </div>
                    <div>
                      <a onClick={()=>chgTest(data.Test3)}>{data.Test3.Title}</a>
                    </div>
                </div>

                <button>More</button>
            </div>
        </div>
        <div className='testMod'>
          
          <Temp test={Test||data.Test1} logInfo={logInfo.logInfo} className='TTT'/>
        </div>
        
    </>
  )
}

export default WebTest