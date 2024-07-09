import './App.scss';
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
      <Sidebar />  
      
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/movies" element={<Movies />} /> 
          <Route path="/tv" element={<TV />} /> 
          <Route path="/categories" element={<Categories />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
