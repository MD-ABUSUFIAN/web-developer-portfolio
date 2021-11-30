import React, { useEffect, useState } from 'react';
import './Project.css'
import { Card, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Project = () => {

const [projects,setProjects]=useState([]);

useEffect(()=>{
    fetch('./moreItem.json')
    .then(res=>res.json())
    .then(data=>setProjects(data))
},[])


    return (
        <Container id="project" className="mt-5">
            <h1 className="text-center bg-black w-50 mx-auto text-white rounded-pill py-3 my-5">MY RECENTLY PROJECT</h1>
        <div className="row">

                {
                    projects.map(project=>
                        <div className="col col-lg-6 col-md-6 col-sm-12">
                <Card className="card-body1" >
                        <Card.Img className="image-fluid" variant="top" src={project?.image1} />
                        <Card.Body>
                        <Card.Title>
                       <h1>{project?.title}</h1>
                        </Card.Title>
                        <Card.Text ><h4>Duration:<span className="text-primary">{project?.duration}</span></h4></Card.Text>
                        <Card.Text>
                                {project?.description}
                        </Card.Text>
                        <Card.Text>

                            <Link to={`/details/${project?.id}`}>

                            <div>
                                <button style={{marginLeft:"100px"}} className="btn btn-primary  fs-5 fw-bold">VIEW-MORE ....</button></div>

                            </Link>
                        </Card.Text>
                        </Card.Body>
                </Card>
                </div>
            
                    )
                }
            
            </div>






            {/* project 2 */}

            {/* <div className="col col-lg-6 col-md-6 col-sm-12">
                <Card className="card-body" >
                        <Card.Img className="image-fluid" variant="top" src="https://i.ibb.co/hmqZ19r/ASIGNMENT-11.jpg" />
                        <Card.Body>
                        <Card.Title>
                       <h1>Traveling Agency</h1>
                        </Card.Title>
                        <Card.Text className="text-primary">Duration: Nov 2021 --> Nov 2021</Card.Text>
                        <Card.Text>
                        A complete stack responsive travel website. Here customers will be able to view and order different types of travel packages.Users wish many place traveling Booking and Confirm and Her Booking Package canceled /Delete method.
                        </Card.Text>
                        <Card.Text> */}

                            {/* <ul>
                                <li className="list">nodejs</li>
                                <li className="list">javaScript</li>
                                <li className="list">mongodb</li>
                                <li className="list">react.js</li>
                                <li className="list">nodejs</li>
                                <li className="list">Bootstrap</li>
                                <li className="list"> React Hooks Form</li>
                                <li className="list">firebase-authentication</li> */}
                                <div>
                                {/* <button className="m-2 rounded bg-danger fs-5 fw-bold border-0 text-white"><a href="https://funny-travaling-agency.firebaseapp.com/" target="_blank"> Live Site</a></button>
                                
                                <button className="m-2 rounded bg-danger fs-5 fw-bold border-0 text-white" target="_blank"><a href="https://github.com/MD-ABUSUFIAN/funny-travaling-client" target="_blank"> Client Site</a></button>
                                <button className="m-2 rounded bg-danger fs-5 fw-bold border-0 text-white" target="_blank"><a href="https://github.com/MD-ABUSUFIAN/funny-travaling-server" target="_blank"> Server Site</a></button> */}
                                

                                
                                {/* </div>
                                <div><button style={{marginLeft:"100px"}} className="btn btn-primary ">VIEW MORE</button></div> */}
                            {/* </ul> */}
{/* 
                        </Card.Text>
                        </Card.Body>
                </Card>
            
            </div> */}



            {/* project-3 */}


            {/* <div  className="col col-lg-6 col-md-6 col-sm-12">
                <Card className="card-body">
                        <Card.Img className="image-fluid w-100" variant="top" src="https://i.ibb.co/1vMT2QC/ASSIGNMENT-10.jpg" />
                        <Card.Body>
                        <Card.Title>
                       <h1>Mans Health Care</h1>
                        </Card.Title>
                        <Card.Text className="text-primary">Duration: Nov 2021 --> Nov 2021</Card.Text>
                        <Card.Text>
                       Mans Health Care is Front-End  website build with React.js along  functionalities.Users health related product and service booking and suggestion. Google Firebase has been used for user authentication and hosting. For database i have use MongoDB here. Node.js is used in backend.
                        </Card.Text>
                        <Card.Text> */}

                            {/* <ul>
                                <li className="list">nodejs</li>
                                <li className="list">javaScript</li>
                               
                                <li className="list">react.js</li>
                                <li className="list">nodejs</li>
                                <li className="list">Bootstrap</li>
                                <li className="list"> React Hooks Form</li>
                                <li className="list">firebase-authentication</li> */}
                                <div>
                                {/* <button className="m-2 rounded bg-danger fs-5 fw-bold border-0 text-white"><a href="https://mans-health-care.firebaseapp.com/" target="_blank"> Live Site</a></button>
                                
                                <button className="m-2 rounded bg-danger fs-5 fw-bold border-0 text-white" target="_blank"><a href="https://github.com/MD-ABUSUFIAN/programming-institute" target="_blank"> Client Site</a></button> */}
                               
                                </div>
                            {/* </ul> */}
                            {/* <div><button style={{marginLeft:"100px"}} className="btn btn-primary ">VIEW MORE</button></div>

                        </Card.Text>
                        </Card.Body>
                </Card>
            
            </div> */}


            {/* Project-4 */}


            {/* <div className="col col-lg-6 col-md-6 col-sm-12 ">
                <Card className="card-body">
                        <Card.Img className=" image-fluid w-100" variant="top" src="https://i.ibb.co/jf5JWrP/ASSIGNMENT-9.jpg" />
                        <Card.Body>
                        <Card.Title>
                       <h1>Programming Institute</h1>
                        </Card.Title>
                        <Card.Text className="text-primary">Duration: Sep 2021 --> Sep 2021</Card.Text>
                        <Card.Text>
                        Programming Institute is Front End website build with React.js along with  functionalities. Google Firebase has been used for user authentication and hosting.
                        </Card.Text>
                        <Card.Text> */}

                            {/* <ul>
                                <li className="list">nodejs</li>
                                <li className="list">javaScript</li>
                                <li className="list">react.js</li>
                                <li className="list">nodejs</li>
                                <li className="list">Bootstrap</li>
                               */}
                              
                                <div>
                                {/* <button className="m-2 rounded bg-danger fs-5 fw-bold border-0 text-white"><a href="https://programming-institute-abusufian.netlify.app/" target="_blank"> Live Site</a></button>

                                <button className="m-2 rounded bg-danger fs-5 fw-bold border-0 text-white" target="_blank"><a href="https://github.com/MD-ABUSUFIAN/programming-institute" target="_blank"> Client Site</a></button>
                                 */}
                                </div>
                            {/* </ul> */}
{/* 
                            <div><button style={{marginLeft:"100px"}} className="btn btn-primary ">VIEW MORE</button></div>

                        </Card.Text>
                        </Card.Body>
                </Card>
            
            </div>  */}
        </div>
        </Container>
    );
};

export default Project;







// const moreItem=[
// {
//     id:1,
//     title:"Bikers Showroom",
//     duration:"Duration: Nov 2021 --> Nov 2021",
//     technology:"javaScript || mongodb ||react.js || React Router Dom ||nodejs || Material Ui || React Hooks Form || Node Express || firebase-authentication ",
//     description:"Bikers Dream Home is MERN Stack website build with React.js along with CRUD and Dashboard functionalities.Users buy her choice order and her dashboard looking and her wish delete order,Google Firebase has been used for user authentication and hosting.",
//     image1:"https://i.ibb.co/tMVj5ZJ/assignment-12.jpg",
//     image2:" https://i.ibb.co/tMVj5ZJ/assignment-12.jpg",
//     image3:" https://i.ibb.co/tMVj5ZJ/assignment-12.jpg",
//     image4:" https://i.ibb.co/tMVj5ZJ/assignment-12.jpg",
//     liveLink:"https://bikers-dream-home.firebaseapp.com/",
//     gitLink:"https://github.com/MD-ABUSUFIAN/bikers-dream-home-client"
// },


// {
//     id:2,
//     title:"Dental Care",
//     duration:"Duration: Nov 2021 --> Nov 2021",
//     technology:"javaScript || mongodb ||react.js || React Router Dom ||nodejs || Material Ui || React Hooks Form || Node Express || firebase-authentication ",
//     description:"Dental Care is Full Stack Website build with React.js along  functionalities.Users health related product and service booking and suggestion.Users first login or registration than go to booking Order Route. Google Firebase has been used for user authentication and hosting.",
//     image1:"https://i.ibb.co/1vMT2QC/ASSIGNMENT-10.jpg",
//     image2:"https://i.ibb.co/1vMT2QC/ASSIGNMENT-10.jpg",
//     image3:"https://i.ibb.co/1vMT2QC/ASSIGNMENT-10.jpg",
//     image4:"https://i.ibb.co/1vMT2QC/ASSIGNMENT-10.jpg",

//     liveLink:"https://doctorls-portal.web.app/",
//     gitLink:"https://github.com/MD-ABUSUFIAN/doctors-portal-cilent-site"
// },







// {
//     id:3,
//     title:"Traveling Agency",
//     duration:"Duration: Oct 2021 --> Oct 2021",
//     technology:"javaScript || mongodb ||react.js || React Router Dom ||nodejs || Material Ui || React Hooks Form || Node Express || firebase-authentication ",
//     description:"A complete stack responsive travel website. Here customers will be able to view and order different types of travel packages.Users wish many place traveling Booking and Confirm and Her Booking Package canceled /Delete method.",
//     image1:"https://i.ibb.co/hmqZ19r/ASIGNMENT-11.jpg",
//     image2:" https://i.ibb.co/hmqZ19r/ASIGNMENT-11.jpg",
//     image3:" https://i.ibb.co/hmqZ19r/ASIGNMENT-11.jpg",
//     image4:" https://i.ibb.co/hmqZ19r/ASIGNMENT-11.jpg",
//     liveLink:"https://funny-travaling-agency.firebaseapp.com/",
//     gitLink:"https://github.com/MD-ABUSUFIAN/funny-travaling-client"
// },


// {
//     id:4,
//     title:"Mans Health Care",
//     duration:"Duration: Oct 2021 --> Oct 2021",
//     technology:"javaScript ||react.js || React Router Dom || Bootstrap || React Hooks Form ||CSS || firebase-authentication ",
//     description:"Mans Health Care is Front-End  website build with React.js along  functionalities.Users health related product and service booking and suggestion.Users first login or registration than go to booking Order Route. Google Firebase has been used for user authentication and hosting.",
//     image1:"https://i.ibb.co/1vMT2QC/ASSIGNMENT-10.jpg",
//     image2:"https://i.ibb.co/1vMT2QC/ASSIGNMENT-10.jpg",
//     image3:"https://i.ibb.co/1vMT2QC/ASSIGNMENT-10.jpg",
//     image4:"https://i.ibb.co/1vMT2QC/ASSIGNMENT-10.jpg",

//     liveLink:"https://mans-health-care.firebaseapp.com/",
//     gitLink:"https://github.com/MD-ABUSUFIAN/mans-health-care"
// },
// {
//     id:5,
//     title:"Car Mechanic",
//     duration:"Duration: Sep 2021 --> Sep 2021",
//     technology:"javaScript ||react.js || React Router Dom || Bootstrap || CSS || firebase-authentication ",
//     description:"Car Mechanic Service is Front-End  website build with React.js along  functionalities.Users Car Mechanic related product and service booking and suggestion.Users first login or registration than go to booking Order Route. Google Firebase has been used for user authentication and hosting.",
//     image1:"https://i.ibb.co/1vMT2QC/ASSIGNMENT-10.jpg",
//     image2:"https://i.ibb.co/1vMT2QC/ASSIGNMENT-10.jpg",
//     image3:"https://i.ibb.co/1vMT2QC/ASSIGNMENT-10.jpg",
//     image4:"https://i.ibb.co/1vMT2QC/ASSIGNMENT-10.jpg",

//     liveLink:"https://chamok-car-mechanical-service.web.app/",
//     gitLink:"https://github.com/MD-ABUSUFIAN/auto-service-repair-website-project"
// },



// {
//     id:6,
//     title:"Programming Institute",
//     duration:"Duration: Sep 2021 --> Sep 2021",
//     technology:"javaScript ||react.js ||React Router Dom || Bootstrap ||CSS ||",
//     description:"Programming Institute is Front End React website build with React.js along with  functionalities.This Web site Users choice her Interesting Course and this Programming Institute also information are Available and user using many Different Route and this web site are hosting Netlify .",
//     image1:"https://i.ibb.co/jf5JWrP/ASSIGNMENT-9.jpg",
//     image2:"https://i.ibb.co/jf5JWrP/ASSIGNMENT-9.jpg",
//     image3:"https://i.ibb.co/jf5JWrP/ASSIGNMENT-9.jpg",
//     image4:"https://i.ibb.co/jf5JWrP/ASSIGNMENT-9.jpg",
//     liveLink:"https://programming-institute-abusufian.netlify.app/",
//     gitLink:"https://github.com/MD-ABUSUFIAN/programming-institute"
// },

  
// ]