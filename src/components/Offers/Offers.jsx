import React,{useEffect} from 'react'
import "./offers.css"
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa6";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import img from "../../assets/offer.jpg"

import Aos from 'aos'
import 'aos/dist/aos.css'


const Offer =[
{
  id:1,
  imgSrc:img,
  stTdeitle:"Noida",
  location:"Noida",
  price:"$7,670",
},
{
  id:2,
  imgSrc:img,
  stTdeitle:"Noida",
  location:"Delhi",
  price:"$7,870",
},
{
  id:3,
  imgSrc:img,
  stTdeitle:"Noida",
  location:"Noida",
  price:"$7,800",
},
]

const Offers = () => {

  useEffect(() =>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className='offer container section'>
      <div className='secContainer'>
        <div className='secIntro'>
          <h2 className='secTitle'>
            Special Offers
          </h2>
          <p>Famous Historical cities to natural
            specteculars ,come see the best of the world!
          </p>
        </div>
        <div className='mainContent grid'>
         
         {
          Offer.map(({id,imgSrc,stTdeitle,location,price}) =>{
            return( 
            <div data-aos='fade-up'data-aos-duration="3000"className='singleOffer'>
            <div className='destImage'>
              <img src={imgSrc} alt={stTdeitle} />
              <span className='discount'>
                30% Off
              </span>
            </div>
            <div className='offerBody'>
              <div className='price flex'>
                <h4>
                  {price}
                </h4>
                <span className="status">
                  For Rent
                </span>
              </div>
              <div className='amenities flex'>
                <div className='singleAmenity flex'>
                  <MdKingBed className='icon' />
                  <small>2 beds</small>
                </div>

                <div className='singleAmenity flex'>
                  <MdBathtub className='icon' />
                  <small>1 bath</small>
                </div>

                <div className='singleAmenity flex'>
                  <FaWifi className='icon' />
                  <small>Wi-fi</small>
                </div>

                <div className='singleAmenity flex'>
                  <MdAirportShuttle className='icon' />
                  <small>Shuttle</small>
                </div>
              </div>

              <div className='location flex'>
                <MdLocationOn className='icon' />
                <small>Sector 64 ,{location}</small>
              </div>
       
       <button className='btn flex'>
        View Details
        <BsArrowRightShort className='icon'/>
        </button>

            </div>
          </div>)
          })
         }
        
        </div>
      </div>
    </section>
  )
}

export default Offers