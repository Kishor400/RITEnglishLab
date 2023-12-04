import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, useRoutes } from 'react-router-dom';
import { Outlet} from "react-router-dom";


import HomeImg from "./assets/HomeImg.jpg"

function App() {

  return (
    <>
      <div className="contt">
        <div className="studentL">
          <div className="header">
            <p className="college">Ramco Institute Of Technology</p>
            <p className='parag'> English is one such language in the world that satisfies both the above purposes. English has been regarded
          as the first global Lingua Franca.</p>
          </div>
          <div className="stcontent">
            <Link to="/video">Watch Video</Link>
            <Link to="/test">Take Test</Link>
            
          </div>
        </div>
        <div className="studentR">
          <img src={HomeImg}/>
        </div>
      </div>
    </>
  )
}

export default App
