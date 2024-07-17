import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import './Courses';
import './Cyber';
import './Devops';
import './Software';
const Header = () => {
  return (
    <header className="header">
      <h1>Guvi Online Training Institute</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/courses">Full stack Development</Link>
        <Link to="/Cyber">Cyber security</Link>
        <Link to="/software">Software Development</Link>
        <Link to="/devops">Devops</Link>
      </nav>
    </header>
  );
};

export default Header;


