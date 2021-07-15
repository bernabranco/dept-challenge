import { React, useState, useEffect } from 'react'
import './Nav.css'

import PageList from './PageList/PageList.js'
import MediaList from './MediaList/MediaList.js'
import LanguageList from './LanguageList/LanguageList';
import Logo from './Logo/Logo';
import Burger from './Burger/Burger';

export default function Navbar(props) {


  return (

    <section id='nav-container' className="nav-container">

      <div className='nav-bar'>
      <Logo />
      <Burger />
      </div>

      <div id='nav-container-open' className='nav-container-close'>
      <LanguageList />
      <PageList />
      <MediaList />
      </div>

    </section>

  )
}
