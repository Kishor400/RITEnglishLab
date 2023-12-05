import './TestStyle.css';
import FormTest from "./FormTest.jsx";
import WebTest from "./WebTest.jsx";

import LogImg from "./assets/LogImg.png";
import LoginPage from './LoginPage.jsx';



function Test() {
     
    return (
    <>
        <div className='Login'>
            <LoginPage/>
        </div>
        <div className='TestHome'>
            <div>
                <img src={LogImg} className='testImger'/>
            </div>
            <div className='TestR'>
                <p className='TestT'>Take Performance Test</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquid facilis praesentium! Optio cum iusto esse voluptatum porro aliquam, et mollitia fuga, exercitationem quibusdam cumque tempora! Dicta dolorum.</p>
                <div className='butCont'>
                    <button  className='testBut'>Google Form Test</button>
                    <button  className='testBut'>Web Test</button>
                </div>
            </div>
            
        </div>
        <div className='FormT'>
            <FormTest/>
        </div>
        <div className='WebT'>
            <WebTest/>
        </div>
        
    </>
  )
}

export default Test