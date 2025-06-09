package com.example.bookstore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bookstore.model.Book;
import com.example.bookstore.repository.BookRepository;

@Service
public class BookService {
    @Autowired
    private BookRepository repo;

    public List<Book> getAllBooks() {
        return repo.findAll();
    }

    public Book getBookById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public List<Book> searchByTitle(String title) {
        return repo.findByTitleContainingIgnoreCase(title);
    }

    public List<Book> searchByAuthor(String author) {
        return repo.findByAuthorContainingIgnoreCase(author);
    }

    public Book saveBook(Book book) {
        return repo.save(book);
    }

    public void deleteBook(Long id) {
        repo.deleteById(id);
    }
}

