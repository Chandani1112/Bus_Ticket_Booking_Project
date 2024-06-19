// // src/components/ImageSlider.jsx
// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { BsArrowRightShort } from 'react-icons/bs';
// import { Link } from 'react-router-dom';

// const ImageSlider = ({ photos }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         {photos.map((photo) => (
//           <div key={photo.id}>
//             <img src={photo.src.large} alt={photo.alt} />
//             <div className='overlayInfo'>
//               <h3>{photo.photographer}</h3>
//               <Link to="/searchbus">
//                 <BsArrowRightShort className='icon' />
//               </Link>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ImageSlider;
