import React from 'react';
//import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
//import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './images/bg21.jpg';
//import image2 from './images/ring3.jpg';
//import image3 from './images/ring4.jpg';
// import image3 from './images/ring5.jpg';
import Navbar from './Navbar';
import TimerCountDown from './Timer';
import './nav.css';

function Carouselpage() {
  return (
    <>
    <div style={{ backgroundColor: 'rgba(132, 132, 132, 0.5)'}}
>
      <div>
        <ExampleCarouselImage text="Salih & Rayifa" image={image1} />
        <div className="navbar">
          <Navbar />
        </div>
        <div  className= "caption" >
        <h3>SAVE THE DATE</h3>
        </div>
        <h3 style={{
          color:'black',
          textAlign: 'center',
          position: 'absolute', /* Position the date text absolutely */
          top: '59%', /* Center vertically */
          left: '50%', /* Center horizontally */
          transform: 'translate(-50%, -50%)', /* Center alignment adjustment */
          // fontFamily: '"Work Sans", Arial, sans-serif',
          // fontFamily: 'Great Vibes, cursive MozAnimation',
          fontFamily: 'Engagement',
           fontSize:'2rem',
           color: '#4c4243',
        }}>29 December 2024</h3>
      </div>

      {/* <Carousel.Item interval={500}>
          
          <ExampleCarouselImage text="Salih & Rayifa" image={image2} />
          <Carousel.Caption>
            <h3 style={{ color: 'black', textAlign: 'center', marginTop: '20px' }}>29.10.2023</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        

          <ExampleCarouselImage text="Salih & Rayifa" image={image3} />
          <Carousel.Caption>
            <h3 style={{ color: 'black', textAlign: 'center', marginTop: '20px' }}>29.10.2023</h3>
            
          </Carousel.Caption>
        </Carousel.Item> */}
      <div  className= "timer">
        <TimerCountDown />
      </div>
     </div>
    </>
  );
}

export default Carouselpage;
