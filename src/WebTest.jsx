import './TestStyle.css';
import Temp from "./WebTestModule.jsx";
import data from "./assets/testdata.json";
import QData from "./assets/QData.json";
import LogImg from "./assets/LogImg.png";
import { Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react';


function WebTest(logInfo) {

  const Latest=QData.title.slice(-3);
  
  const [TId, setTId] = useState(0);

  function chgTest(x){
    //document.querySelector("Temp").test="{x}";
    setTId(QData.title.indexOf(x));
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
                      <a onClick={()=>chgTest(Latest[0])}>{Latest[0]}</a>
                    </div>
                    <div>
                      <a onClick={()=>chgTest(Latest[1])}>{Latest[1]}</a>
                    </div>
                    <div>
                      <a onClick={()=>chgTest(Latest[2])}>{Latest[2]}</a>
                    </div>
                </div>

                <button>More</button>
            </div>
        </div>
        <div className='testMod'>
          <Temp TId={TId} logInfo={logInfo.logInfo} className='TTT'/>
        </div>
        
    </>
  )
}

export default WebTest