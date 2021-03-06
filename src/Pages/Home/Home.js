import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../Navbar/Navigation';
import About from '../About/About';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';


const Home = () => {
    return (
        <div id="home">
          
            <Banner></Banner>
           
            <Project></Project>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;