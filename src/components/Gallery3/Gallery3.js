import React from 'react'
import './Gallery3.css'

import image1 from '../../images/liberty-global.png';
import image2 from '../../images/arla.png';
import icon from "../../icons/icon-dropdown.svg"


export default function Gallery3() {

    const card = [
        {src:image1, company:'LIBERTY GLOBAL', text: 'Delivering complex commerce solutions', action:'VIEW CASE'},
        {src:image2, company:'ARLA', text: 'Swipe to find your next holiday destination', action:'VIEW CASE'},
    ];

    const cardShow = card.map(card=>{
        return (
        <div className="g3-wrapper">
            <li className="g3-li">
               <img className="g3-img" src = {card.src} alt='card'></img>
               <p  className="g3-company">{card.company}</p>
               <p  className="g3-text">{card.text}</p>
               <div className='g3-action-container'>
               <svg className='g3-icon' width="9" height="7" xmlns="http://www.w3.org/2000/svg">
                   <path fill="blue" d="M0 0l4.505 7L9 0z" fill-rule="evenodd"/>
               </svg>
                    <p className='g3-action'>VIEW CASE</p>
               </div>
            </li>
        </div>
        )
    });

    return (
        <section className='g3-container'>
            <div className='g3-text-container'>
                <p className='g3-quote'>"Dept helped us tell our story through a bold new identity and a robust online experience. To the tune of 60% growth in online bookings in just one month."</p>
                <p className='g3-author'>MATTIJS TEN BRINK - CEO, TRANSAVIA</p>
            </div>
            <ul className="g3-ul">{cardShow}</ul>
        </section>
    )
}
