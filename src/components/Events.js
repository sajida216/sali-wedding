import React from 'react';
import Card1 from './card1';
import Card2 from './Card';
import './event.css';
import './cards-container.css';
import 'aos/dist/aos.css';
function Events() {
   return (
      <>
      <h1 className='event transition' data-aos="fade-up">When & Where</h1>
      <div className="event-container">
         <div className="event-box"  data-aos="fade-right">
            <h2 className="event-title">Ceremony</h2>
            <hr className="divider" />
            <p>Sunday, December 29, 2024</p>
            <p>28 Jumada II, 1446 AH</p>
            <p>Nikah – 11:00 AM</p>
            <p>At Ujampady house</p>

            <a href="#" className="direction-link">
               &#x1F4CD; GET DIRECTION
               <div>
               <iframe
                  title="sali's house"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.6252394139847!2d75.27370487309604!3d12.606932487675909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba493003585ee09%3A0x89c870a882e8b263!2zU2FsaeKAmXMgSG9tZQ!5e0!3m2!1sen!2sin!4v1731047600574!5m2!1sen!2sin"
                  width="200"
                  height="100"
                  style={{ border: '0' }}  // Changed to object format
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
               </div>
            </a>
         </div>
         <div className="event-box" data-aos="fade-left">
            <h2 className="event-title">Reception</h2>
            <hr className="divider" />
            <p>Sunday, December 29, 2024</p>
            <p>After Nikah</p>
          
            <p>At Ujampady house</p>
            <p>Dealmpady</p>
            <a href="#" className="direction-link">
               &#x1F4CD; GET DIRECTION
               <div>
               <iframe
                  title="sali's house"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.6252394139847!2d75.27370487309604!3d12.606932487675909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba493003585ee09%3A0x89c870a882e8b263!2zU2FsaeKAmXMgSG9tZQ!5e0!3m2!1sen!2sin!4v1731047600574!5m2!1sen!2sin"
                  width="200"
                  height="100"
                  style={{ border: '0' }}  // Changed to object format
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
               </div>
            </a>
         </div>
      </div>

</>
   );

}
export default Events;




{/* <h1 className='event transition'>Events</h1>
       <div className='cards-containers'>
       <Card1/>
       <Card2/>
       </div> */}
