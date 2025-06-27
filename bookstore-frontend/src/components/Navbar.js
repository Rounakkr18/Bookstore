// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css'; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-color px-4">
      <Link className="navbar-brand" to="/">📚 BookStore</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">All Books</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add"><i className="bi bi-plus-circle"></i> Add Book</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
