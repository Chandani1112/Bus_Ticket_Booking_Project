
// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Dropdown from './Dropdown';


const Home = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [cityList, setCityList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.first.org/data/v1/countries');
        const data = await response.json();
        // Transform the fetched data to match the expected format
        const transformedData = Object.keys(data.data).map(key => ({
          id: key,
          name: data.data[key].country
        }));
        setCityList(transformedData);
      } catch (error) {
        console.error('Error fetching the city list:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    navigate('/searchbus', { state: { from, to, date } });
  };

  return (
    <>
      <section className='home'>
        <div className='secContainer container'>
          <div className='homeText'>
            <h1 data-aos='fade-up' className='title'>
              Travel Easy with Global Smart Ticket
            </h1>
            <p data-aos='fade-up' data-aos-duration="2500" className='subTitle'>
              Your Journey Starts Here. Find Your Ride, Change Your Destination!
            </p>
            <button className='btn'>
              <Link to="/contact">Explore Now</Link>
            </button>
          </div>
          <div className='homeCard grid'>
            <div className='locationDiv'>
              <label htmlFor='from'>From</label>
              <Dropdown options={cityList} value={from} onChange={setFrom} placeholder="From" />
            </div>
            <div className='distDiv'>
              <label htmlFor='to'>To</label>
              <Dropdown options={cityList} value={to} onChange={setTo} placeholder="To" />
            </div>
            <div className='priceDiv'>
              <label htmlFor='date'>Date</label>
              <input type='date' id='date' value={date} onChange={(e) => setDate(e.target.value)} placeholder='Date' />
            </div>
            <button className='btn' onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;


