

import React, { useState } from 'react';
import './busCard.css';
import Modal from 'react-modal';
import SelectSeat from '../SelectSeat/SelectSeat';

Modal.setAppElement('#root');  // Ensure accessibility compliance

const BusCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    boarding: false,
    amenities: false,
    cancellation: false,
    travel: false,
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const toggleDropdown = (type) => (e) => {
    e.stopPropagation(); // Prevent the event from bubbling up to the parent div
    setDropdownOpen((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  const closeDropdown = () => {
    setDropdownOpen({
      boarding: false,
      amenities: false,
      cancellation: false,
      travel: false,
    });
  };

  return (
    <div className="bus-card" onClick={closeDropdown}>
      <div className="bus-info">
        <div className="bus-header">
          <h3 className="bus-name">R S Yadav Smart Bus Pvt Ltd</h3>
          <p className="bus-type">VE AC Seater/Sleeper</p>
        </div>
        <div className="bus-timing">
          <div className="departure">
            <p className="bus-date">15 Jun</p>
            <p className="bus-time">21:45</p>
            <p className="bus-location">Noida</p>
          </div>
          <div className="duration">
            <p>12:30 Hrs</p>
          </div>
          <div className="arrival">
            <p className="bus-date">16 Jun</p>
            <p className="bus-time">10:15</p>
            <p className="bus-location">Azamgarh</p>
          </div>
        </div>
        <div className="bus-amenities">
          <span className="amenity" style={{ backgroundColor: 'green', color: 'white' }}>4.5 ★</span>
          <span className="amenity">1.6k</span>
          <span className="amenity">🥤</span>
          <span className="amenity">🍱</span>
          <button className="amenities-button" onClick={toggleDropdown('amenities')}>+2</button>
        </div>
        <div className="bus-policies">
          <div className="dropdown">
            <button onClick={toggleDropdown('boarding')}>Boarding & Dropping Points</button>
            <div className={`dropdown-content ${dropdownOpen.boarding ? 'show' : ''}`}>

              <div className="dropdown-section">
                <h4>Boarding Points</h4>
                <p>Red Hills Toll Gate</p>
                <p>13 Jun 2024 04:00</p>
                <p>Madhavaram</p>
                <p>13 Jun 2024 04:15</p>
                <p>Padi</p>
                <p>13 Jun 2024 04:25</p>
              </div>
              <div className="dropdown-section">
                <h4>Dropping Points</h4>
                <p>Chandanagar</p>
                <p>17:35</p>
                <p>Madeenaguda</p>
                <p>17:40</p>
                <p>Miyapur Blrm X Road</p>
                <p>17:45</p>
                <p>Nizampet</p>
                <p>17:50</p>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <button onClick={toggleDropdown('amenities')}>Amenities</button>
            <div className={`dropdown-content ${dropdownOpen.amenities ? 'show' : ''}`}>
            <div className="dropdown-section">
              <h4>Amenities</h4>
              <p>Free WiFi 📶</p>
              <p>Water Bottle 💧</p>
              <p>Snacks 🍪</p>
              <p>Blanket 🛏️</p>
            </div>
            </div>
          </div>
          <div className="dropdown">
            <button onClick={toggleDropdown('cancellation')}>Cancellation Policy</button>
            <div className={`dropdown-content ${dropdownOpen.cancellation ? 'show' : ''}`}>
              <div className="dropdown-section">
                <h4>Cancellation Policy</h4>
                <p>Full refund if canceled 24 hours before departure</p>
                <p>50% refund if canceled 12 hours before departure</p>
                <p>No refund if canceled within 12 hours of departure</p>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <button onClick={toggleDropdown('travel')}>Travel Policy</button>
            <div className={`dropdown-content ${dropdownOpen.travel ? 'show' : ''}`}>
              <div className="dropdown-section">
                <h4>Travel Policy</h4>
                <p>Carry a valid ID proof</p>
                <p>Wear a mask during the journey</p>
                <p>Follow COVID-19 guidelines</p>
                <p>Arrive at the boarding point 15 minutes early</p>
              </div>
            </div>
          </div>
        </div>
        <p className="bus-offer">Save min ₹50 with Flash Offer!</p>
      </div>
      <div className="bus-price-section">
        <p className="original-price">₹1299</p>
        <p className="discounted-price">₹1249</p>
        <p className="save-amount">Save ₹50</p>
        <button className="show-seats-button" onClick={openModal}>
          Show Seats
        </button>
        <p className="seats-available">38 Seats Available</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Select Seats"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-modal-button">
          &times;
        </button>
        <SelectSeat />
      </Modal>
    </div>
  );
};

export default BusCard;

