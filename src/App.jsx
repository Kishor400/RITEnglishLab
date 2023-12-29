import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Home from './Home.jsx';
import Video from "./Video.jsx";
import Error from "./Error404.jsx";
import LoginPage from "./LoginPage.jsx";
import FormTest from "./FormTest.jsx";
import WebTest from "./WebTest.jsx";
import Not from "./notallowed.jsx";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="video" element={<Video />} />
            <Route path="test" element={<LoginPage />} />
            <Route path="form-test" element={<FormTest />} />
            <Route path="web-test" element={<WebTest />} />
            <Route path="*" element={<Error />} />
            <Route path="NotAllowed" element={<Not />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
