import React from 'react';
import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div>
      <Link to='/motorcycles'>List all motorcycles</Link>
    </div>
  );
}

export default Home;