import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact-style'>
        <h2 className='name'>Mark Cabael</h2>
        <h5 className='position'>Full-Stack Developer</h5>
        <p className='web-link'>cabael.website</p>

        <div className='btns-contact'>
            <button className='btn-email'><i className='fa fa-envelope contact-icon'></i> Email</button>
            <button className='btn-linkedin'><i className='fab fa-linkedin contact-icon'></i> LinkedIn</button>
        </div>

    </div>

    
  )
}

export default Contact