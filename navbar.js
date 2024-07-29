import React from 'react';
import './sty.css'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#"><img src="logo1.jpg" alt="Lanterna Logo" height="50" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav">
        
          <li className="nav-item"></li>
          <li className="nav-item">
            <a className="nav-link" href="#">How It Works</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Tutors</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Subjects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Prices</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Why Lanterna</a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Login</a>
          </li>
          <li className="nav-item">
            <span className="navbar-divider"></span> 
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Talk with Advisor</a>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-dark ml-2 custom-btn">Book Now</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
