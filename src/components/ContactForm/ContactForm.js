import { React, useState, useEffect } from 'react'
import './ContactForm.css'

export default function ContactForm(props) {


    return (

        <section id='contact-form-container' className="contact-form-container">

            <div className='contact-form-header'>
                <h1 className='contact-form-heading'>QUESTION? WE ARE HERE TO HELP!</h1>
            </div>

            <div className='contact-form-wrapper'>
                <form className='main-form'>
                    <div className='form-element'>
                        <span className="form-text">NAME</span>
                        <input className='form-input'
                            type="text"
                            placeholder=""
                            required
                        />
                    </div>

                    <div className='form-element'>
                        <span className="form-text">EMAIL</span>
                        <input className='form-input'
                            type="text"
                            placeholder=""
                            required
                        />
                    </div>

                    <div className='form-element'>
                        <span className="form-text">MESSAGE</span>
                        <input className='form-input'
                            type="text"
                            placeholder=""
                            required
                        />
                    </div>
                
                <div className='form-button-container'>
                <button className='form-button'>SEND</button>
                </div>
                </form>
            </div>
            

        </section>

    )
}
