import React from 'react'
import './cursor.css'
import {motion} from 'framer-motion'
import { useState } from 'react'
import { useEffect } from 'react'

const Cursor = () => {
    const [position,setPosition] = useState({x:0,y:0})

    useEffect(()=>{
        const mouseMove = (e)=>{
            setPosition({x:e.clientX,y:e.clientY});
        }
        window.addEventListener('mousemove',mouseMove);
        return ()=>{
            window.addEventListener('mousemove',mouseMove);
        };
    },[])
  return (
    <motion.div className='cursor' animate={{x:position.x,y:position.y,transition:{
        duration:0.2,
    }}}>
        
    </motion.div>
  )
}

export default Cursor 