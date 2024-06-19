// Testimonial.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";

import img from '../../assets/about.jpg'

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor massa sed sem fermentum, ut faucibus enim hendrerit. Nullam non urna vitae leo scelerisque aliquam.",
      author: "John Doe",
      image: "img"
    },
    {
      id: 2,
      content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam sed arcu sem. Integer ut turpis lacinia, volutpat quam nec, lobortis mihkjklklk.",
      author: "Jane Smith",
      image: "img"
    },
    {
      id: 3,
      content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam sed arcu sem. Integer ut turpis lacinia, volutpat quam nec, lobortis migjhjkjk.",
      author: "Jane Smith",
      image: "img"
    },
    // Add more testimonials if needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className='section container'>
    <div className="testimonial-container">
      <h2 className='secTitle secIntro'>Testimonial</h2>

      
      <Slider {...settings}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial">
            <div className="testimonial-content">
              <p>{testimonial.content}</p>
              <p className="testimonial-author">- {testimonial.author}</p>
            </div>
            <img
              className="testimonial-image"
              src={img}
              alt={testimonial.author}
            />
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
};

export default Testimonial;
