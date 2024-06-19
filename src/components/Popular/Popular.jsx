

import React, { useEffect, useState } from 'react';
import './popular.css';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsDot } from 'react-icons/bs';
import img from '../../assets/p1.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Delhi',
    location: 'Delhi',
    grade: 'Delhi',
  },
  {
    id: 2,
    imgSrc: img,
    destTitle: 'Delhi',
    location: 'Delhi',
    grade: 'Delhi',
  },
  {
    id: 3,
    imgSrc: img,
    destTitle: 'Delhi',
    location: 'Delhi',
    grade: 'Delhi',
  },
  {
    id: 4,
    imgSrc: img,
    destTitle: 'Delhi',
    location: 'Delhi',
    grade: 'Delhi',
  },
  {
    id: 5,
    imgSrc: img,
    destTitle: 'Delhi',
    location: 'Delhi',
    grade: 'Delhi',
  },
  {
    id: 6,
    imgSrc: img,
    destTitle: 'Delhi',
    location: 'Delhi',
    grade: 'Delhi',
  },
  // Add more data as needed
];

const Popular = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleNextSlide = () => {
    const newIndex = slideIndex + 4 >= Data.length ? 0 : slideIndex + 4;
    setSlideIndex(newIndex);
  };

  const handlePrevSlide = () => {
    const newIndex = slideIndex - 4 < 0 ? Data.length - 4 : slideIndex - 4;
    setSlideIndex(newIndex);
  };

  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>Super discounts and rewards after every bus ride.</p>
          </div>

          <div data-aos="fade-left" data-aos-duration="2500" className="iconDiv flex">
            <BsArrowLeftShort className="icon leftIcon" onClick={handlePrevSlide} />
            <BsArrowRightShort className="icon" onClick={handleNextSlide} />
          </div>
        </div>
        <div className="mainContent grid">
          {Data.slice(slideIndex, slideIndex + 4).map(({ id, imgSrc, destTitle, location, grade }) => {
            return (
              <div data-aos="fade-up" className="singleDestination" key={id}>
                <div className="destImage">
                  <img src={imgSrc} alt="Image title" />
                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <Link to="/searchbus">
                      <BsArrowRightShort className="icon" />
                    </Link>
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">0{id}</div>
                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
