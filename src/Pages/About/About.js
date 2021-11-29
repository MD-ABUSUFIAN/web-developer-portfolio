import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import myphoto from '../../Image/my-photo.png';
import  './About.css'




const About = () => {
  
    return (
        <div id="about">
            <h1 className=" fs-1 fw-bolder text-center text-white mt-5 bg-black w-25 mx-auto rounded-pill p-3 ">About Me</h1>
            <Container>
                <Row className="mt-2">
                
                <Col  md="6" lg="6" sm="12" xs="12">

                    <div className="mt-50% testimonial-text">
                        <h1>
                        Hello! My Name Is
                        <span className="text-danger"><br /> ABU SUFIAN</span>
                        </h1>
                        <p >I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!</p>

                        <ul>
                            <li>Residence :Bangladesh</li>
                            <li>City :Narayanganj.</li>
                            <li> WhatsApp :+8801722123801</li>
                           <li>Mail:abusufian.programmer@gmail.com</li>
                            
                            <a href="#" target="_blank">Facebook</a>
                            <a href="https://www.linkedin.com/in/abusufian-programmer/" target="_blank">Linkedin</a>
                            <a href="https://github.com/MD-ABUSUFIAN" target="_blank">GitHub</a>
                    
                        </ul>
                        
                        <button className="hireMe-btn ">HIRE ME</button>
                        
                        </div>
                       
                  
                </Col>


                <Col className=""  md="6" lg="6" sm="12" xs="12">


<img className="image-fluid w-100" src={myphoto} alt="" />


                </Col>


                </Row>
            </Container>
          
        </div>
    );
};

export default About;