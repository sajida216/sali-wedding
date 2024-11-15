import React from "react";
import pic2 from './images/img1.JPG'
import pic3 from './images/img2.JPG'
import './gallery.css';
import './event.css';


function Gallery() {
    return (
        <>
         <h1 className='event transition' data-aos="fade-up" style={{'margin-top':'15%'}}>Captured Moments</h1>
         <div data-aos='zoom-in'>
        <div  className="gallery" >
        <div className="singlpic">
        <img src={pic2} alt="pic" style={{ height:'542px', "border-radius":' 10px'}} />
        </div>
        {/* <div className="singlpic">
        <img src={pic1} alt="pic" style={{ height:'542px',"border-radius":' 10px'}} />
        </div> */}
        <div className="singlpic">
        <img src={pic3} alt="pic" style={{ height:'542px',"border-radius":' 10px'}} />
        </div>
        </div>
        </div>
        </>
    );
}

export default Gallery;
