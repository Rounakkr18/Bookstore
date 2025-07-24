package com.example.bookstore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookstore.model.Book;
import com.example.bookstore.service.BookService;
// @CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "https://bookstore-one-alpha.vercel.app/")
@RestController
@RequestMapping("/api/books")
public class BookController {
    @Autowired
    private BookService service;

    @GetMapping
    public List<Book> getAll() {
        return service.getAllBooks();
    }

    @GetMapping("/{id}")
    public Book getById(@PathVariable Long id) {
        return service.getBookById(id);
    }

    @GetMapping("/search/title")
    public List<Book> searchByTitle(@RequestParam String title) {
        return service.searchByTitle(title);
    }

    @GetMapping("/search/author")
    public List<Book> searchByAuthor(@RequestParam String author) {
        return service.searchByAuthor(author);
    }

    @PostMapping
    public Book create(@RequestBody Book book) {
        return service.saveBook(book);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteBook(id);
    }

    // ✅ Update book
    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id, @RequestBody Book updatedBook) {
        return service.updateBook(id, updatedBook);
    }
}
