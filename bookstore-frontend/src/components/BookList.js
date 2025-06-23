// src/components/BookList.js
import React, { useEffect, useState } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);

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
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">No books found.</td>
            </tr>
          ) : (
            books.map(book => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>{book.price}</td>
                <td>{book.stock}</td>
                <td>
                  <Link to={`/edit/${book.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                  <button className="btn btn-sm btn-danger" onClick={() => deleteBook(book.id)}>Delete</button>
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
