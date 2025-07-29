package com.example.practice_java_spring_boot.controllers;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/demo")
public class DemoController {

    String message = "Hello, World!";

    public DemoController() {
        // Default constructor
    }

    @GetMapping("/message")
    public String getMessage() {
        return message;
    }

    @PostMapping("/setMessage")
    public String setMessage(@RequestBody String message) {
        this.message = message;
        return "Message set to: " + this.message;
    }

    @PutMapping("/updateMessage")
    public String updateMessage(@RequestBody String message) {
        this.message = message;
        return "Message updated to: " + this.message;
    }

    @DeleteMapping("/deleteMessage")
    public String deleteMessage() {
        String oldMessage = this.message;
        this.message = null; // Clear the message
        return "Message deleted: " + oldMessage;
    }
}
