import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './selectseat.css';


const SelectSeat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [currentDeck, setCurrentDeck] = useState('lower');
  const navigate = useNavigate();

  const handleSeatClick = (seat) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seat)
        ? prevSelectedSeats.filter((s) => s !== seat)
        : [...prevSelectedSeats, seat]
    );
  };

  const handleConfirmSeats = () => {
    // Redirect to the checkout page when "Confirm Seats" button is clicked
    navigate('/checkout');
  };

  const renderLowerDeckSeats = () => {
    const seats = [];
    for (let i = 1; i <= 20; i++) {
      const seatClass = selectedSeats.includes(i)
        ? 'seat selected'
        : 'seat available';
      seats.push(
        <div
          key={i}
          className={seatClass}
          onClick={() => handleSeatClick(i)}
        ></div>
      );
    }
    return seats;
  };

  const renderUpperDeckSeats = () => {
    const seats = [];
    for (let i = 21; i <= 40; i++) {
      const seatClass = selectedSeats.includes(i)
        ? 'seat selected'
        : 'seat available';
      seats.push(
        <div
          key={i}
          className={seatClass}
          onClick={() => handleSeatClick(i)}
        ></div>
      );
    }
    return seats;
  };

  return (
    <div className="seat-selection-container">
   
      <div className="content">
        <div className="seat-layout">
          <div className="seat-layout-header">
            <button
              className={`deck-button ${
                currentDeck === 'lower' ? 'active' : ''
              }`}
              onClick={() => setCurrentDeck('lower')}
            >
              Lower Deck
            </button>
            <button
              className={`deck-button ${
                currentDeck === 'upper' ? 'active' : ''
              }`}
              onClick={() => setCurrentDeck('upper')}
            >
              Upper Deck
            </button>
          </div>
          <div className="seats">
            {currentDeck === 'lower' && renderLowerDeckSeats()}
            {currentDeck === 'upper' && renderUpperDeckSeats()}
          </div>
          <div className="seat-legend">
            <span className="legend-item available"></span> Available
            <span className="legend-item booked"></span> Booked
            
            <span className="legend-item selected"></span> Selected
            <span className="legend-item ladies"></span> Booked by Ladies
            <span className="legend-item male"></span> For Male
          </div>
        </div>
        <div className="seat-form">
          <h3>Global Travels</h3>
          <p>Bharat Benz A-C Sleeper (2+1)</p>
          <p>
            Date: <span> - </span> Time: <span> - </span>
          </p>
          <form>
            <label htmlFor="boarding-point">Select Boarding Point</label>
            <select id="boarding-point">
              <option value="">Select Boarding Points</option>
              {/* Add your options here */}
            </select>
            <label htmlFor="dropping-point">Select Dropping Point</label>
            <select id="dropping-point">
              <option value="">Select Dropping Points</option>
              {/* Add your options here */}
            </select>
            <button type="button" className="confirm-seats-button"
            onClick={handleConfirmSeats}>
              Confirm Seats
            </button>
          </form>
        </div>
      </div>
  
    </div>
  );
};

export default SelectSeat;



