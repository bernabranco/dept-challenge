import { React , useEffect, useState} from 'react'
import './Filter.css'

export default function Filter(props) {


    return (

        <section id='filter-container' className="filter-container">
            <p className='filter-text1'>Show me</p>
            <p className='filter-text2'>all work</p>
            <svg width="9" height="7" xmlns="http://www.w3.org/2000/svg"><path fill="#black" d="M0 0l4.505 7L9 0z" fill-rule="evenodd"/></svg>
            <p className='filter-text3'>in</p>
            <p className='filter-text4'>all industries</p>
            <svg width="9" height="7" xmlns="http://www.w3.org/2000/svg"><path fill="black" d="M0 0l4.505 7L9 0z" fill-rule="evenodd"/></svg>
        </section>

    )
}
