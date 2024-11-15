import React from 'react';
import Carouselpage from './Carouselpage'; // Make sure this path is correct
import Events from './Events'; // Make sure this path is correct
import Gallery from './Gallery'; // Make sure this path is correct
import './pagerespons.css'; // Ensure this file exists
import './cards-container.css'; // Ensure this file exists

import Card from './Card';

function Home() {
    return (
        <div>
            <div >
                <Carouselpage />
            </div>
           <div className='bgimg'>
           {/* <img src={bg1} alt="pic"/> */}
            <Events />
            <Card/>
            <Gallery  />
            </div>
            <div className='footer'>
            <p>We Are Expecting You</p>
            </div>
            </div>
      
    );
}

export default Home;
