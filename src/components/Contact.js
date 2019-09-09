import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
        <form className="contact-form">
            <input type="text" placeholder="Name" name="fullname" />
            <input type="email" placeholder="Email" name="email" />
            <textarea id="message" placeholder="Message" name="message" />
            <input type="submit" value="Send Message" />
        </form>
    </div>
  )
}

export default Contact
