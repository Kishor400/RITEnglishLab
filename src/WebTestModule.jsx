import './TestStyle.css';
import { useState } from 'react';
import React, { useEffect } from 'react';
import LogImg from "./assets/LogImg.png";
import Test from './Test';
import datas from "./assets/markData.json"




function Temp({test,logInfo}) {

    //console.log(data.Test1);
    console.log(logInfo);

    const prevData=datas.data;
    console.log(prevData);

    const [x, setX] = useState(0);

    const [mark, setmark] = useState(0);

    // SERVER SIDE

    //const [jsonData, setJsonData] = useState({ mark: mark });
        
        const handleWriteJson = async () => {
            try {
                prevData.push([logInfo[0],test.Index,mark]);
            const response = await fetch('/write-json', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                
                body: JSON.stringify({data:prevData,type:1}),
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

    // ======


    useEffect(() => {
        handleRadioSelection();
      }, []);
      const handleRadioSelection = () => {
        const radioInput = document.querySelector('input[type="radio"][name="answer"]:checked');
        const butt = document.querySelector('#butt').innerHTML;

        if(radioInput){
            if(radioInput.value==test.crt[x]){
                setmark(mark+1);
            }
        }

        if(butt=="Next"){
            if (radioInput) {
                setX(x+1);
                console.log("crt");
            }
        }else if(butt=="Submit"){
            document.querySelector('#butt').disabled=true;
            document.querySelector(".mark").style="display:flex";
            document.querySelector(".test-cont").style="display:none";
        }
      };

    return (
 
        <div>
            <div className='test-cont'>
                <p>{test.Title}</p>
                <div>
                    <p>{test.q[x]}</p>
                    <div>
                        <input type="radio" name='answer' value={test.a1[x]}/><label>{test.a1[x]}</label>
                        <input type="radio" name='answer' value={test.a2[x]}/><label>{test.a2[x]}</label>
                        <input type="radio" name='answer' value={test.a3[x]}/><label>{test.a3[x]}</label>
                        <input type="radio" name='answer' value={test.a4[x]}/><label>{test.a4[x]}</label>
                    </div>
                    <button onClick={handleRadioSelection} id='butt' >{test.but[x]}</button>
                </div>
            </div>
            <div className='mark'>
                <p>{test.Title}</p>
                <p>Mark : {mark}</p>
                <button onClick={handleWriteJson}>Go Back</button>
            </div>
        </div>
    
    )
}

export default Temp