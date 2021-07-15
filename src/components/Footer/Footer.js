import { React, useState, useEffect } from 'react';
import './Footer.css';
import Logo from './FooterLogo/FooterLogo';
import Pages from './FooterPages/FooterPages';
import Media from './FooterMedia/FooterMedia';
import arrow from '../../icons/icon-scroll-to-top.svg'


export default function Footer(props) {

    function goTop(){
        window.scroll({top:0,behavior: 'smooth'});
    }


    return (
        <section id='footer-container' className="footer-container">
           <div className='footer-body'>
            <div className='footer-top'>
                <Logo/>
                <Pages/>
                <Media/>
            </div>
            <div className='footer-bottom'>
                <div Style='width:25%;'></div>
                <div className='footer-text1'>
                    <p className='footer-text'>Chamber of Commerce: 63464101</p>
                    <p className='footer-text'>VAT: NL 8552.47.502.B01</p>
                    <p className='footer-text'>Terms and Conditions</p>
                </div>
                <div className='footer-text2'>
                    <p className='footer-text'>@2018 Dept Agency</p>
                </div>
            </div>
            </div>
            <div className='footer-arrow' onClick={()=>goTop()}>
                <svg width="15" height="32" xmlns="http://www.w3.org/2000/svg">
                <g fill-rule="evenodd">
                <path fill ="#FFFFFF" d="M6.5 9.5h3v22h-3z"/>
                <path fill="#FFFFFF" d="M14.5 11.5L7.493.5.5 11.5z"/>
                </g>
                </svg>
            </div>

        </section>
    )

}