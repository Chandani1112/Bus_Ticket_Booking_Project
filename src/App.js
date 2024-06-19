
import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
 import Home from './components/Home/Home'
 import About from './components/About/About'
 import Blog from './components/Blog/Blog'
 import Footer from './components/Footer/Footer'
 import Offers from './components/Offers/Offers'
 import Popular from './components/Popular/Popular'
import Testimonial from './components/Testimonial/Testimonial'
import './components/Navbar/navbar.css';
import Counpon from './components/Counpon/Counpon'

const App = () => {

  
  return (
  <>
   <Navbar/>
   <Home/>
   {/* <Counpon/> */}
   <Popular/>
   <Offers/>
    <About/>
  <Blog/> 
  <Testimonial/>
   <Footer/> 
  </>
  )
}

export default App

