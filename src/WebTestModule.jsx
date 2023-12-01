import './TestStyle.css';
import { useState } from 'react';
import React, { useEffect } from 'react';
import LogImg from "./assets/LogImg.png";
import Test from './Test';




function Temp({test}) {

    const [x, setX] = useState(0);

    const [mark, setmark] = useState(0);


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
            </div>
        </div>
    
    )
}

export default Temp