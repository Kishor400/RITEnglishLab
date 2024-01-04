import React, { useState } from 'react';
import Marks from '../assets/markData.json';
import log from '../assets/Log.json';
import QData from '../assets/QData.json';
import './admin.css';

function TLIST() {

    let test=QData.title;

    return (
    <>
        <div className='lstbx'>
        <p className='listtitle'>Test Published</p>
        <ul>
          {test.map((season) => (
            <li className='lsttab'>
              <p>{season}</p>
            </li>
          ))}
        </ul>
            
        </div>
    </>
  )
}

export default TLIST;