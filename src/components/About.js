import React from 'react'
import coding from '../images/coding.jpg'
import albums from '../images/albums.png'

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <h4>I'm a Full stack web developer with a passion for content creation and building applications, experienced in HTML/CSS, Ruby on Rails, JavaScript, and React. I discovered web development while studying journalism and creating multi-media packages for feature stories. After becoming immersed in coding as an intern for an analytics startup, I decided to quickly expand my skill set through The Flatiron School. I’m excited to to code, collaborate, and learn while helping tech companies evolve.</h4>
      <img src={coding} class="coding" alt="coding" />
      <img src={albums} class="albums" alt="albums" />
    </div>
  )
}

export default About
