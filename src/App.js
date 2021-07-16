
import './App.css';
import React from "react";
import Navbar from './components/Nav/Nav.js';
import Section1 from './components/Section1/Section1.js';
import Footer from './components/Footer/Footer.js'
import Filter from './components/Filter/Filter.js'
import Section2 from './components/Section2/Section2.js'
import Section3 from './components/Section3/Section3.js'
import Section4 from './components/Section4/Section4.js'
import Section5 from './components/Section5/Section5.js'
import Section6 from './components/Section6/Section6.js'
import Section7 from './components/Section7/Section7.js'
import Clients from './components/Clients/Clients.js'
import ContactForm from './components/ContactForm/ContactForm.js'



function App() {

  return (
    <div className="App">
     <Navbar/>
     <Section1/>
     <Filter/>
     <Section2/>
     <Section3/>
     <Section4/>
     <Section5/>
     <Section6/>
     <Section7/>
     <Clients/>
     <ContactForm/>
     <Footer/>
    </div>
  );
}

export default App;
