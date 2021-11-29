import React from 'react';
import './Project.css'
import { Card, Col, Container, Row } from 'react-bootstrap';

const Project = () => {
    return (
        <Container id="project" className="mt-5">
            <h1 className="text-center bg-black w-50 mx-auto text-white rounded-pill py-3 my-5">MY PROJECT</h1>
        <Row>
            <Col>
                <Card >
                        <Card.Img className="image-fluid" variant="top" src="https://i.ibb.co/tMVj5ZJ/assignment-12.jpg" />
                        <Card.Body>
                        <Card.Title>
                       <h1>Bikers Dream Home</h1>
                        </Card.Title>
                        <Card.Text className="text-primary">Duration: Nov 2021 --> Nov 2021</Card.Text>
                        <Card.Text>
                       Bikers Dream Home is MERN Stack website build with React.js along with CRUD and Dashboard functionalities. Google Firebase has been used for user authentication and hosting. For database i have use MongoDB here. Node.js is used in backend.
                        </Card.Text>
                        <Card.Text>

                            <ul>
                                <li className="list">nodejs</li>
                                <li className="list">javaScript</li>
                                <li className="list">mongodb</li>
                                <li className="list">react.js</li>
                                <li className="list">nodejs</li>
                                <li className="list">Material Ui</li>
                                <li className="list"> React Hooks Form</li>
                                <li className="list">firebase-authentication</li>
                                <div>
                                <button className="m-2 rounded bg-danger fs-5 fw-bold border-0 text-white"><a  href="https://bikers-dream-home.firebaseapp.com/" target="_blank"> Live Site</a></button>
                                
                                <button className="m-2 rounded bg-danger fs-5 fw-bold border-0 text-white" target="_blank"><a href="https://github.com/MD-ABUSUFIAN/bikers-dream-home-client" target="_blank"> Client Site</a></button>
                                <button className="m-2 rounded bg-danger fs-5 fw-bold border-0 text-white" target="_blank"><a href="https://github.com/MD-ABUSUFIAN/bikers-dream-home-server" target="_blank"> Server Site</a></button>
                                </div>
                            </ul>

                        </Card.Text>
                        </Card.Body>
                </Card>
            
            </Col>


            {/* project 2 */}

            <Col className="my-3">
                <Card >
                        <Card.Img className="image-fluid" variant="top" src="https://i.ibb.co/hmqZ19r/ASIGNMENT-11.jpg" />
                        <Card.Body>
                        <Card.Title>
                       <h1>Funny Traveling Agency</h1>
                        </Card.Title>
                        <Card.Text className="text-primary">Duration: Nov 2021 --> Nov 2021</Card.Text>
                        <Card.Text>
                       Funny Traveling Agency is MERN Stack website build with React.js along with CRUD and Dashboard functionalities. Google Firebase has been used for user authentication and hosting. For database i have use MongoDB here. Node.js is used in backend.
                        </Card.Text>
                        <Card.Text>

                            <ul>
                                <li className="list">nodejs</li>
                                <li className="list">javaScript</li>
                                <li className="list">mongodb</li>
                                <li className="list">react.js</li>
                                <li className="list">nodejs</li>
                                <li className="list">Bootstrap</li>
                                <li className="list"> React Hooks Form</li>
                                <li className="list">firebase-authentication</li>
                                <div>
                                <button className="m-2 rounded bg-danger fs-5 fw-bold border-0 text-white"><a href="https://funny-travaling-agency.firebaseapp.com/" target="_blank"> Live Site</a></button>
                                
                                <button className="m-2 rounded bg-danger fs-5 fw-bold border-0 text-white" target="_blank"><a href="https://github.com/MD-ABUSUFIAN/funny-travaling-client" target="_blank"> Client Site</a></button>
                                <button className="m-2 rounded bg-danger fs-5 fw-bold border-0 text-white" target="_blank"><a href="https://github.com/MD-ABUSUFIAN/funny-travaling-server" target="_blank"> Server Site</a></button>
                                
                                </div>
                            </ul>

                        </Card.Text>
                        </Card.Body>
                </Card>
            
            </Col>



            {/* project-3 */}


            <Col>
                <Card >
                        <Card.Img className="image-fluid w-100" variant="top" src="https://i.ibb.co/1vMT2QC/ASSIGNMENT-10.jpg" />
                        <Card.Body>
                        <Card.Title>
                       <h1>Mans Health Care</h1>
                        </Card.Title>
                        <Card.Text className="text-primary">Duration: Nov 2021 --> Nov 2021</Card.Text>
                        <Card.Text>
                       Mans Health is Front-End  website build with React.js along  functionalities. Google Firebase has been used for user authentication and hosting. For database i have use MongoDB here. Node.js is used in backend.
                        </Card.Text>
                        <Card.Text>

                            <ul>
                                <li className="list">nodejs</li>
                                <li className="list">javaScript</li>
                               
                                <li className="list">react.js</li>
                                <li className="list">nodejs</li>
                                <li className="list">Bootstrap</li>
                                <li className="list"> React Hooks Form</li>
                                <li className="list">firebase-authentication</li>
                                <div>
                                <button className="m-2 rounded bg-danger fs-5 fw-bold border-0 text-white"><a href="https://mans-health-care.firebaseapp.com/" target="_blank"> Live Site</a></button>
                                
                                <button className="m-2 rounded bg-danger fs-5 fw-bold border-0 text-white" target="_blank"><a href="https://github.com/MD-ABUSUFIAN/programming-institute" target="_blank"> Client Site</a></button>
                               
                                </div>
                            </ul>

                        </Card.Text>
                        </Card.Body>
                </Card>
            
            </Col>


            {/* Project-4 */}

{/* 
            <Col>
                <Card >
                        <Card.Img className=" image-fluid w-100" variant="top" src="https://i.ibb.co/jf5JWrP/ASSIGNMENT-9.jpg" />
                        <Card.Body>
                        <Card.Title>
                       <h1>Programming Institute</h1>
                        </Card.Title>
                        <Card.Text className="text-primary">Duration: Sep 2021 --> Sep 2021</Card.Text>
                        <Card.Text>
                        Programming Institute is Front End website build with React.js along with  functionalities. Google Firebase has been used for user authentication and hosting.
                        </Card.Text>
                        <Card.Text>

                            <ul>
                                <li className="list">nodejs</li>
                                <li className="list">javaScript</li>
                                <li className="list">react.js</li>
                                <li className="list">nodejs</li>
                                <li className="list">Bootstrap</li>
                              
                              
                                <div>
                                <button className="m-2 rounded bg-danger fs-5 fw-bold border-0 text-white"><a href="https://programming-institute-abusufian.netlify.app/" target="_blank"> Live Site</a></button>

                                <button className="m-2 rounded bg-danger fs-5 fw-bold border-0 text-white" target="_blank"><a href="https://github.com/MD-ABUSUFIAN/programming-institute" target="_blank"> Client Site</a></button>
                                
                                </div>
                            </ul>

                        </Card.Text>
                        </Card.Body>
                </Card>
            
            </Col> */}
        </Row>
        </Container>
    );
};

export default Project;