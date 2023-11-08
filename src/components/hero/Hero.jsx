import React from 'react'
import './hero.css'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <div className='main_hero'>
        <div className="typing">
          <div className="wrapper">
              <motion.div className="static-txt" initial={{y:-500}} animate={{y:0}} transition={{duration:1.3,delay:0.5,type:'spring',stiffness:50}}>I'm a</motion.div>
              <ul className="dynamic-txts">
                  <li><span>Designer</span></li>
                  <li><span>Developer</span></li>
                  <li><span>Typer</span></li>
                  <li><span>Boss</span></li>
              </ul>
          </div>
        </div>
    </div>
  )
}

export default Hero