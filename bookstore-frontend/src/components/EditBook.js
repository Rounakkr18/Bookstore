// src/components/EditBook.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

function EditBook() {
  const { id } = useParams();         // Get book ID from URL
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
    price: '',
    stock: ''
  });

  useEffect(() => {
    // Fetch the book details to pre-fill the form
    const fetchBook = async () => {
      try {
        const response = await api.get(`/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book:', error);
        alert('Failed to load book.');
      }
    };

    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/books/${id}`, book);
      navigate('/');
    } catch (error) {
      console.error('Error updating book:', error);
      alert('Failed to update book.');
    }
  };

  return (
    <div>
      <h2>Edit Book</h2>
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

        <button type="submit" className="btn btn-primary">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
