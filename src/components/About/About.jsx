import React,{useEffect} from 'react'
import "./about.css"
import img from "../../assets/cust.png"
import video from "../../assets/video.mp4"

import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() =>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className='about section'>
  <div className='secContainer'>
     <h2 className='title'>
     Bus Operators
  </h2>

  <div className='mainContent container grid'>

    <div className='singleItem'>
      <img src={img} alt='image name'/>
      <h3> Operators Name</h3>
      <p>Lorem ipsum dolor  
       </p>
    </div>

    <div className='singleItem'>
      <img src={img} alt='image name'/>
      <h3>Operators Name</h3>
      <p>Lorem ipsum dolor 
       </p>
    </div>

    <div className='singleItem'>
      <img src={img} alt='image name'/>
      <h3>Operators Name</h3>
      <p>Lorem ipsum dolor </p>
    </div>

  </div>

  <div className='videoCard container'> 
  <div className='cardContent grid'>
    <div className='cardText'>
      <h2>Wonderful experience house in there!</h2>
      <p>Lorem ipsum dolor sit, amet consectat sed am 
        distinctio quas blanditiis in necessitatibus odit.</p>

    </div>
  <div className='cardVedio'>
    {/* <video src={video} autoplay loop muted type="vedio/mp4"></video> */}

     <video width="640" height="360" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video> 
  </div>
  </div>

  </div>
  </div>
    </section>
  )
}

export default About