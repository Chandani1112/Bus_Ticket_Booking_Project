// LoginForm.jsx
import React, { useState } from 'react';
import "./login.css";
import { AiFillCloseCircle } from "react-icons/ai";

const LoginModal= ({ closeForm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="loginFormOverlay">
      <div className="loginFormContainer">
        <AiFillCloseCircle className="closeIcon" onClick={closeForm} />
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="btn submitBtn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
