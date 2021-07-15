import React from 'react'
import './Clients.css'

import logo1 from '../../logos/Nivea_logo_zwart.jpg';
import logo2 from '../../logos/Mona_logo_zwart.jpg';
import logo3 from '../../logos/Transavia_logo_zwart.jpg';
import logo4 from '../../logos/Zalando_logo_zwart.jpg';
import logo5 from '../../logos/Tomtom_logo_zwart.jpg';
import logo6 from '../../logos/Unilever_logo_zwart.jpg';
import logo7 from '../../logos/Adidas_logo_zwart.jpg';
import logo8 from '../../logos/Pathe_logo_zwart.jpg';
import logo9 from '../../logos/ABN_logo_zwart.jpg';
import logo10 from '../../logos/Triumph_logo_zwart.jpg';
import logo11 from '../../logos/Microsoft_logo_zwart.jpg';
import logo12 from '../../logos/Oxxio_logo_zwart.jpg';
import logo13 from '../../logos/NN_logo_zwart.jpg';
import logo14 from '../../logos/Ziggo_logo_zwart.jpg';
import logo15 from '../../logos/Walibi_logo_zwart.jpg';
import logo16 from '../../logos/KLM_logo_zwart.jpg';


export default function Gallery1() {

    const card = [
        {src:logo1, alt:'logo1', key:logo1},
        {src:logo2, alt:'logo2', key:logo2},
        {src:logo3, alt:'logo3', key:logo3},
        {src:logo4, alt:'logo4', key:logo4}, 
        {src:logo5, alt:'logo5', key:logo5},
        {src:logo6, alt:'logo6', key:logo6},
        {src:logo7, alt:'logo7', key:logo7},
        {src:logo8, alt:'logo8', key:logo8},   
        {src:logo9, alt:'logo9', key:logo9},
        {src:logo10, alt:'logo10', key:logo10},
        {src:logo11, alt:'logo11', key:logo11},
        {src:logo12, alt:'logo12', key:logo12},     
        {src:logo13, alt:'logo13', key:logo13},
        {src:logo14, alt:'logo14', key:logo14},
        {src:logo15, alt:'logo15', key:logo15},
        {src:logo16, alt:'logo16', key:logo16},      
    ];

    const cardShow = card.map(card=>{
        return (
        <div className="clients-wrapper">
            <li className="clients-li">
               <img className="clients-img" src = {card.src} alt='card'></img>
            </li>
        </div>
        )
    });

    return (
        <section className='clients-container'>
            <h1 className='clients-heading'>CLIENTS</h1>
            <p className='clients-text'>We value a great working with our clients above all else. It's why they often come to our parties to. It's also why we're able to chanllenge and inspire them to reach the stars.</p>
            <ul className='clients-ul'>{cardShow}</ul>
        </section>
    )
}
