import React from 'react'
import './footer.css'
import {RiFacebookFill} from 'react-icons/ri'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {ImLinkedin2} from 'react-icons/im'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className="curve">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="aqua" fillOpacity="1" d="M0,128L13.3,154.7C26.7,181,53,235,80,245.3C106.7,256,133,224,160,192C186.7,160,213,128,240,133.3C266.7,139,293,181,320,170.7C346.7,160,373,96,400,85.3C426.7,75,453,117,480,138.7C506.7,160,533,160,560,160C586.7,160,613,160,640,149.3C666.7,139,693,117,720,144C746.7,171,773,245,800,256C826.7,267,853,213,880,165.3C906.7,117,933,75,960,96C986.7,117,1013,203,1040,218.7C1066.7,235,1093,181,1120,165.3C1146.7,149,1173,171,1200,181.3C1226.7,192,1253,192,1280,181.3C1306.7,171,1333,149,1360,144C1386.7,139,1413,149,1427,154.7L1440,160L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"></path></svg>
          </div>
        <div className="container">
          <div className="footer_content">
            <div className="footer_logo">
              <h1>ANIL <span>RAI</span></h1>
            </div>
            <div className="header_links">
              <ul>
                <li><a href="#header-top">Home</a></li>
                <li><a href="#aboutMe__container">About me</a></li>
                <li><a href="#main-container">Skills</a></li>
                <li><a href="#contact_container">Contact</a></li>
                <li><a href="#/">Projects</a></li>
              </ul>
            </div>
            <div className="social_links">
              <RiFacebookFill  className="social_links-icon"/>
              <BsInstagram  className="social_links-icon"/>
              <ImLinkedin2  className="social_links-icon"/>
              <BsTwitter  className="social_links-icon"/>
            </div>
            <div className="copyright">&copy; <a href="https://www.linkedin.com/in/anil-rai-4a38ba232/" target='blank'>ANIL RAI</a>. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer