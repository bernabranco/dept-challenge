
import './App.css';
import React, {useState} from "react";
import Navbar from './components/Nav/Nav.js';
import Section1 from './components/Section1/Section1.js';
import Footer from './components/Footer/Footer.js'
import Filter from './components/Filter/Filter.js'
import Gallery1 from './components/Gallery1/Gallery1.js'
import Gallery2 from './components/Gallery2/Gallery2.js'
import Gallery3 from './components/Gallery3/Gallery3.js'
import Gallery4 from './components/Gallery4/Gallery4.js'
import Gallery5 from './components/Gallery5/Gallery5.js'
import Gallery6 from './components/Gallery6/Gallery6.js'
import Clients from './components/Clients/Clients.js'
import ContactForm from './components/ContactForm/ContactForm.js'



function App() {

  return (
    <div className="App">
     <Navbar/>
     <Section1/>
     <Filter/>
     <Gallery1/>
     <Gallery4/>
     <Gallery5/>
     <Gallery6/>
     <Gallery2/>
     <Gallery3/>
     <Clients/>
     <ContactForm/>
     <Footer/>
    </div>
  );
}

export default App;
