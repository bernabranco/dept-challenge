import React from 'react'
import './Gallery5.css'

import image1 from '../../images/lightning.png';
import image2 from '../../images/tui.png';


export default function Gallery5() {

    const card = [
        {src:image1, company:'BE LIGHTING', text: 'Delivering clarity on a global scale', action:'VIEW CASE'},
        {src:image2, company:'TUI', text: 'Swipe to find your next holiday destination', action:'VIEW CASE'},     
    ];

    const cardShow = card.map(card=>{
        return (
        <div className="g5-wrapper">
            <li className="g5-li">
               <img className="g5-img" src = {card.src} alt='card'></img>
               <p  className="g5-company">{card.company}</p>
               <p  className="g5-text">{card.text}</p>
               <div className='g5-action-container'>
               <svg className='g5-icon' width="9" height="7" xmlns="http://www.w3.org/2000/svg">
                   <path fill="blue" d="M0 0l4.505 7L9 0z" fill-rule="evenodd"/>
               </svg>
                    <p className='g5-action'>VIEW CASE</p>
               </div>
            </li>
        </div>
        )
    });

    return (
        <section className='g5-container'>
            <ul className="g5-ul">{cardShow}</ul>
        </section>
    )
}
