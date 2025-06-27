// src/components/AddBook.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function AddBook() {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
    price: '',
    stock: ''
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Optional basic validation
    if (!book.title || !book.author || book.price < 0 || book.stock < 0) {
      alert("Please fill all fields correctly.");
      return;
    }

    try {
      await api.post('/books', book);
      navigate('/'); // Redirect to homepage after adding
    } catch (error) {
      console.error('Error adding book:', error);
      alert("Failed to add book.");
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input type="text" className="form-control" name="title" value={book.title} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Author</label>
          <input type="text" className="form-control" name="author" value={book.author} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Category</label>
          <input type="text" className="form-control" name="category" value={book.category} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Price (₹)</label>
          <input type="number" step="0.01" className="form-control" name="price" value={book.price} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Stock</label>
          <input type="number" className="form-control" name="stock" value={book.stock} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-success">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
