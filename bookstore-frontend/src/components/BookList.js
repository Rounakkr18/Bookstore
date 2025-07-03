// src/components/BookList.js
import React, { useEffect, useState } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchType, setSearchType] = useState('title');

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
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      {/* <h2 className="mb-4 text-center">📚 All Books</h2> */}
      {/* <div className="text-center mb-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
          alt="Books Banner"
          style={{ width: '80px', height: '80px' }}
        />
        <h3 className="mt-2 fw-bold">Explore Our Collection</h3>
      </div> */}

      <div className="text-center mb-4 p-4 rounded" style={{ background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)', color: 'white' }}>
        <i className="bi bi-journal-bookmark-fill" style={{ fontSize: '2rem' }}></i>
        <h3 className="mt-2 fw-bold">Welcome to Bookstore</h3>
        <p className="small">Manage your collection easily</p>
      </div>


      {/* 🔍 Full-Width Responsive Search Bar */}
      <div className="container-fluid px-0">
        <div className="row g-2 align-items-center mb-4 mx-0">
          <div className="col-md-3 col-12">
            <select
              className="form-select form-select-sm w-100"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="title">Title</option>
              <option value="author">Author</option>
            </select>
          </div>

          <div className="col-md-5 col-12">
            <input
              type="text"
              className="form-control form-control-sm w-100"
              placeholder={`Search by ${searchType}...`}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          <div className="col-md-4 col-12 text-md-start text-center">
            <button
              className="btn btn-sm btn-primary me-2 mb-1"
              onClick={searchBooks}
            >
              <i className="bi bi-search"></i> Search
            </button>
            <button
              className="btn btn-sm btn-outline-secondary mb-1"
              onClick={fetchBooks}
            >
              <i className="bi bi-x-circle"></i> Reset
            </button>
          </div>
        </div>
      </div>



      {/* Book Cards */}
      <div className="container-fluid">
        <div className="row">
          <Link to="/add" className="btn btn-primary rounded-circle shadow-lg position-fixed"
          style={{ bottom: '30px', right: '30px', width: '55px', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', zIndex: 1000 }}
          title="Add Book">
          <i className="bi bi-plus-lg"></i>
          </Link>

          {books.length === 0 ? (
            <div className="text-center text-muted">
              <i className="bi bi-emoji-frown"></i> No books found. Try adding one!
            </div>
          ) : (
            books.map((book) => (
              <div key={book.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text small">
                      <strong>Author:</strong> {book.author}<br />
                      <strong>Category:</strong> {book.category}<br />
                      <strong>Price:</strong> ₹{book.price}<br />
                      <strong>Stock:</strong> {book.stock}
                    </p>
                    <div className="mt-auto">
                      <Link to={`/edit/${book.id}`} className="btn btn-sm btn-outline-warning me-2">
                        <i className="bi bi-pencil-square"></i> Edit
                      </Link>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => deleteBook(book.id)}>
                        <i className="bi bi-trash"></i> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>

  );
}

export default BookList;
