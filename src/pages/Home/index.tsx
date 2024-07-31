import React from 'react';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import WhoWeAre from './WhoWeAre';
import ServicesSection from './ServicesSection';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <WhoWeAre />
            <ServicesSection />
            <AboutUs />
        </div>
    );
};

export default Home;