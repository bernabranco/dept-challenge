import { React, useState, useEffect } from 'react';
import './LanguageList.css';
import arrow from '../../../icons/icon-dropdown.svg'

export default function LanguageList(props) {

  const languages = [
    { title: 'GLOBAL' },
    { title: 'NEDERLAND' },
    { title: 'UNITED STATES' },
    { title: 'IRELAND' },
    { title: 'UNITED KINGDOM' },
    { title: 'DEUTSCHLAND' },
    { title: 'SCHWEIZ' },
  ]

  const languageList = languages.map(language => {
    return (
      <div className='language-item'>
        <img className='language-arrow' src={arrow} alt='arrow' key='arrow' />
        <p>{language.title}</p>
      </div>
    )
  });

  return (
    <ul className='language-container'>
      {languageList}
    </ul>
  )

}