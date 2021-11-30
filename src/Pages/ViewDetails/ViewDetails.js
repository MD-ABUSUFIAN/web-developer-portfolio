import React, { useEffect, useState } from 'react';
import { Card, Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ViewDetails = () => {
    const {detailsId}=useParams()

    const[projects,setProjects]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    useEffect(()=>{
        setIsLoading(true)
        AOS.init()
        fetch('/moreItem.json')
        .then(res=>res.json())
        .then(data=>
            {
                setProjects(data)
                setIsLoading(false)}
                
    )},[])


    const items=projects.filter(project=>project.id == detailsId)
    console.log(items);
    return (
        <Container>
            <h1 className="text-center my-5 bg-dark text-white w-50 mx-auto p-3 rounded-pill" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
                 PROJECT DETAILS</h1>

            {
                isLoading && <Spinner animation="grow" variant="primary" />
            }

                
                <Card  >
                        <div className="row">
                            <div className="col col-lg-12 col-md-12 col-12">
                            <Card.Img className="w-100" variant="top" src={items[0]?.image1} data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="2000" />
                            </div>

                            <div className="col col-lg-6 col-md-6 mt-2 ">
                            <Card.Img className="w-100" variant="top" src={items[0]?.image2} 
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-duration="3000"
                            data-aos-easing="ease-in-sine"/>
                            </div>
                            <div className="col col-lg-6 col-md-6 mt-2">
                            <Card.Img className="w-100" variant="top" src={items[0]?.image3}
                            data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-duration="3000"
                            data-aos-easing="ease-in-sine" />
                            </div>
                        </div>
                        <Card.Body
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            data-aos-anchor-placement="bottom-center">
                        <Card.Title>
                       <h1>{items[0]?.title}</h1>
                        </Card.Title>
                        <Card.Text ><h4>Duration: <span className="text-danger fw-bold fs-5">{items[0]?.duration}</span></h4></Card.Text>
                        <Card.Text>
                                {items[0]?.description}
                        </Card.Text>
                        <Card.Text>
                             <h2>Technology Used: <br/> <span className="text-primary fs-4">{items[0]?.technology}</span></h2>
                        </Card.Text>

                        <button className="btn btn-primary  m-2">
                            <a className="text-white fw-bolder fs-5 text-decoration-none " href={items[0]?.liveLink} target="_blank">Live-Link</a>
                        </button>

                        <button className="btn btn-dark  m-">
                            <a className="text-white fw-bolder fs-5 text-decoration-none " href={items[0]?.gitLink} target="_blank">Git-Link</a>

                        </button>
                      
                        </Card.Body>
                </Card>
               



        </Container>
    );
};

export default ViewDetails;