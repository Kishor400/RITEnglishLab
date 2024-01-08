import './TestStyle.css';
import FormTest from "./FormTest.jsx";
import WebTest from "./WebTest.jsx";
import React, { useState } from 'react';
import LogImg from "./assets/LogImg.png";




function Test(info) {

    let io=JSON.stringify(info);
    let ios=io.split('"')[3].split("$")

    console.log(ios);
    

    function opnForm(){
        document.querySelector('.FormT').style="display:flex;";
        document.querySelector('.TestHome').style="display:none;";
      }
      function opnWeb(){
        document.querySelector('.WebT').style="display:flex;";
        document.querySelector('.TestHome').style="display:none;";
      }
    
     
    return (
    <>
    <p className='namer'>{ios[1]}</p>
        <div className='TestHome'>
        <div class="container">
         <div class="card__container">
            <article class="card__article">
               <img src="assets/img/landscape-1.png" alt="image" class="card__img">

               <div class="card__data">
                  <span class="card__description">Vancouver Mountains, Canada</span>
                  <h2 class="card__title">The Great Path</h2>
                  <a href="#" class="card__button">Read More</a>
               </div>
            </article>

            <article class="card__article">
               <img src="assets/img/landscape-2.png" alt="image" class="card__img">

               <div class="card__data">
                  <span class="card__description">Poon Hill, Nepal</span>
                  <h2 class="card__title">Starry Night</h2>
                  <a href="#" class="card__button">Read More</a>
               </div>
            </article>

            <article class="card__article">
               <img src="assets/img/landscape-3.png" alt="image" class="card__img">

               <div class="card__data">
                  <span class="card__description">Bojcin Forest, Serbia</span>
                  <h2 class="card__title">Path Of Peace</h2>
                  <a href="#" class="card__button">Read More</a>
               </div>
            </article>
         </div>
      </div>
        </div>
        <div className='FormT'>
          <FormTest/>
      </div>
      <div className='WebT'>
          <WebTest logInfo={ios}/>
      </div>
        
    </>
  )
}

export default Test