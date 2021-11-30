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
                        <Card.Img className="image-fluid cover-image" variant="top" src={project?.image1} />
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
        </Container>
    );
};

export default Project;






