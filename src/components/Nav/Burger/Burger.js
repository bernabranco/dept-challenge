import { React, useState, useEffect } from 'react';
import './Burger.css';
import icon1 from '../../../icons/icon-menu1.svg';
import icon2 from '../../../icons/icon-menu2.svg';

export default function Burger(props) {

  let [counter, setCounter] = useState(0);
  let [icon, setIcon] = useState(icon1);

  if (counter > 2) {
    setCounter(1);
  }

  const toggleMenu = () => {
    let navContainer = document.getElementById('nav-container');
    let container = document.getElementById('nav-container-open');
    let menutext = document.getElementById('menu-text');
    let logopath = document.getElementById('path-logo');
    let logoicon = document.getElementById('icon-logo');

    if (counter === 1) {
      navContainer.classList.add('nav-container-on');
      navContainer.classList.remove('nav-container');
      container.classList.add('nav-container-open');
      container.classList.remove('nav-container-close');
      menutext.style.opacity='0';
      logopath.style.fill='white';
      setIcon(icon2);
    } else if (counter === 2) {
      navContainer.classList.add('nav-container');
      navContainer.classList.remove('nav-container-on');
      container.classList.add('nav-container-close');
      container.classList.remove('nav-container-open');
      menutext.style.opacity='1';
      logopath.style.fill='black';
      setIcon(icon1);
    }
  }

  useEffect(() => {
    toggleMenu();
  }, [counter]);


  return (
    <div className='hamburger-container'>
      <p id = 'menu-text' className='menu-text' onClick={() => setCounter(counter + 1)}>MENU</p>
      <img alt='icon menu' src={icon} id='burger-cross' className='burger-cross-off' onClick={() => setCounter(counter + 1)}></img>
    </div>
  )
}