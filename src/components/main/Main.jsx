import React from 'react'
import './main.css'
import Fade from 'react-reveal/Fade'
import {AiOutlineHtml5} from 'react-icons/ai'
import {TbBrandCss3} from 'react-icons/tb'
import {TbBrandJavascript} from 'react-icons/tb'
import {GrReactjs} from 'react-icons/gr'

const Main = () => {
  return (
    <div id='main-container'>
      <Fade left>
        <h1><span>My</span> Skills</h1>
      </Fade>
      <div className="container">
        <div className="skill">
          <Fade top>
          <div className="skill-content">
            <h3>HTML <AiOutlineHtml5 className='skill_logo'/> </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat rem nulla id, voluptas aperLorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit laudantium maiores sunt? Happy Hacking !!</p>
          </div>
          </Fade>
          <Fade top>
          <div className="skill-content">
            <h3>CSS <TbBrandCss3 className='skill_logo'/> </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat rem nulla id, voluptas aperLorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit laudantium maiores sunt? Happy Hacking !!</p>
          </div>
          </Fade>
          <Fade top>
          <div className="skill-content">
            <h3>JavaScript <TbBrandJavascript className='skill_logo'/> </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat rem nulla id, voluptas aperLorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit laudantium maiores sunt? Happy Hacking !!</p>
          </div>
          </Fade>
          <Fade top>
          <div className="skill-content">
            <h3>React-Js <GrReactjs className='skill_logo'/> </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat rem nulla id, voluptas aperLorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit laudantium maiores sunt? Happy Hacking !!</p>
          </div>
          </Fade>
      </div>
      </div>
    </div>
  )
}

export default Main