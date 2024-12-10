import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <img src={`${process.env.PUBLIC_URL}/header.png`} alt="Header" className="header-image" />
    </div>
  );
};

export default Home;     