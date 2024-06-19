
// Navbar.jsx
import React, { useState } from 'react';
import "./navbar.css";
import { MdModeOfTravel } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";
import LoginModal from '../Login/LoginModal';
import Signup  from '../Signup/Signup';

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [isSignupFormVisible, setSignupFormVisible] = useState(false);

  const showNav = () => {
    setActive(true);
  };

  const removeNav = () => {
    setActive(false);
  };

  const showLoginForm = () => {
    setLoginFormVisible(true);
  };

  const closeLoginForm = () => {
    setLoginFormVisible(false);
  };

  const showSignupForm = () => {
    setSignupFormVisible(true);
  };

  const closeSignupForm = () => {
    setSignupFormVisible(false);
  };

  const [transparent, setTransparent] = useState("header");
  const addbg = () => {
    if (window.scrollY >= 10) {
      setTransparent('header activeHeader');
    } else {
      setTransparent('header');
    }
  };
  window.addEventListener('scroll', addbg);

  return (
    <section className='navBarSection'>
      <div className={transparent}>
        <div className='logoDiv'>
          <Link to="/" className='logo'>
            <h1 className='flex'><MdModeOfTravel className="icon" />Global</h1>
          </Link>
        </div>
        <div className={isActive ? 'navBar activeNavbar' : 'navBar'}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <Link to="/" className='navLink'>Home</Link>
            </li>
            {/* <li className='navItem'>
              <Link href='#' className='navLink'>About us</Link>
            </li> */}
            <li className='navItem'>
              <Link to="/privacy-policy" className='navLink'>Privacy</Link>
            </li>
            <li className='navItem'>
              <Link to="/contact" className='navLink'>Contact</Link>
            </li>
            {/* <li className='navItem'>
              <Link href='#' className='navLink'>Gallery</Link>
            </li> */}
            <div className='headerBtns flex'>
              <button className='btn loginBtn' onClick={showLoginForm}>
                Login
              </button>
              <button className='btn loginBtn' onClick={showSignupForm}>
                Sign up
              </button>
            </div>
          </ul>
          <div onClick={removeNav} className='closeNavbar'>
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className='toggleNavbar'>
          <TbGridDots className="icon" />
        </div>
      </div>
      {isLoginFormVisible && <LoginModal closeForm={closeLoginForm} />}
      {isSignupFormVisible && <Signup closeForm={closeSignupForm} />}
    </section>
  );
};

export default Navbar;
