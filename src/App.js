import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import your Navbar component
import Gallery from './components/Gallery';
//import Carouselpage from './components/Carouselpage';
import Events from './components/Events';
import Home from './components/Home';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Initialize AOS
AOS.init();
function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> Add Navbar here to show it on all pages */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


