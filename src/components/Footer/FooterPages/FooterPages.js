import { React, useState, useEffect } from 'react';
import './FooterPages.css';

export default function FooterPages(props) {

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
      <div className='footer-page-item'>
        <h1>{page.title}</h1>
      </div>
    )
  });

  return (
    <div className='footer-pages-container'>
      {pageList}
    </div>
  )
}