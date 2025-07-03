// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper d-flex flex-column min-vh-100">
        <Navbar />
        <main className="container-fluid px-4 flex-grow-1 mt-4 mb-5">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/edit/:id" element={<EditBook />} />
          </Routes>
        </main>
        <footer className="footer text-center text-black py-3 footer-color">
          <small>© 2025 YourBookstore. All rights reserved.</small>
        </footer>
      </div>
    </Router>
  );
}

export default App;

