// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './searchBus.css';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import Dropdown from '../Home/Dropdown';
// import Navbar from '../Navbar/Navbar';
// import Sidebar from '../Sidebar/Sidebar';
// import Footer from '../Footer/Footer';
// import BusCard from '../Findbus/BusCard';

// const SearchBus = () => {
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [date, setDate] = useState('');
//   const [cityList, setCityList] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     Aos.init({ duration: 2000 });
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.first.org/data/v1/countries');
//         const data = await response.json();
//         // Transform the fetched data to match the expected format
//         const transformedData = Object.keys(data.data).map(key => ({
//           id: key,
//           name: data.data[key].country
//         }));
//         setCityList(transformedData);
//       } catch (error) {
//         console.error('Error fetching the city list:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleSearch = () => {
//     navigate('/searchbus', { state: { from, to, date } });
//   };

//   return (
//     <>
//     <Navbar/>
//       <section className='search'>
//         <div className='secContainer container'>
//           <div className='homeCard grid'>
//             <div className='locationDiv'>
//               <label htmlFor='from'>From</label>
//               <Dropdown options={cityList} value={from} onChange={setFrom} placeholder="From" />
//             </div>
//             <div className='distDiv'>
//               <label htmlFor='to'>To</label>
//               <Dropdown options={cityList} value={to} onChange={setTo} placeholder="To" />
//             </div>
//             <div className='priceDiv'>
//               <label htmlFor='date'>Date</label>
//               <input type='date' id='date' value={date} onChange={(e) => setDate(e.target.value)} placeholder='Date' />
//             </div>
//             <button className='btn' onClick={handleSearch}>
//               Find Bus
//             </button>
           
//           </div>
//         </div>
//       </section>
//       <BusCard/>
//       <Sidebar/>
//       <Footer/>
//     </>
//   );
// };

// export default SearchBus;





// src/components/SearchBus/SearchBus.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchBus.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Dropdown from '../Home/Dropdown';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import BusCard from '../Findbus/BusCard';

const SearchBus = () => {
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
      <Navbar />
      <section className="search">
        <div className="secContainer container">
          <div className="homeCard grid">
            <div className="locationDiv">
              <label htmlFor="from">From</label>
              <Dropdown options={cityList} value={from} onChange={setFrom} placeholder="From" />
            </div>
            <div className="distDiv">
              <label htmlFor="to">To</label>
              <Dropdown options={cityList} value={to} onChange={setTo} placeholder="To" />
            </div>
            <div className="priceDiv">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" />
            </div>
            <button className="btn" onClick={handleSearch}>
              Find Bus
            </button>
          </div>
        </div>
      </section>
      <div className="main-content">
        <Sidebar />
        <div className="bus-card-section">
          <BusCard />
          {/* Add more BusCard components as needed */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchBus;



