import './testmod.css';
import { useState } from 'react';
import React, { useEffect } from 'react';
import LogImg from "./assets/LogImg.png";
import Test from './Test';
import datas from "./assets/markData.json";
import QDatas from "./assets/QData.json";




function Temp({TId,logInfo}) {

    //console.log(data.Test1);
    console.log(logInfo);
    console.log(TId)
    const prevData=datas;
    console.log(prevData);
    let sampleArray=["hi","op"]
    

    const [mark, setmark] = useState(0);

    const[QData,setqdata]=useState(QDatas);
    let opt=QData.options[TId];
    const [y, sety] = useState(QData.question[TId].length-1);
    // SERVER SIDE

    //const [jsonData, setJsonData] = useState({ mark: mark });
        
        const handleWriteJson = async () => {
            try {
                prevData.push([logInfo[0],TId,mark]);
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


    // useEffect(() => {
    //     handleRadioSelection();
    //   }, []);
    //   const handleRadioSelection = () => {
    //     const radioInput = document.querySelector('input[type="radio"][className="rad"]:checked');
    //     const butt = document.querySelector('#butt').innerHTML;

    //     if(radioInput){
    //         console.log(radioInput.value)
    //         if(radioInput.value==QData.answer[x]){
    //             setmark(mark+1);
    //         }
    //     }else{
    //         console.log("po")
    //     }

    //     if(x>0){
    //         if (radioInput) {
    //             setX(x+1);
    //             console.log("crt");
    //         }
    //     }else if(x==0){
    //         document.querySelector('#butt').disabled=true;
    //         document.querySelector(".mark").style="display:flex";
    //         document.querySelector(".test-cont").style="display:none";
    //     }
    //   };


    const opts = QData.options[TId]
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        e.target.style="color:red;";
        setSelectedOption(e.target.value);
    };

    function optionVerfi(){
        if(selectedOption!=""){
            console.log(selectedOption)
            console.log(QData.answer[TId][y])
            if(selectedOption==QData.answer[TId][y]){
                setmark(mark+1);
            }
        }
        const butt = document.querySelector('#butt').innerHTML;
        if(y!=0){
            if (selectedOption!="") {
                sety(y-1);
                console.log("crt");
            }}
        if(y==0){
            document.querySelector('#butt').disabled=true;
            document.querySelector(".mark").style="display:flex";
            document.querySelector(".test-cont").style="display:none";
        }
    }

    return (
 
        <div>
            <div className='body'>
                <div className='test-cont'>
                    <p>{QData.title[TId]}</p>
                    <div className='qa'>
                        <p className='q'>{QData.question[TId][y]}</p>
                        <div className='a'>
                            
                            {/* <label className='opt opt1' onClick={()=>chgbg(1)}><input type="radio" name='answer' className='rad' value={QData.options[TId][x][0]}/>{QData.options[TId][x][0]}</label>
                            <label className='opt opt2' onClick={()=>chgbg(2)}><input type="radio" name='answer' className='rad' value={QData.options[TId][x][0]}/>{QData.options[TId][x][0]}</label>
                            <label className='opt opt3' onClick={()=>chgbg(3)}><input type="radio" name='answer' className='rad' value={QData.options[TId][x][0]}/>{QData.options[TId][x][0]}</label>
                            <label className='opt opt4' onClick={()=>chgbg(4)}><input type="radio" name='answer' className='rad' value={QData.options[TId][x][0]}/>{QData.options[TId][x][0]}</label> */}

                            
                            {opts[y].map((option) => (
                                    <label key={option} className='opt'>
                                    <input
                                        type="radio"
                                        value={option}
                                        checked={selectedOption === option}
                                        onChange={handleOptionChange}
                                        className='rad'
                                    />
                                    <span style={{ color: selectedOption === option ? 'blue' : 'black' }}>
                                        {option}
                                    </span>

                                    </label>
                                ))}
                            
                        </div>

                        
                        <button onClick={optionVerfi} id='butt' >Next</button>
                    </div>
                </div>
            </div>
            <div className='mark'>
                <p>{QData.title[TId]}</p>
                <p>Mark : {mark}</p>
                <button onClick={handleWriteJson}>Go Back</button>
            </div>
        </div>
    
    )
}

export default Temp