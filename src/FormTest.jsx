import { Link } from 'react-router-dom';
import './App.css';
import VideoImg from "./assets/VideoImg.jpg";

import formData from "./assets/formTest.json";

function FormTest() {
    

    

  return (
    
    <>
      <div className='FormTest'>
          <p>Assessment On Google Form</p>
          <div>
              <p>Latest</p>
              <div>
                <p>OP1</p>
                <p>OP2</p>
                <p>OP3</p>
              </div>
              <a>More</a>
          </div>
      </div>
      
    </>
  )
}

export default FormTest