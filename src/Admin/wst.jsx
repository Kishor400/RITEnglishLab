import React, { useState } from 'react';
import Marks from '../assets/markData.json';
import log from '../assets/Log.json';
import QData from '../assets/QData.json';
import './admin.css';

function WST() {
  const x = Marks;
  const bst = [];
  const n = QData.title.length;

  for (let i = 0; i < n; i++) {
    const y = [];
    for (let j = 0; j < Marks.length; j++) {
        const z=Marks.length-j-1;
        
      const k = x[z];
      console.log(k);
      if (k[1] === i) {
        y.push(k);
      }
    }

    if (y.length !== 0) {
      let min = y[0];
      for (let l = 0; l < y.length; l++) {
        const m = y[l];
        if (m[2] < min[2]) {
          min = m;
        }
      }
      console.log(min[0]);
      bst.push(min);
    } else {
      console.log('None');
      // Move the console.log statement here if you want to log 'None' when the array is empty.
    }
  }

  console.log(bst);

    return (
    <>
        
        <div className='bstbox'>
        <p className='bsttitle'>Student Need To Improve</p>
        <ul>
          <li className='topbst'>
            <p  className='marktop'>Test Title</p>
            <p className='regtop'>Register Number</p>
            <p>Mark</p>
          </li>
          {bst.map((season) => (
            <li className='bsttab'>
              <p>{QData.title[season[1]]}</p>
              <p>{season[0]}</p>
              {/* <p>{log.Name[log.Reg.indexOf(season[0])]}</p> */}
              <p>{season[2]}</p>
            </li>
          ))}
        </ul>
        </div>
    </>
  )
}

export default WST;