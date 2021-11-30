import Button from '@restart/ui/esm/Button';
import React from 'react';
import ReactTyped from 'react-typed';
import './Banner.css'



const Banner = () => {
    return (
        <div className="banner-wraper" >
            <div className="main-info ">

            <ReactTyped className=" h1 fs-1 text-white fw-bolder  "
                    strings={[" Hi, I'm Abu-Sufian I Build Full-Stack Web Development"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
         
           <ReactTyped className=" fs-2 text-warning fw-bolder"
                    strings={["Web Design","Web Development","Graphic Design"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
               <a href="#contact" className="btn-main-offer">Contact Me</a>
               <a href="https://drive.google.com/file/d/1h5pfiszot8kqRDBPYqIVOc6G_9Ec4Yr5/view?usp=sharing" className="btn-main-offer" target="_blank">Download Resume</a>


            </div>
            
        </div>
    );
};

export default Banner;