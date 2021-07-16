import { React, useState, useEffect } from 'react'
import './Section1.css'

import header from '../../images/header.jpg';

export default function Section1(props) {

  useEffect(()=>{

    window.addEventListener('scroll', scrollAnimate);

    function scrollAnimate(){
        let image = document.getElementById('header-image');
        let heading = document.getElementById('header-heading');
        let button = document.getElementById('header-button');

        if (window.pageYOffset > 0){
          image.style.backgroundPositionX='left';
          image.style.width='calc(100% - 140px';
          heading.style.left='-100px';
          button.style.left='50%'
        } else {
          image.style.backgroundPositionX='center';
          image.style.width='100%';
          heading.style.left='100px';
          button.style.left='80%'
        }
      }
    
return ()=>window.removeEventListener('scroll',scrollAnimate);
})

  return (
    <section id='section1-container' className="section1-container">
        <div className='header-image-container'>
        <img id='header-image' className='header-image' alt='' key='header'/>
        </div>
        <h1 id = 'header-heading' className='header-heading'>WORK</h1>
        <button id='header-button' className='header-button'>VIEW CASE</button>
    </section>

  )
}