import React from 'react'
import './Gallery2.css'

import image1 from '../../images/chocomel.png';
import image2 from '../../images/jbl.png';
import image3 from "../../images/zalando.png";
import image4 from "../../images/koninklijke-bibliotheek.png"
import icon from "../../icons/icon-dropdown.svg"


export default function Gallery2() {

    const card = [
        {src:image1, company:'CHOCOMEL', text: 'A campaign for the limited edition letter packs', action:'VIEW CASE'},
        {src:image2, company:'JBL', text: 'Live like a champion with Jerome Boateng', action:'VIEW CASE'},
        {src:image3, company:'ZALANDO', text: 'Innovative SEO and content strategy for Zalando', action:'VIEW CASE'},
        {src:image4, company:'KONNINKLIJKE BIBLIOTHEEK', text: 'The search for the most influential book ever', action:'VIEW CASE'},       
    ];

    const cardShow = card.map(card=>{
        return (
        <div className="g2-wrapper">
            <li className="g2-li">
               <img className="g2-img" src = {card.src} alt='card'></img>
               <p  className="g2-company">{card.company}</p>
               <p  className="g2-text">{card.text}</p>
               <div className='g2-action-container'>
               <svg className='g2-icon' width="9" height="7" xmlns="http://www.w3.org/2000/svg">
                   <path fill="blue" d="M0 0l4.505 7L9 0z" fill-rule="evenodd"/>
               </svg>
                    <p className='g2-action'>VIEW CASE</p>
               </div>
            </li>
        </div>
        )
    });

    return (
        <section className='g2-container'>
            <ul className="g2-ul">{cardShow}</ul>
        </section>
    )
}
