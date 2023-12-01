import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Home from './Home.jsx';
import Video from "./Video.jsx";
import Error from "./Error404.jsx";
import Test from "./Test.jsx";
import FormTest from "./FormTest.jsx";
import WebTest from "./WebTest.jsx";
import WebTestcon from "./WebTestConductor.jsx";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="video" element={<Video />} />
            <Route path="test" element={<Test />} />
            <Route path="form-test" element={<FormTest />} />
            <Route path="web-test" element={<WebTest />} />
            <Route path="web-test-con" element={<WebTestcon />} />
            <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
