// SignupForm.jsx
//import React, { useState } from 'react';
import "./signup.css";
import { AiFillCloseCircle } from "react-icons/ai";

const SignupForm = ({ closeForm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="signupFormOverlay">
      <div className="signupFormContainer">
        <AiFillCloseCircle className="closeIcon" onClick={closeForm} />
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="btn submitBtn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
