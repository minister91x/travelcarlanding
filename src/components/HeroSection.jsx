import React from 'react';
import './HeroSection.css'; // Assuming you will create a CSS file for specific styles

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Book Your Ride Today!</h1>
                <p>Experience the best travel car booking and shared rides at your convenience.</p>
                <button className="cta-button">Get Started</button>
            </div>
        </div>
    );
};

export default HeroSection;