
import React, { useState } from 'react';
import Marks from "../assets/markData.json";
import log from "../assets/Log.json";
import QData from "../assets/QData.json";
import BST from "./bst.jsx";
import WST from "./wst.jsx";
import ANA from "./ana.jsx";
import "./admin.css";




function Pannel() {
     
    return (
    <>
        <div>
          <div>
            <div>
              <p>Best Performer Student</p>
            </div>
            <div className='bodypan'>
              <div className='sidebar'>
                <p>op</p>
              </div>
                <div className='contpan'>
                  <BST/>
                  <WST/>
                  <ANA/>
                  <BST/>
                </div>
              </div>
            </div>
            
          
        </div>
    </>
  )
}

export default Pannel;