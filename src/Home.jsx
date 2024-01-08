import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'
import { Link, useRoutes } from 'react-router-dom';
import { Outlet} from "react-router-dom";


import LandingImg from "./assets/Landing.png"

function App() {

  // Select The Elements
  var toggle_btn;
  var big_wrapper;
  var hamburger_menu;

  function declare() {
    toggle_btn = document.querySelector(".toggle-btn");
    big_wrapper = document.querySelector(".big-wrapper");
    hamburger_menu = document.querySelector(".hamburger-menu");
  }

  const main = document.querySelector("main");

  declare();

  let dark = false;

  function toggleAnimation() {
    // Clone the wrapper
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    if (dark) {
      clone.classList.remove("light");
      clone.classList.add("dark");
    } else {
      clone.classList.remove("dark");
      clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);

    document.body.classList.add("stop-scrolling");

    clone.addEventListener("animationend", () => {
      document.body.classList.remove("stop-scrolling");
      big_wrapper.remove();
      clone.classList.remove("copy");
      // Reset Variables
      declare();
      events();
    });

  }


  return (
    <>
      {/* <div className="contt">
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
      </div> */}

      <div className='landing'>
        <div className='Header'>
          <div className='ro'>
            <p>ENGLISH</p>
          </div>
          <div className='lo'>
            <a>Home</a>
            <a>Learn</a>
            <a>Practice</a>
            <a>Info</a>
          </div>
        </div>

        <div className='Body'>
          <div className='LL'>
            <p className='Head'>Language Isn't Barrier In Communication</p>
            <p className='Para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, molestias magni nostrum exercitationem quia accusantium minus libero voluptate iure</p>
            <div className='buttons'>
              <Link to="/video" className='but'>Learn</Link>
              <Link to="/test" className='but'>Practice</Link>
            </div>
          </div>
          <div className='RR'>
            <img src={LandingImg}/>
          </div>
        </div>
        <div className='Foot'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, deserunt.</p>
        </div>

      </div>
    </>
  )
}

export default App
