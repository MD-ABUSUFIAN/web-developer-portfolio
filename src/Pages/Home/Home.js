import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../Navbar/Navigation';
import About from '../About/About';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;