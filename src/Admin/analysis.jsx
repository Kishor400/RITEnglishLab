
import React, { useState } from 'react';
import Marks from "../assets/markData.json";
import log from "../assets/Log.json";
import QData from "../assets/QData.json";
import BST from "./bst.jsx";
import WST from "./wst.jsx";
import ANA from "./ana.jsx";
import TLIST from "./tlist";
import "./admin.css";
import { Link } from 'react-router-dom';




function ANALYSIS() {
     
    return (
    <>
        <div className='contpan'>
            <div>
                <BST/>
                <ANA/>
            </div>
            <div>
                <WST/>
                <TLIST/>
            </div>
        </div>
            
          
    </>
  )
}

export default ANALYSIS;