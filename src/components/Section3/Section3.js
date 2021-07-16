import {React,useEffect,useState} from 'react'
import './Section3.css'

import image1 from '../../images/header.jpg';


export default function Section3() {

    useEffect(()=>{

        window.addEventListener('scroll', scrollAnimate);
    
        function scrollAnimate(){
            let container = document.getElementById('g4-container');
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
        {src:image1, company:'FLORENSIS', text: 'Rethinking the entire online ecosystem', action:'VIEW CASE'},
        {src:'', company:'MICROSOFT', text: "Topping into Ireland's unique gaming culture and bringing a fresh flavour to their Xbox social media channels", action:'VIEW CASE'},
        {src:'', company:"0'NEILL", text: "Integrating existing content into O'Neill's new e-commerce platform", action:'VIEW CASE'},      
    ];

    return (
        <section id='g4-container' className='g4-container'>
            <ul className="g4-ul">
            <div className="g4-wrapper">
            <li className="g4-li">
               <img className="g4-img" src = {image1} alt='' key='g4-img'></img>
               <p  className="g4-company">{card[0].company}</p>
               <p  className="g4-text">{card[0].text}</p>
               <div className='g4-action-container'>
               <svg className='g4-icon' width="9" height="7" xmlns="http://www.w3.org/2000/svg">
                   <path fill="blue" d="M0 0l4.505 7L9 0z" fill-rule="evenodd"/>
               </svg>
                    <p className='g4-action'>VIEW CASE</p>
               </div>
            </li>
            </div>
        <div className="g4-wrapper">
        <div className='g4-li-container'>
            <li className="g4-li-no-image">
               <p  className="g4-company">{card[1].company}</p>
               <p  className="g4-text">{card[1].text}</p>
               <div className='g4-action-container'>
               <svg className='g4-icon' width="9" height="7" xmlns="http://www.w3.org/2000/svg">
                   <path fill="blue" d="M0 0l4.505 7L9 0z" fill-rule="evenodd"/>
               </svg>
                    <p className='g4-action'>VIEW CASE</p>
               </div>
            </li>
            </div>
            <div className='g4-li-container'>
            <li className="g4-li-no-image">
               <p  className="g4-company">{card[2].company}</p>
               <p  className="g4-text">{card[2].text}</p>
               <div className='g4-action-container'>
               <svg className='g4-icon' width="9" height="7" xmlns="http://www.w3.org/2000/svg">
                   <path fill="blue" d="M0 0l4.505 7L9 0z" fill-rule="evenodd"/>
               </svg>
                    <p className='g4-action'>VIEW CASE</p>
               </div>
            </li>
           </div>
        </div>
       
      
        </ul>
        </section>
    )
}
