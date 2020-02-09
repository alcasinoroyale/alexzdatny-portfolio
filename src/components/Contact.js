import React from 'react'
import headshot from '../images/headshot.jpg'

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-content">
      
        <div className="contact-info">
          <img src={headshot} class="headshot" alt="headshot" />
          <h3>CELL</h3>732-887-3198
          <h3>EMAIL</h3>alexzdatny@gmail.com
        </div>
      </div>
    </div>
  )
}

export default Contact
