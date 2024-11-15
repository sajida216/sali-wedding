import React from 'react';
import './homeresponds.css'; // Ensure this CSS file is imported

function FullscreenImageWithText({ image, text }) {
    return (
        <div className="fullscreen-container" >
            <img src={image} alt={text} className="fullscreen-image carousel-images" />
            <p className="responsive-text">{text}</p>
        </div>
    );
}

export default FullscreenImageWithText;
