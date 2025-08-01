package com.example.practice_java_spring_boot.controllers;

import org.springframework.web.bind.annotation.*;

import com.example.practice_java_spring_boot.dtos.CreateUserRequestDto;
import com.example.practice_java_spring_boot.dtos.UpdateUserRequestDto;
import com.example.practice_java_spring_boot.dtos.UserResponseDto;
import com.example.practice_java_spring_boot.services.UserService;

import jakarta.validation.Valid;

import java.util.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping
    public List<UserResponseDto> getAll() {
        return service.getAllUsers();
    }

    @GetMapping("/id/{id}")
    public UserResponseDto getById(@PathVariable Long id) {
        return service.getUserById(id);
    }

    @PostMapping
    public UserResponseDto create(@RequestBody @Valid CreateUserRequestDto createUserRequestDto) {
        return service.createUser(createUserRequestDto);
    }

    @PutMapping("/{id}")
    public UserResponseDto update(@PathVariable @Valid Long id,
            @RequestBody @Valid UpdateUserRequestDto updateUserRequestDto) {
        return service.updateUser(id, updateUserRequestDto);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        return service.deleteUser(id);
    }

    @GetMapping("/username/{username}")
    public Optional<UserResponseDto> findByUsername(@PathVariable String username) {
        return service.findByUsername(username);
    }
}
