import React from 'react'
import './Gallery1.css'

import image1 from '../../images/bolcom.png';
import image2 from '../../images/kempen.png';
import image3 from "../../images/philips.png";
import image4 from "../../images/gemeentemuseum.png";


export default function Gallery1() {

    const card = [
        {src:image1, company:'BOLCOM', text: 'A summer island in the Netherlands', action:'VIEW CASE'},
        {src:image2, company:'KEMPEN', text: 'Not some average banking website', action:'VIEW CASE'},
        {src:image3, company:'PHILIPS', text: 'Beautiful design meets innovative technology', action:'VIEW CASE'},
        {src:image4, company:'GEMEENTEMUSEUM', text: 'A 100 years of Mondriaan & De Stijl', action:'VIEW CASE'},       
    ];

    const cardShow = card.map(card=>{
        return (
        <div className="g1-wrapper">
            <li className="g1-li">
               <img className="g1-img" src = {card.src} alt='card'></img>
               <p  className="g1-company">{card.company}</p>
               <p  className="g1-text">{card.text}</p>
               <div className='g1-action-container'>
               <svg className='g1-icon' width="9" height="7" xmlns="http://www.w3.org/2000/svg">
                   <path fill="blue" d="M0 0l4.505 7L9 0z" fill-rule="evenodd"/>
               </svg>
                    <p className='g1-action'>VIEW CASE</p>
               </div>
            </li>
        </div>
        )
    });

    return (
        <section className='g1-container'>
            <ul className="g1-ul">{cardShow}</ul>
        </section>
    )
}
