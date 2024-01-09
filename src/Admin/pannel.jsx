
import React, { useState } from 'react';
import Marks from "../assets/markData.json";
import log from "../assets/Log.json";
import QData from "../assets/QData.json";
import BST from "./bst.jsx";
import WST from "./wst.jsx";
import ANA from "./ana.jsx";
import "./admin.css";
import { Link } from 'react-router-dom';
import ANALYSIS from './analysis';
import HOME from './home';
import TEST from "./test";





function Pannel() {

  function anafun(){
    document.querySelector(".titpan").innerHTML="ANALYSIS";
    document.querySelector(".analysis").style="display:flex;";
    document.querySelector(".home").style="display:none;";
    document.querySelector(".test").style="display:none;";
  }
  function homefun(){
    document.querySelector(".titpan").innerHTML="HOME";
    document.querySelector(".home").style="display:flex;";
    document.querySelector(".analysis").style="display:none;";
    document.querySelector(".test").style="display:none;";
  }
  function testfun(){
    document.querySelector(".titpan").innerHTML="Practice";
    document.querySelector(".home").style="display:none;";
    document.querySelector(".analysis").style="display:none;";
    document.querySelector(".test").style="display:flex;";
  }
     
    return (
    <>
        <div className='pan'>
          <div className='in1'>
            <div>
              <p className='titpan'>ANALYSIS</p>
            </div>
            
            <div className='bodypan'>
              <div className='sidebar'>
                  <button className='sidetab' onClick={homefun}>HOME</button>
                  <button className='sidetab' onClick={anafun}>ANALYSIS</button>
                  <button className='sidetab' onClick={testfun}>TEST</button>
                  <button className='sidetab'>VIDEO</button>
                  <button className='sidetab'>STUDENT</button>
              </div>
                <div className='analysis'><ANALYSIS/></div>
                <div className='home'><HOME/></div>
                <div className='test'><TEST/></div>
            </div>
          </div>
            
          
        </div>
    </>
  )
}

export default Pannel;