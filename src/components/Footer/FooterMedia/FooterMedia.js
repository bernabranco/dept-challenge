import { React, useState, useEffect } from 'react';
import './FooterMedia.css';
import facebook from '../../../icons/icon-fb.svg';
import twitter from '../../../icons/icon-twitter.svg';
import instagram from '../../../icons/icon-instagram.svg';

export default function MediaList(props) {

  const social = [
    { src: facebook, href:'https://www.facebook.com/DeptAgency/' },
    { src: twitter, href:'https://twitter.com/deptagency'},
    { src: instagram, href:'https://www.instagram.com/deptagency/' },
  ]

  const mediaList = social.map(social => {
    return (
      <div className='footer-social-item'>
        <a href={social.href} target='blanck'>
        <img className='footer-social-icon' src={social.src} alt='social icon' key='social icon'/>
        </a>
      </div>
    )
  });

  return (
    <div className='footer-social-container'>
      {mediaList}
    </div>
  )
}