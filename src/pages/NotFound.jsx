// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css'
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link to="/" className="back-home">← Back to Home</Link>
    </div>
  );
};

export default NotFound;
