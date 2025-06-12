// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Bookstore</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Books</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add">Add Book</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
