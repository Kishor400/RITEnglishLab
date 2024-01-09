
import React, { useState } from 'react';
import Marks from "../assets/markData.json";
import log from "../assets/Log.json";
import QData from "../assets/QData.json";
import BST from "./bst.jsx";
import WST from "./wst.jsx";
import ANA from "./ana.jsx";
import "./admin.css";
import { Link } from 'react-router-dom';




function TEST() {

    let details=[];
    const [Data,setData]=useState(QData);
    const [n,setn]=useState(0);

    for(let i=0;i<QData.title.length;i++){
      var x=[QData.title[i],QData.Date[i],QData.Author[i]]
      details.push(x);
    }

    const handleWriteJson = async () => {
      try {
          const response = await fetch('/write-json', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          
          body: JSON.stringify({data:Data,type:3}),
          });

          if (response.ok) {
              alert('Mark Updated successfully!');
          } else {
              console.error('Failed to write JSON file:', response.statusText);
          }
          } catch (error) {
          console.error('Error:', error.message);
          }
      };

    function CreateModule(x){
      let xData=QData;
      xData.title.push(x[0]);
      xData.question.push(x[1]);
      xData.options.push(x[2]);
      xData.answer.push(x[3]);
      xData.Date.push(x[4]);
      xData.Author.push(x[5]);
      setData(xData);
      handleWriteJson();
    }
    function opnCreate(){
      document.querySelector(".CreateMenu").style="display:flex;";
      document.querySelector(".close").style="display:flex;";
    }
    function generator(){
      let no=document.querySelector(".n").value;
      setn(no);
      console.log(no);
    }
    function cloCM(){
      document.querySelector(".CreateMenu").style="display:none;";
      document.querySelector(".close").style="display:none;";
    }

    {/*CreateModule(["One Piece",["How Are You ?","Who Are You ?"],[["Fine","Not Fine"],["Human","Animal"]],["Fine","Human"],"01/09/2024","Luffy"])*/}
     
    return (
    <>
        <div className='pppo'>
          <div className='oppp'>
            <a className='CreateTest' onClick={opnCreate}>Create New</a>
          <div className="containerMore">
          <ul className="responsive-table rtt">
            <li className="table-header">
              <div className="col col-1">Date</div>
              <div className="col col-2">Module Name</div>
              <div className="col col-3">Author</div>
              <div className="col col-5">Delete</div>
            </li>
            {details.map((data) => (
              <li className="table-row">
                <div className="col col-1" >{data[1]}</div>
                <div className="col col-2" >{data[0]}</div>
                <div className="col col-3" >{data[2]}</div>
                <div className="col col-5" ><a>Delete</a></div>
              </li>
            ))}
          </ul>
        </div>
        </div>
        </div>
        <a className='close' onClick={cloCM}>

        </a>
        <div className='CreateMenu'>
          <div className='CMenu'>
          <p className='tuoo'>Module Name : <input placeholder='Module Name'></input></p>
          <p>Author Name : <input placeholder='Author Name'></input></p>
          <p>Date : <input placeholder='Date'></input></p>
          <p>Enter Number Of Questions : <input placeholder='Number Of Questions' className='n'></input></p>
          
          <button onClick={generator}>Generate</button>
          </div>
            {Array.from({ length: n }, (_, i) => (
              <div className='mods'>
                <input placeholder={"Question "+(i+1)} id={"Question"+i}></input>
                <input placeholder='Options' id={"Option"+i}></input>
                <input placeholder='Answer' id={"Answer"+i}></input>
              </div>
              ))}
          
          <div className='TestBut'>
            <button className='ButAdTest'>Submit</button>
            <button className='ButAdTest' onClick={cloCM}>Cancel</button>
          </div>
        </div>
    </>
  )
}

export default TEST;