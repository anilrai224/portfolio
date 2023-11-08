import React from 'react'
import './aboutme.css'
import me from '../../assets/me.jpg'
import { Fade } from 'react-reveal'

const Aboutme = () => {
  return (
  <>
    <div id='aboutMe__container'>
      <Fade top>
        <h1>About <span>Me</span></h1>
      </Fade>
      <div className="aboutMe-content">
        <div className="aboutMe-avatar">
           <img src={me} alt="Me" />
        </div>
        <div className="aboutMe-description">
        <Fade right>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quam porro minus consectetur! Reprehenderit, voluptatem praesentium! Optio reprehenderit, exercitationem nemo, non sapiente ad temporibus ducimus fugiat, libero adipisci possimus distinctio.
        </Fade>
          <Fade bottom>
            <a href="#contact_container" className="lets-talk">Let's Talk</a>
          </Fade>
        </div>
      </div>
    </div>
    </>
  )
}

export default Aboutme