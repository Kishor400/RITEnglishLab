import './TestStyle.css';
import Temp from "./WebTestModule.jsx";
import data from "./assets/data.json";
import LogImg from "./assets/LogImg.png";
import { Link } from 'react-router-dom';


function WebTest() {
    
     
    return (
    <>
        <div>
            <p>Assessment On Web</p>
            <div>
                <p>Latest</p>
                <div>
                    <div>
                      <button>{data.Test1.Title}</button>
                    </div>
                    <div>
                      <button>{data.Test2.Title}</button>
                    </div>
                    <div>
                      <button>{data.Test2.Title}</button>
                    </div>
                </div>

                <button>More</button>
            </div>
        </div>
        <div>
          <Temp test={data.Test1}/>
        </div>
        
    </>
  )
}

export default WebTest