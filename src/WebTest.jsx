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

  function opnMore(){
    document.querySelector(".MoreWeb").style="display:flex;";
    document.querySelector(".tt").style="display:none;";
  }

  const Latest=QData.title.slice(-3);
  const LateDate=QData.Date.slice(-3);
  
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
                      <a onClick={()=>chgTest(Latest[2])} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          {Latest[2]}
                        </div>

                        <div className="ag-courses-item_date-box">
                          Start:
                          <span className="ag-courses-item_date">
                            {LateDate[2]}
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
                          {LateDate[1]}
                          </span>
                        </div>
                      </a>
                    </div>

                    <div className="ag-courses_item">
                      <a onClick={()=>chgTest(Latest[0])} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          {Latest[0]}
                        </div>

                        <div className="ag-courses-item_date-box">
                          Start:
                          <span className="ag-courses-item_date">
                          {LateDate[0]}
                          </span>
                        </div>
                      </a>
                    </div>

                  </div>
                </div>

                <button className='butWeb' onClick={opnMore}>More</button>
            </div>
        </div>
        <div className='MoreWeb'>
        <div className="containerMore">
          <h2>Avavailable <small>Triggers on 767px</small></h2>
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">Job Id</div>
              <div className="col col-2">Customer Name</div>
              <div className="col col-3">Amount Due</div>
              <div className="col col-4">Payment Status</div>
            </li>
            <li className="table-row">
              <div className="col col-1" data-label="Job Id">42235</div>
              <div className="col col-2" data-label="Customer Name">John Doe</div>
              <div className="col col-3" data-label="Amount">$350</div>
              <div className="col col-4" data-label="Payment Status">Pending</div>
            </li>
            <li className="table-row">
              <div className="col col-1" data-label="Job Id">42442</div>
              <div className="col col-2" data-label="Customer Name">Jennifer Smith</div>
              <div className="col col-3" data-label="Amount">$220</div>
              <div className="col col-4" data-label="Payment Status">Pending</div>
            </li>
            <li className="table-row">
              <div className="col col-1" data-label="Job Id">42257</div>
              <div className="col col-2" data-label="Customer Name">John Smith</div>
              <div className="col col-3" data-label="Amount">$341</div>
              <div className="col col-4" data-label="Payment Status">Pending</div>
            </li>
            <li className="table-row">
              <div className="col col-1" data-label="Job Id">42311</div>
              <div className="col col-2" data-label="Customer Name">John Carpenter</div>
              <div className="col col-3" data-label="Amount">$115</div>
              <div className="col col-4" data-label="Payment Status">Pending</div>
            </li>
          </ul>
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