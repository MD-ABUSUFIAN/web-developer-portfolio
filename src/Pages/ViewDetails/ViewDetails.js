import React, { useEffect, useState } from 'react';
import { Card, Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';

const ViewDetails = () => {
    const {detailsId}=useParams()

    const[projects,setProjects]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    useEffect(()=>{
        setIsLoading(true)
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
            <h1 className="text-center my-5 bg-dark text-white w-50 mx-auto p-3 rounded-pill"> MORE DETAILS</h1>

            {
                isLoading && <Spinner animation="grow" variant="primary" />
            }

                
                <Card  >
                        <div className="row">
                            <div className="col col-lg-12 col-md-12 col-12">
                            <Card.Img className="w-100" variant="top" src={items[0]?.image1} />
                            </div>

                            <div className="col col-lg-6 col-md-6 mt-2 ">
                            <Card.Img className="w-100" variant="top" src={items[0]?.image2} />
                            </div>
                            <div className="col col-lg-6 col-md-6 mt-2">
                            <Card.Img className="w-100" variant="top" src={items[0]?.image3} />
                            </div>
                        </div>
                        <Card.Body>
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