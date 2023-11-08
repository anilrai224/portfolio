import { useEffect, useState } from "react";
import {BiUpArrowAlt} from "react-icons/bi"
import './scrollTop.css'
import Fade from 'react-reveal/Fade'

function BackToTopButton() {
    
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(()=> {
        window.addEventListener("scroll",()=> {
            if(window.scrollY>100){
                setBackToTopButton(true);
            }else{
                setBackToTopButton(false);
            }
        })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }

    return <div className="App">
    {backToTopButton && (
        <Fade left><button className="scrollTop" onClick={scrollUp}><BiUpArrowAlt/></button></Fade>
    )}
    </div>;
}
export default BackToTopButton;