import './TestStyle.css';
import FormTest from "./FormTest.jsx";

import LogImg from "./assets/LogImg.png";



function Test() {
     function opnForm(){
        window.location.href = '/form-test';
     }
     function opnWeb(){
        window.location.href = '/web-test';
     }
    return (
    <>
        <div className='Login'>
            <div className="main">
                <div className="mainL">
                    <div>
                        <p className="ram">Ramco Institute Of Technology</p>
                        <p className="depe">Department Of English</p>
                    </div>
                    <img src={LogImg}/>

                </div>
                <div className="mainR">
                    <div className="login">
                        <p>Log In</p>
                        <form id="logform">

                            <input type="number" placeholder="Reg Number" id="logreg"/>
                            <input type="password" placeholder="Password" id="logpwd"/>
                            <p>Don't have An Account ? Please <a className="txtdeco">Signin</a></p>
                            <button type="submit">Submit</button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
        <div className='TestHome'>
            <p>Take Performance Test</p>
            <div className='butCont'>
                <button onClick={opnForm} className='testBut'>Google Form Test</button>
                <button onClick={opnWeb} className='testBut'>Web Test</button>
            </div>
            
        </div>
        <div>
            <FormTest/>
        </div>
        
    </>
  )
}

export default Test