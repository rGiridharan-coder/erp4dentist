import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/main.css';
import LandingForm from '../components/LandingForm';


const LandingHeader = ({ onSignupClick }) => {
const navRef = useRef(null);

const handleNavLinkClick = () => {
  if (navRef.current && navRef.current.classList.contains('show')) {
    // Close Bootstrap collapse manually
    const collapseEl = new window.bootstrap.Collapse(navRef.current, { toggle: false });
    collapseEl.hide();
  }
};

  return (
    <>
      <div className="hd-top">
        <div className="container">
            <p>India's #1 Dental Software for New Clinics</p>
        </div>
      </div>

      <nav className="navbar navbar-expand-xl navbar-light land-head">
        <div className="container">
          <img src="/images/logo.webp" alt="Logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav">
  <li className="nav-item">
    <a
      className="nav-link"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
        handleNavLinkClick();
      }}
    >
      Overview
    </a>
  </li>
  <li className="nav-item">
    <a
      className="nav-link"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById('prdfeature')?.scrollIntoView({ behavior: 'smooth' });
        handleNavLinkClick();
      }}
    >
      Product Features
    </a>
  </li>
  <li className="nav-item">
    <a
      className="nav-link"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById('benefit')?.scrollIntoView({ behavior: 'smooth' });
        handleNavLinkClick();
      }}
    >
      Benefits
    </a>
  </li>
  <li className="nav-item">
    <a
      className="nav-link"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
        handleNavLinkClick();
      }}
    >
      FAQ
    </a>
  </li>
</ul>

          <div className='hd-btn'>
            <a className='btns land trl' href='#' onClick={onSignupClick}>Free Trial</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LandingHeader;
