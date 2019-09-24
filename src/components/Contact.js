import React from 'react'
import headshot from '../images/headshot.jpg'

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <img src={headshot} class="headshot" alt="headshot" />
      <h3>Email: alexzdatny@gmail.com</h3>
      <h3>Cell: 732-887-3198</h3>
    </div>
  )
}

export default Contact
