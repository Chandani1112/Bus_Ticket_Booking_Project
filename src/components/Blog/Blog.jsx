import React,{useEffect} from 'react'
import "./blog.css"

import { BsArrowRightShort } from "react-icons/bs";

//import image -------------
import img from "../../assets/p2.png"
import img2 from "../../assets/p3.jpg"
import img3 from "../../assets/p4.jpg"
import img4 from "../../assets/p5.jpg"

import Aos from 'aos'
import 'aos/dist/aos.css'

// going to use map method ------------------------

const posts =[
  {
    id:1,
    postImage:img,
    title:' beauty of your journeys in a unique and informative manner.',
    desc:'a blog thats specifically dedicated to travel in some capacity Travel bloggers share stories,tips and tricks about traveling There are a ton of different sub niches.'
  },
  {
    id:2,
    postImage:img2,
    title:' beauty of your journeys in a unique and informative manner.',
    desc:'a blog thats specifically dedicated to travel in some capacity Travel bloggers share stories,tips and tricks about traveling There are a ton of different sub niches.'
  },
  {
    id:3,
    postImage:img3,
    title:' beauty of your journeys in a unique and informative manner.',
    desc:'a blog thats specifically dedicated to travel in some capacity Travel bloggers share stories,tips and tricks about traveling There are a ton of different sub niches.'
  },
  {
    id:4,
    postImage:img4,
    title:' beauty of your journeys in a unique and informative manner.',
    desc:'a blog thats specifically dedicated to travel in some capacity Travel bloggers share stories,tips and tricks about traveling There are a ton of different sub niches.'
  },
]

const Blog = () => {

  useEffect(() =>{
    Aos.init({duration:2000})
  },[])

  return (
   <section className='blog container section'>
    <div className='secContainer'>
      <div className='secIntro'>
        <h2 className='secTitle'>
   Our Best Blog?
        </h2>
        <p >
          An insight to the incredible experience in the world.
        </p>
      </div>
      <div className='mainContainer grid'>
       {
        posts.map(({id,postImage, title, desc}) =>{
          return(
            <div data-aos='fade-up'data-aos-duration="2000"className='singlePost grid'>
            <div className='imgDiv'>
              <img src={postImage} alt={title}/>
            </div>
  
            <div className='postDetails'>
          <h3 data-aos='fade-up'data-aos-duration="3000">
            {title}
          </h3>
          <p data-aos='fade-up'data-aos-duration="4000">
          {desc}
          </p>
            </div>
            <a href='' className='flex'data-aos='fade-up'data-aos-duration="4500">
              Read more
              <BsArrowRightShort className="icon"/>
            </a>
  
          </div>
          )
        })
       }

      </div>

    </div>
    
   </section>
  )
}

export default Blog