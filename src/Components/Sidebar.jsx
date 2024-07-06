import React from 'react';
import { Link } from 'react-router-dom';



const Sidebar = () => {
  return (
    <div className="sidebar">
        
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/tv">TV</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </div>
  );
};


export default Sidebar;
