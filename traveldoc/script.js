import React, { useState } from 'react';
import axios from 'axios';

const FlightSearch = () => {
  const [destination, setDestination] = useState('');
  const [flights, setFlights] = useState([]);

  const searchFlights = async () => {
    try {
      const response = await axios.get(`YOUR_SKYSCANNER_API_ENDPOINT`);
      setFlights(response.data);
    } catch (error) {
      console.error('Error fetching flight data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <button onClick={searchFlights}>Search Flights</button>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>{flight.name} - {flight.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default FlightSearch;
