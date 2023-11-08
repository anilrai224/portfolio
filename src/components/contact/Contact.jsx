import React from 'react'
import './contact.css'
import {FaFacebookF} from 'react-icons/fa'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
// import Fade from 'react-reveal/Fade'
import {motion,useInView} from 'framer-motion'

const Contact = () => {
    const form = useRef();
    const ref = useRef();
    const isInView = useInView(ref,{margin:"-100px"})

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6t51whu', 'template_066lv9g', form.current, 'vXZljeWMxufKuS4Nb')
        
        e.target.reset()
      };
      const variants = {
        initial:{
            x:-500,
            opactiy:0,
        },
        animate:{
            x:0,
            opactiy:1,
            transition:{
                staggerChildren:0.3,
            }
        }
      }
  return (
    <>
      <div className="container">
        <h1>Contact <span>Me</span></h1>
        <div id='contact_container' variants={variants} ref={ref}>
            <motion.div className="left_contact" variants={variants}  initial='initial' whileInView='animate'>
                <motion.div className="contact_list" variants={variants}>
                    <FaFacebookF className='contact_icon'/>
                    <h4>Anil Rai</h4>
                    <a href="https://m.me/100014561719226" target='blank'>Send a message</a>
                </motion.div>
                <motion.div className="contact_list" variants={variants}>
                    <MdOutlineMailOutline className='contact_icon'/>
                    <h4>Anil Rai</h4>
                    <a href="mailto:tw4empire04@gmail.com" target='blank'>Send a message</a>
                </motion.div>
                <motion.div className="contact_list" variants={variants}>
                    <BsWhatsapp className='contact_icon'/>
                    <h4>Anil Rai</h4>
                    <a href="https://api.whatsapp.com/send?phone=+9779816731608" target='blank'>Send a message</a>
                </motion.div>
            </motion.div>
            <div className='contactSection'>
                <motion.div className="mailSvg" initial={{opacity:1}} whileInView={{opacity:0,}} transition={{duration:1,delay:2}}>
                    <svg viewBox="0 0 24 24" fill="none" height='450px' width='450px' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0.2"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <motion.path initial={{pathLength:0}} animate={isInView && {pathLength:1}} transition={{duration:3}} d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="cyan" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></motion.path> </g></svg>
                </motion.div>
                <motion.form ref={form} onSubmit={sendEmail} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:3,duration:1}}>
                    <input type="text" name='name' placeholder='Your Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message" cols="30" rows="10" placeholder='Your Message' required></textarea>
                    <button type='submit'>Submit</button>
                </motion.form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact