// src/components/BookList.js
import React, { useEffect, useState } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchType, setSearchType] = useState('title');

  // Fetch books from backend when component loads
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await api.get('/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const searchBooks = async () => {
    if (!searchText.trim()) {
      fetchBooks();
      return;
    }

    try {
      const response = await api.get(`/books/search/${searchType}?${searchType}=${searchText}`);
      setBooks(response.data);
    } catch (error) {
      console.error('Error searching books:', error);
      setBooks([]);
    }
  };

  const deleteBook = async (id) => {
    try {
      await api.delete(`/books/${id}`);
      fetchBooks(); // Refresh list after deletion
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <h2>All Books</h2>

      {/* 🔍 Search Bar */}
      <div className="row mb-3">
        <div className="col-md-3">
          <select className="form-select" value={searchType} onChange={(e) => setSearchType(e.target.value)}>
            <option value="title">Search by Title</option>
            <option value="author">Search by Author</option>
          </select>
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder={`Enter ${searchType}`}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary me-2" onClick={searchBooks}>Search</button>
          <button className="btn btn-secondary" onClick={fetchBooks}>Reset</button>
        </div>
      </div>

      {/* 📘 Book Table */}
      <table className="table table-hover table-bordered shadow-sm rounded">  
        <thead className="table-dark text-center small">
          <tr>
            <th>ID</th><th>Title</th><th>Author</th><th>Category</th><th>Price</th><th>Stock</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center text-muted">
                <i className="bi bi-emoji-frown"></i> No books found. Try adding one!
              </td>
            </tr>
          ) : (
            books.map(book => (
              <tr key={book.id}>
                <td>{book.id}</td><td>{book.title}</td><td>{book.author}</td>
                <td>{book.category}</td><td>{book.price}</td><td>{book.stock}</td>
                <td>
                  <Link to={`/edit/${book.id}`} className="btn btn-sm btn-outline-warning me-2">
                  <i className="bi bi-pencil-square"></i> Edit</Link>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => deleteBook(book.id)}>
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
