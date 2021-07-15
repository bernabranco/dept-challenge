import { React, useState, useEffect } from 'react'
import './Section1.css'

import header from '../../images/header.jpg';

export default function Section1(props) {


  return (

    <section id='section1-container' className="section1-container">
        <img className='header-image' alt='' key='header'/>
        <h1 className='header-heading'>WORK</h1>
        <button className='header-button'>VIEW CASE</button>
    </section>

  )
}