import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'
import Aboutme from './components/aboutme/Aboutme'
import Contact from './components/contact/Contact'
import ScrollTop from './scrollTop'
import Cursor from './components/cursor/Cursor'

const App = () => {
  return (
    <>
    <Header/>
    <Cursor/>
    <ScrollTop/>
    <Hero/> 
    <Aboutme/>   
    <Main/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App