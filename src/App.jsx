import './App.css';
import Home from './Components/Home';
import Movies from './Components/Movies';
import TV from './Components/TV';
import Categories from './Components/Categories';
import Sidebar from './Components/Sidebar';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="dashboard">
      <Sidebar />  {/* Sidebar component for navigation */}
      
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route to Home component */}
          <Route path="/movies" element={<Movies />} /> {/* Route to Movies component */}
          <Route path="/tv" element={<TV />} /> {/* Route to TV component */}
          <Route path="/categories" element={<Categories />} /> {/* Route to Categories component */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
