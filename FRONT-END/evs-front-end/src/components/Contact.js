import React, { useState } from 'react'


import './Contact.css'
import Header from './Header'
import Footer from './Footer'

function Contact() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[mess,setMess]=useState('')
 
    const handleChange=(e)=>{
        e.preventDefault();
        console.log(name+"  "+email+"  "+mess);
    }
  return (
    <div>
    <div className='a6'>
   <Header/>
    <div className="contact-container">
    
    <h1>Contact Us</h1>
    <form className="contact-form" onSubmit={handleChange}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value)}} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value)}}/>
      <textarea placeholder="Message" rows="5"value={mess} onChange={(e) => { setMess(e.target.value)}}></textarea>
      <button type="submit">Submit</button>
    </form>
    
  </div>
  </div>
  <Footer/>
  </div>
  )
}

export default Contact