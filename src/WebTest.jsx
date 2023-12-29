import './TestStyle.css';
import Temp from "./WebTestModule.jsx";
import data from "./assets/testdata.json";
import QData from "./assets/QData.json";
import LogImg from "./assets/LogImg.png";
import { Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import Notallowed from './notallowed';
import Marks from "./assets/markData.json";


function WebTest(logInfo) {

  function rept(n){
    var reg=logInfo.logInfo[0]
    var id=QData.title.indexOf(n)
    var rlt=true;
    for(var i=0;i<Marks.length;i++){
      if(Marks[i][0]==reg && Marks[i][1]==id){
        rlt=false;
      }
    }
    console.log(id)
    return rlt
  }

  const Latest=QData.title.slice(-3);
  
  const [TId, setTId] = useState(0);

  function chgTest(x){
    //document.querySelector("Temp").test="{x}";
    if(rept(x)){
    setTId(QData.title.indexOf(x));
    document.querySelector(".tt").style="display:none;";
    document.querySelector(".testMod").style="display:flex;";}
    else{
      document.querySelector(".tt").style="display:none;";
      document.querySelector(".no").style="display:flex;";
    }
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
        <div className='no'>
          <Notallowed/>
        </div>
        
    </>
  )
}

export default WebTest