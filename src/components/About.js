import React from 'react'
import coding from '../images/coding.jpg'
import albums from '../images/albums.png'
import films from '../images/favoritefilms.png'
import atom from '../icons/atom.png'
import css from '../icons/css.png'
import git from '../icons/github.png'
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
        <h1>About</h1>
        <h4>I'm a Full stack web developer with a passion for content creation and building applications, experienced in HTML/CSS, Ruby on Rails, JavaScript, and React. I discovered web development while studying journalism and creating multi-media packages for feature stories. After becoming immersed in coding as an intern for an analytics startup, I decided to quickly expand my skill set through The Flatiron School. I’m excited to to code, collaborate, and learn while helping tech companies evolve.</h4>
        <img src={coding} class="coding" alt="coding" />
        <img src={albums} class="albums" alt="albums" />
        </div>
      <div className="skills">
        <h1>Skills</h1>
          <div className="icons">
            <img src={atom} alt="atom" />
              <h3>Atom</h3>
            <img src={css} alt="css" />
              <h3>CSS 3</h3>
            <img src={git} alt="git" />
              <h3>GitHub</h3>
            <img src={html} alt="html" />
              <h3>HTML 5</h3>
            <img src={js} alt="js" />
              <h3>JavaScript</h3>
            <img src={jq} alt="jq" />
              <h3>JQuery</h3>
            <img src={rails} alt="rails" />
              <h3>Rails</h3>
            <img src={react} alt="react" />
              <h3>React</h3>
            <img src={redux} alt="redux" />
              <h3>Redux</h3>
            <img src={ruby} alt="ruby" />
              <h3>Ruby</h3>
          </div>
      </div>
      <div className="interests">
        <h1>Interests</h1>
        <h2>Favorite Films</h2>
        <img src={films} class="films" alt="films" />
      </div>
    </div>
  )
}

export default About
