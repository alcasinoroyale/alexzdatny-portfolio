import React from 'react'
import headshot from '../images/headshot.jpg'

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-content">
      <form className="contact-form">
        <div className="name">
          <label>First Name<input type="text" name="firstName" /></label>
          <label>Last Name<input type="text" name="lastName" /></label>
        </div>
        <div className="info">
          <label>Email<input type="email" name="email" /></label>
          <label>Subject<input type="text" name="subject" /></label>
        </div>
        <label>Message</label>
          <textarea name="message" />
        <input type="submit" value="Submit" />
      </form>
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
