import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import Movies from './Movies';
import TV from './TV';
import Categories from './Categories';

const Dashboard = () => {

  return (

    <div className="dashboard">
        < Sidebar />

       

        <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/categories" element={< Categories />} />
        </Routes>
        </div>
    </div>

  )
  
};

export default Dashboard;
