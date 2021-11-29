import React from 'react';
import { Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";


const Contact = () => {


//     const { register, handleSubmit } = useForm();
//   const onSubmit = data => {



//     emailjs.sendForm('gmail','template_bqfvfqw',data)
//           .then((result) => {
//               console.log(result.text);
//           }, (error) => {
//               console.log(error.text);
//           });
          
          
//     console.log(data)
//   };
   


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

                <div className="col col-lg-6 col-md-6 col-sm-12">

                    <img className="image-fluid w-100" src="https://img.freepik.com/free-vector/cooperation-working-together-create-idea-ual-illustration_132971-460.jpg?size=626&ext=jpg" alt="" />

                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12">
                <form className="row"  onSubmit={sendEmail}>

                    <label>Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Enter Your Name"/>
                    <label> Email</label>
                    <input type="email" name="user_email" className="form-control" placeholder="Enter Your Email"/>
                    <label>Message</label>
                    <textarea name="message" className="form-control" placeholder="Write Your Message"></textarea>
                    <input type="submit" value="SEND MESSAGE" className="form-control btn btn-primary"/>
          
                        {/* <input className="w-100 mx-auto mt-2 p-2 rounded " type="text" name="from_name" placeholder="Enter Your Name" />
                        <br />
                        <input className="w-100 mx-auto mt-2 p-2 rounded "  type="email" name="user_email" placeholder="Enter Your Email" />
                        <br />
                       
                        <textarea className="w-100 mx-auto mt-2 p-2 rounded "  name="message" placeholder="Enter Your Message" type="text"/>
                        <br />
                        <input className="w-100 mx-auto mt-2 p-2 rounded bg-primary text-white fw-bolder "  type="submit" value="SEND" />
                        
       */}





                     </form> 

{/* <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("from_name")}type="text"/>
      <input {...register("to_name")} />
      <input type="text" {...register("message")} />
      <input type="submit" />
    </form> */}

                </div>
               

            </div>

        </Container>
    
    );
};

export default Contact;