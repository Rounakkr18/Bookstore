// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-color w-100 px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">📚 BookStore</Link>

        {/* Hamburger toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">All Books</Link>
            <Link className="nav-link" to="/add">
              <i className="bi bi-plus-circle"></i> Add Book
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
