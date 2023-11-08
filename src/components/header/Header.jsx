import React from 'react'
import './header.css'
// import {FaBars} from 'react-icons/fa'
// import {RiCloseFill} from 'react-icons/ri'
import Fade from 'react-reveal/Fade'
const Header = () => {

  return (
    <header id='header-top'>
        <nav className='navigation space-between'>
        {/* <FaBars className='openBar'/> */}
        {/* initial={{x:-940}} animate={{x:0}} transition={{delay:0.5,duration:1.5}} */}
            <div className="navbar">
              <Fade top>
                <ul className='flex'>
                    <li><a href="#/nn">Home</a></li>
                    <li><a href="#aboutMe__container">About</a></li>
                    <li><a href="#main-container">Skills</a></li>
                    <li><a href="#contact_container">Contact</a></li>
                    <li><a href="#/">Projects</a></li>
                </ul>
              </Fade>
            </div>
            {/* <RiCloseFill className='closeBar'/> */}
        </nav>
    </header>
  )
}

export default Header