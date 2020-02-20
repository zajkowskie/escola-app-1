import React from 'react';
import Slider from './slider/Slider';
import navbarImage from '../img/home__navbar-logo.png';

function Home() {
    return (
        <section className="section section--home" id="home">
            <nav className="navbar">
                <a href="#home" className="navbar__logo"><img src={navbarImage} /></a>
                <a href="#home">Home</a> 
                <a href="#services">Our services</a> 
                <a href="#about-us">About us</a>
                <a href="#customers">Customers</a>
                <a href="#contact">Contact</a>
            </nav>
            <Slider />
        </section>
    );
  }
  
  export default Home;