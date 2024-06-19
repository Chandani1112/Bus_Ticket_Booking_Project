import React,{useState} from 'react';
import './sidebar.css';
import Findbus from '../Findbus/BusCard';

const Sidebar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleClear = () => {
    setFilters({
      search: '',
      sortBy: '',
      pickupTime: '',
      busType: '',
      wifi: false,
      charging: false,
      restroom: false,
    });
  };

  return (
    
    <section className='sidebar'>
      
      <h4>Filter Buses</h4>
      <div className='filter-group'>
        <label htmlFor='search'>Search</label>
        <input
          type='text'
          id='search'
          name='search'
          placeholder='Search...'
          value={filters.search}
          onChange={handleChange}
        />
      </div>
      <div className='filter-group'>
        <label htmlFor='sortBy'>Sort by Price</label>
        <select id='sortBy' name='sortBy' value={filters.sortBy} onChange={handleChange}>
          <option value=''>Select</option>
          <option value='lowToHigh'>Low to High</option>
          <option value='highToLow'>High to Low</option>
        </select>
      </div>
      <div className='filter-group'>
        <label htmlFor='pickupTime'>Pickup Time</label>
        <input type='time' id='pickupTime' name='pickupTime' value={filters.pickupTime} onChange={handleChange} />
      </div>
      <div className='filter-group'>
        <label htmlFor='busType'>Bus Type</label>
        <select id='busType' name='busType' value={filters.busType} onChange={handleChange}>
          <option value=''>Select</option>
          <option value='AC'>AC</option>
          <option value='Non-AC'>Non-AC</option>
        </select>
      </div>
      <div className='filter-group'>
        <label htmlFor='busType'>Bus Partner</label>
        <select id='busType' name='busType' value={filters.busType} onChange={handleChange}>
          <option value=''>Select</option>
          <option value='AC'>Intercity</option>
          <option value='Non-AC'>Abhi Bus</option>
        </select>
      </div>
      <div className='filter-group'>
        <label htmlFor='facilities'>Facilities</label>
        <div className='checkbox-group'>
          <div>
            <input type='checkbox' id='wifi' name='wifi' checked={filters.wifi} onChange={handleChange} />
            <label htmlFor='wifi'>WiFi</label>
          </div>
          <div>
            <input type='checkbox' id='charging' name='charging' checked={filters.charging} onChange={handleChange} />
            <label htmlFor='charging'>Charging Point</label>
          </div>
          <div>
            <input type='checkbox' id='restroom' name='restroom' checked={filters.restroom} onChange={handleChange} />
            <label htmlFor='restroom'>Restroom</label>
          </div>
        </div>
      </div>
      <button className='search-button' onClick={() => alert('Searching buses...')}>
        Search Bus
      </button>
      <button className='clear-button' onClick={handleClear}>
        Clear
      </button>
   
    </section>
    
  );
};

const App = () => {
  const [filters, setFilters] = useState({
    search: '',
    sortBy: '',
    pickupTime: '',
    busType: '',
    wifi: false,
    charging: false,
    restroom: false,
  });

  return (
    <div className='app'>
      <Sidebar filters={filters} setFilters={setFilters} />
      {/* Add other components or content here */}
    </div>
  );
};

export default App;

