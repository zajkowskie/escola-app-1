import React from 'react';
import './App.scss';
import Home from './home/Home';
import Services from './services/Services';
import AboutUs from './aboutus/AboutUs';
import Customers from './customers/Customers';
import Contact from './contact/Contact';
import Footer from './Footer';
import './fonts/Yrsa/Yrsa-Regular.ttf';
import './fonts/Roboto/Roboto-Regular.ttf';

function App() {
  return (
    <main className="App">
      <Home />
      <Services />
      <AboutUs />
      <Customers />
      <Contact />
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
