package com.example.bookstore;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.stream.Stream;

public class DotenvLoader {

    public static void load() {
        try (Stream<String> stream = Files.lines(Paths.get(".env"))) {
            stream
                .filter(line -> line.contains("=") && !line.trim().startsWith("#"))
                .forEach(line -> {
                    String[] keyValue = line.split("=", 2);
                    String key = keyValue[0].trim();
                    String value = keyValue[1].trim();
                    System.setProperty(key, value); // this makes it accessible to Spring
                });
        } catch (IOException e) {
            System.out.println(".env file not found or error reading it: " + e.getMessage());
        }
    }
}
