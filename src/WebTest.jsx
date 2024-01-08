import './TestStyle.css';
import "./WebTest.css";
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
        <div className='HeaderWeb'>
            <div className='loWeb'>
               <a>Practice</a>
            </div>
         </div>
        <div className='tt'>
            <p>Assessment On Web</p>
            <div className='tttt'>
                <p>Latest</p>
                {/*<div className='Tests'>
                    <div>
                      <a onClick={()=>chgTest(Latest[0])}>{Latest[0]}</a>
                    </div>
                    <div>
                      <a onClick={()=>chgTest(Latest[1])}>{Latest[1]}</a>
                    </div>
                    <div>
                      <a onClick={()=>chgTest(Latest[2])}>{Latest[2]}</a>
                    </div>
                </div>*/}
                <div className="ag-format-container">
                  <div className="ag-courses_box">
                    <div className="ag-courses_item">
                      <a onClick={()=>chgTest(Latest[0])} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          {Latest[0]}
                        </div>

                        <div className="ag-courses-item_date-box">
                          Start:
                          <span className="ag-courses-item_date">
                            04.11.2022
                          </span>
                        </div>
                      </a>
                    </div>

                    <div className="ag-courses_item">
                      <a onClick={()=>chgTest(Latest[1])} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          {Latest[1]}
                        </div>

                        <div className="ag-courses-item_date-box">
                          Start:
                          <span className="ag-courses-item_date">
                            04.11.2022
                          </span>
                        </div>
                      </a>
                    </div>

                    <div className="ag-courses_item">
                      <a onClick={()=>chgTest(Latest[2])} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          {Latest[2]}
                        </div>

                        <div className="ag-courses-item_date-box">
                          Start:
                          <span className="ag-courses-item_date">
                            31.10.2022
                          </span>
                        </div>
                      </a>
                    </div>

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