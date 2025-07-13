

import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/home';
import ContactUs from './components/Contactus';
import Services from './components/services';
import Aboutus from './components/aboutus';
function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Aboutus />
      <Services />
      <ContactUs />
    </>
  );
}

export default App;

