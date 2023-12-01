import { Link } from 'react-router-dom';
import './App.css';
import FormData from "/FormTestData.txt";
import VideoImg from "./assets/VideoImg.jpg";

import React, { useState, useEffect } from 'react';


function FormTest() {
    
  const [textData, setTextData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(FormData);
        const data = await response.text();
        setTextData(data);
        
      } catch (error) {
        console.error('Error fetching text file:', error);
      }
    };

    fetchData();
  }, []);

    

  return (
    
    <>
      <div>
          <p>Assessment On Google Form</p>
          <div>
              <p>Latest</p>
              <div>
                <Link to={textData.split("$")[1]}>{textData.split("$")[0]}</Link>
                <Link to={textData.split("$")[3]}>{textData.split("$")[2]}</Link>
                <Link to={textData.split("$")[5]}>{textData.split("$")[4]}</Link>
              </div>
              <button>More</button>
          </div>
      </div>
      <div>
        <div>
          
        </div>
      </div>
    </>
  )
}

export default FormTest