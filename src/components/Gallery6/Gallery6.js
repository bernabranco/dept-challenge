import React from 'react'
import './Gallery6.css'

import image1 from '../../images/header.jpg';


export default function Gallery4() {

    const card = [
        {src:image1, company:'FLORENSIS', text: 'Rethinking the entire online ecosystem', action:'VIEW CASE'},
        {src:'', company:'BUTLINS', text: "Enhancing customer experience for personalized holiday planning using real time data", action:'VIEW CASE'},
        {src:'', company:"VACANSESELECT", text: "Predicting booking behaviour for holidays with smart data, voice search and machine learning ", action:'VIEW CASE'},      
    ];

    return (
        <section className='g4-container'>
            <ul className="g4-ul">
            <div className="g4-wrapper">
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
            <div className="g4-wrapper">
            <li className="g4-li">
               <img className="g4-img" src = {image1} alt=''></img>
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
        </ul>
        </section>
    )
}
