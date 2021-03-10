import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Motorcycles(props) {
  const [motorcycles, setMotorcycles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/motorcycles')
    .then((response) => {
      setMotorcycles(response.data);
    })
    .catch((err) => {
      console.error(err);
    })
  })

  return (
    <div>
      Motorcycles
      {motorcycles.map((motorcycle) => (
        <div>
        <h1>{motorcycle.name}</h1>
        <h2>{motorcycle.brand}</h2>
        <h3>{motorcycle.type}</h3>
        <img src={motorcycle.image} alt='motorcycle' />
        </div>
      ))}
    </div>
  );
}

export default Motorcycles;