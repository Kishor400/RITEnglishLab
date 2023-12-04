import './TestStyle.css';
import FormTest from "./FormTest.jsx";

import LogImg from "./assets/LogImg.png";
import LoginPage from './LoginPage.jsx';



function Test() {
     
    return (
    <>
        <div className='Login'>
            <LoginPage/>
        </div>
        <div className='TestHome'>
            <p>Take Performance Test</p>
            <div className='butCont'>
                <button  className='testBut'>Google Form Test</button>
                <button  className='testBut'>Web Test</button>
            </div>
            
        </div>
        <div className='Form'>
            <FormTest/>
        </div>
        
    </>
  )
}

export default Test