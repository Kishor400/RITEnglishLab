import { Link } from 'react-router-dom';
import './App.css';
import VideoImg from "./assets/VideoImg.jpg";

import formData from "./assets/FormTest.json";

function FormTest() {
    

    

  return (
    
    <>
      <div>
          <p>Assessment On Google Form</p>
          <div>
              <p>Latest</p>
              <div>
                <a href={FormTest.Test1.Link}>{FormTest.Test1.Title}</a>
                <a href={FormTest.Test2.Link}>{FormTest.Test2.Title}</a>
                <a href={FormTest.Test1.Link}>{FormTest.Test1.Title}</a>
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