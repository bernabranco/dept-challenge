import { React, useState, useEffect } from 'react';
import './PageList.css';
import arrow from '../../../icons/icon-dropdown.svg'

export default function PageList(props) {

  const pages = [
    { title: 'WORK' },
    { title: 'SERVICES' },
    { title: 'STORIES' },
    { title: 'ABOUT' },
    { title: 'CAREERS' },
    { title: 'CONTACTS' },
  ];

  const pageList = pages.map(page => {
    return (
      <div className='page-item'>
        <img className='page-arrow' src={arrow} alt='arrow' key='arrow' />
        <h1>{page.title}</h1>
      </div>
    )
  });

  return (
    <div className='pages-container'>
      {pageList}
    </div>
  )
}