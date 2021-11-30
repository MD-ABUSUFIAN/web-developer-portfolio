import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import myPhoto from '../../Image/my-photo.png';
import  './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';




const About = () => {

    useEffect(()=>{

        AOS.init()

    },[])
  
    return (
        <div id="about" data-aos="zoom-in-down">
            <h1 className=" fs-1 fw-bolder text-center text-white mt-5 bg-black w-25 mx-auto rounded-pill p-3 ">About Me</h1>
            <Container>
                <Row className="mt-2">
                
                <Col  md="6" lg="6" sm="12" xs="12">

                    <div className="mt-50% testimonial-text" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h1 className="text-danger fs-1 fw-bolder mb-4">
                        React Developer
                        
                        </h1>
                        <p >Hello, <br/>
                            I'm Abu Sufian working as Full Stack Developer, Front-End Developer & Back-End Developer and React Developer. In the beginning my starts as a Front-End Developer. I've done many design using Front-End Dev tools.</p>

                       
                        <button className="hireMe-btn "> 
                        <a href="https://drive.google.com/file/d/1h5pfiszot8kqRDBPYqIVOc6G_9Ec4Yr5/view?usp=sharing" className="text-decoration-none text-black " target="_blank">HIRE ME</a> 
                        </button>
                        
                        </div>
                       
                  
                </Col>


                <Col className=""  md="6" lg="6" sm="12" xs="12">


                <img className="image-fluid w-100 myPhoto"  data-aos="fade-down"
                      data-aos-anchor-placement="top-center" src={myPhoto} alt="" />


                </Col>


                </Row>
            </Container>
          
        </div>
    );
};

export default About;