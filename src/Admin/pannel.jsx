
import React, { useState } from 'react';
import Marks from "../assets/markData.json";
import log from "../assets/Log.json";
import QData from "../assets/QData.json";
import BST from "./bst.jsx";
import ANA from "./ana.jsx";




function Pannel() {
     
    return (
    <>
        <div>
          <div>
            <div>
              <p>Best Performer Student</p>
            </div>
          </div>
          <div>
            <BST/>
          </div>
          <div>
            <ANA/>
          </div>
        </div>
    </>
  )
}

export default Pannel;