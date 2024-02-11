import React from 'react'
import coding from '../images/coding.jpg'
import albums from '../images/albums.png'
import films from '../images/favoritefilms.png'
import angular from '../icons/angular.png'
import css from '../icons/css.png'
import html from '../icons/html.png'
import js from '../icons/javascript.png'
import jq from '../icons/jquery.png'
import rails from '../icons/rails.png'
import react from '../icons/react.png'
import redux from '../icons/redux.png'
import ruby from '../icons/ruby.png'

const About = () => {
  return (
    <div>
      <div className="about">
        <h1>About Me</h1>
        <h4>I'm a Full Stack Developer with a passion for content creation and building applications, experienced in HTML, CSS, Ruby on Rails, JavaScript, Angular, and React. I discovered web development while studying journalism and creating multi-media packages for feature stories. After becoming immersed in coding as an intern for an analytics startup, I decided to quickly expand my skill set through The Flatiron School. I’m excited to code, collaborate, and learn while helping tech companies evolve.</h4>
        </div>
      <div className="skills">
        <h1>Skills</h1>
          <div className="icons">
            <div className="dev-icon"><img src={angular} alt="angular" /><h3>Angular</h3></div>
            <div className="dev-icon"><img src={css} alt="css" /><h3>CSS 3</h3></div>
            <div className="dev-icon"><img src={html} alt="html" /><h3>HTML 5</h3></div>
            <div className="dev-icon"><img src={js} alt="js" /><h3>JavaScript</h3></div>
            <div className="dev-icon"><img src={jq} alt="jq" /><h3>JQuery</h3></div>
            <div className="dev-icon"><img src={rails} alt="rails" /><h3>Rails</h3></div>
            <div className="dev-icon"><img src={react} alt="react" /><h3>React</h3></div>
            <div className="dev-icon"><img src={redux} alt="redux" /><h3>Redux</h3></div>
            <div className="dev-icon"><img src={ruby} alt="ruby" /><h3>Ruby</h3></div>
          </div>
      </div>

      <div className="interests">
        <h1>Interests</h1>
        <h2>Film, Music, & Coding</h2>
        <img src={films} class="films" alt="films" />
        <img src={albums} class="albums" alt="albums" />
        <img src={coding} class="coding" alt="coding" />
      </div>
    </div>
  )
}

export default About
