import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import './contact.css'

const Contact = () => {
  const formRef = useRef()
  const [done, setDone]= useState(false)
  
  const handleSubmit = (e)=>{
     e.preventDefault()
     emailjs.sendForm('service_if96tea', 'template_gw4quhl', formRef.current, 'user_R7rzGw5TRVcNSeCumsCCC')
     .then((result) => {
         console.log(result.text);
         setDone(true)
     }, (error) => {
         console.log(error.text);
     });
  }



  return (
    <>
      <div className="c">
        <div className="c-left">
           <h1>Let's discuss your projects</h1>
          <div className="c-info">
            <img src="images/c1.png" alt="pic" />
            +91 8766543212
          </div>
          <div className="c-info">
            <img src="images/c3.png" alt="pic" />
            email@gmail.com
          </div>
          <div className="c-info">
            <img src="images/c4.png" alt="pic" />
            upper rajeev nagar, 
          </div>
        </div>
        <div className="c-right">
          <h1>Have queries ? you can contact us </h1>
          <form onSubmit={handleSubmit} ref={formRef}>
            <input type="text" placeholder="your name" name="name" />
            <input type="email" placeholder="your email" name="email" />
            <input type="text" placeholder="subject" name="subject" />
            <textarea name="message" rows="5" placeholder="your message"></textarea>
            <button type="submit">SUBMIT</button>
            <p className="done"> {done && "Email sent successfully"}</p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
