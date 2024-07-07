import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Sidebar.scss';
import { GoHome } from "react-icons/go";
import { LuClapperboard } from "react-icons/lu";
import { PiTelevisionSimple } from "react-icons/pi";
import { TiThMenu } from "react-icons/ti";
import Logo from '../images/disneylogo.svg'

const Sidebar = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // Mock data for the sidebar links
    const mockData = [
      { name: 'Home', icon: <GoHome />, url: '/' },
      { name: 'Movies', icon: <LuClapperboard />, url: '/movies' },
      { name: 'TV', icon: <PiTelevisionSimple />, url: '/tv' },
      { name: 'Categories', icon: <TiThMenu />, url: '/categories' },
    ];
    setLinks(mockData);
  }, []);

  return (
    <div className="sidebar">

      <img src={Logo} alt=""  className='Logo'/>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            
            {link.icon}
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
