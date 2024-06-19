

import React, { useState } from 'react';
import './checkoutPage.css';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    passengerName1: '',
    passengerName2: '',
    age1: '',
    age2: '',
    mobileNumber: '',
    email: '',
    employeeStudent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="checkout-page">
      <div className="left-section">
        <div className="checkout-header">
          <h2>Checkout</h2>
          <button className="policy-button">Cancellation Policy</button>
        </div>
        <div className="bus-detail">
          <div className="bus-info">
            <img src="Global-logo.png" alt="Global Logo" className="bus-logo" />
            <span className='myspan'>Volvo A/C Semi Sleeper (2+2)</span>
          </div>
          <div className="bus-route">
            <div>
              <span className='myflex'>Noida</span>
              <span>13 Jun | 09:15 PM</span>
            </div>
            <span className="arrow">&#x2192;</span>
            <div>
              <span className='myflex'>Azamgarh</span>
              <span>14 Jun | 05:40 AM</span>
            </div>
          </div>
          <div className="booking-details">
            <span>Booking Details</span>
            <span>Lounge Access</span>
          </div>
        </div>
        <div className="fare-breakup">
          <h3>Fare Breakup</h3>
          <div className="fare-item">
            <span>Total Base Fare</span>
            <span>₹3022</span>
          </div>
          <div className="fare-item discount">
            <span>Coupon discount</span>
            <span>-₹362</span>
          </div>
          <div className="fare-item total-fare">
            <span>Total Fare</span>
            <span>₹2660</span>
          </div>
          <div className="fare-item">
            <span>Total GST</span>
            <span>₹133</span>
          </div>
          <div className="fare-item">
            <span>Travel Protection</span>
            <span>₹50</span>
          </div>
        </div>
      </div>
      <div className="right-section">
        <form onSubmit={handleSubmit}>
          <div className="form-section passenger-details">
            <h3>Passenger Details</h3>
            <div className="form-group">
              <label htmlFor="passengerName1">S38</label>
              <input
                type="text"
                id="passengerName1"
                name="passengerName1"
                placeholder="Enter Full Name"
                value={formData.passengerName1}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                id="age1"
                name="age1"
                placeholder="Age"
                value={formData.age1}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="passengerName2">S37</label>
              <input
                type="text"
                id="passengerName2"
                name="passengerName2"
                placeholder="Enter Full Name"
                value={formData.passengerName2}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                id="age2"
                name="age2"
                placeholder="Age"
                value={formData.age2}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-section contact-details">
            <h3>Contact Details</h3>
            <div className="form-group">
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email ID"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group verify">
              <input
                type="checkbox"
                id="employeeStudent"
                name="employeeStudent"
                checked={formData.employeeStudent}
                onChange={handleChange}
              />
              <label htmlFor="employeeStudent">Are you an employee or a student?</label>
              <button type="button" className="verify-button">Verify</button>
            </div>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
