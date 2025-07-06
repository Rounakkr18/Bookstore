package com.example.bookstore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BookstoreApplication {
    public static void main(String[] args) {
        DotenvLoader.load(); // Load .env before app starts
        SpringApplication.run(BookstoreApplication.class, args);
    }
}
