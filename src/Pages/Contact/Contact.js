import React from 'react';
import { Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";


const Contact = () => {

    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_qfsrs7h','template_bqfvfqw',e.target,"user_pDzBthJR8fx0HQE6Tq7EH")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          
        e.target.reset()
        
      };

    return (
        
            
        <Container id="contact">


            <div className="row">
                <h1 className="text-center my-5 text-danger fw-bolder">CONTACT ME</h1>

                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">

                    <img className="image-fluid w-100  pb-5" src="https://img.freepik.com/free-vector/cooperation-working-together-create-idea-ual-illustration_132971-460.jpg?size=626&ext=jpg" alt="" />

                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                    <h1 className="text-center text-primary fw-bolder fs-1">Lets talk!</h1>
                <form className="row"  onSubmit={sendEmail}>

                    <label>Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Enter Your Name"/>
                    <label> Email</label>
                    <input type="email" name="user_email" className="form-control" placeholder="Enter Your Email"/>
                    <label>Message</label>
                    <textarea name="message" className="form-control" placeholder="Write Your Message"></textarea>
                    <input type="submit" value="SEND MESSAGE" className="form-control btn btn-primary"/>
          
                        
                     </form> 

                </div>
               

            </div>

        </Container>
    
    );
};

export default Contact;