// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
// import AddBook from './components/AddBook';
// import EditBook from './components/EditBook';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          {/* <Route path="/" element={<h2>Welcome to the Bookstore 📚</h2>} /> */}
          <Route path="/" element={<BookList />} />
          {/* <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

