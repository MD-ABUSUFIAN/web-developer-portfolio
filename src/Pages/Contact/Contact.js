import React from 'react';
import { Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';


const Contact = () => {


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('Gmail', e.target.value,'user_vVGWAcqQORuXShy25PGP3')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (
        
            
        <Container>
            <div className="row">

                <div className="col col-lg-6 col-md-6 col-sm-12">

                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12">
                <form onSubmit={sendEmail}>
          
                        <input className="w-100 mx-auto mt-2 p-2 rounded " type="text" name="name" placeholder="Enter Your Email" />
                        <br />
                        <input className="w-100 mx-auto mt-2 p-2 rounded "  type="email" name="email" placeholder="Enter Your Email" />
                        <br />
                        <input className="w-100 mx-auto mt-2 p-2 rounded "  type="text" name="subject" placeholder="Enter Your Subject" />
                        <br />
                        <textarea className="w-100 mx-auto mt-2 p-2 rounded "  name="message" placeholder="Enter Your Message" type="text"/>
                        <br />
                        <input className="w-100 mx-auto mt-2 p-2 rounded "  type="submit" value="SEND" />
      
                     </form>

                </div>
               

            </div>

        </Container>
    
    );
};

export default Contact;