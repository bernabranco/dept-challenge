import {React, useEffect, useState} from 'react'
import './Section7.css'

import image1 from '../../images/liberty-global.png';
import image2 from '../../images/arla.png';

export default function Section7() {

    useEffect(()=>{

        window.addEventListener('scroll', scrollAnimate);
    
        function scrollAnimate(){
            let container = document.getElementById('g3-container');
            let rect = container.getBoundingClientRect();
            
            if (rect.y > 1000){
                container.style.top='500px';
            } else {
                container.style.top='0px';
            }
          }
        
    return ()=>window.removeEventListener('scroll',scrollAnimate);
    })

    const card = [
        {src:image1, company:'LIBERTY GLOBAL', text: 'Delivering complex commerce solutions', action:'VIEW CASE'},
        {src:image2, company:'ARLA', text: 'Swipe to find your next holiday destination', action:'VIEW CASE'},
    ];

    const cardShow = card.map(card=>{
        return (
        <div className="g3-wrapper">
            <li className="g3-li">
               <div className='g3-image-container'>
               <img className="g3-img" src = {card.src} alt='card' key='g3-image'></img>
               </div>
               <div className='g3-text-container'>
               <p  className="g3-company">{card.company}</p>
               <p  className="g3-text">{card.text}</p>
               <div className='g3-action-container'>
               <svg className='g3-icon' width="9" height="7" xmlns="http://www.w3.org/2000/svg">
                   <path fill="blue" d="M0 0l4.505 7L9 0z" fill-rule="evenodd"/>
               </svg>
                    <p className='g3-action'>VIEW CASE</p>
               </div>
               </div>
            </li>
        </div>
        )
    });

    return (
        <section id='g3-container' className='g3-container'>
            <div className='g3-quote-container'>
                <p className='g3-quote'>"Dept helped us tell our story through a bold new identity and a robust online experience. To the tune of 60% growth in online bookings in just one month."</p>
                <p className='g3-author'>MATTIJS TEN BRINK - CEO, TRANSAVIA</p>
            </div>
            <ul className="g3-ul">{cardShow}</ul>
        </section>
    )
}
