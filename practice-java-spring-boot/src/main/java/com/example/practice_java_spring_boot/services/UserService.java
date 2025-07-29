package com.example.practice_java_spring_boot.services;

import org.springframework.stereotype.Service;

import com.example.practice_java_spring_boot.dtos.CreateUserRequestDto;
import com.example.practice_java_spring_boot.dtos.UpdateUserRequestDto;
import com.example.practice_java_spring_boot.dtos.UserResponseDto;
import com.example.practice_java_spring_boot.entities.User;
import com.example.practice_java_spring_boot.repositories.UserJpaRepository;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final UserJpaRepository userRepository;

    public UserService(UserJpaRepository userRepository) {
        this.userRepository = userRepository;
    }

    private UserResponseDto convertToDto(User user) {
        return UserResponseDto.builder()
                .id(user.getId().toString())
                .name(user.getName())
                .email(user.getEmail())
                .address(user.getAddress())
                .build();
    }

    public List<UserResponseDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public UserResponseDto getUserById(Long id) {
        User user = userRepository.findById(id).orElse(null);
        return user != null ? convertToDto(user) : null;
    }

    public UserResponseDto createUser(CreateUserRequestDto createUserRequestDto) {
        User user = User.builder()
                .name(createUserRequestDto.getName())
                .email(createUserRequestDto.getEmail())
                .address(createUserRequestDto.getAddress())
                .password(createUserRequestDto.getPassword())
                .build();

        User savedUser = userRepository.save(user);
        return convertToDto(savedUser);
    }

    public UserResponseDto updateUser(Long id, UpdateUserRequestDto updateUserRequestDto) {
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return null;
        }

        if (updateUserRequestDto.getName() != null) {
            user.setName(updateUserRequestDto.getName());
        }
        if (updateUserRequestDto.getEmail() != null) {
            user.setEmail(updateUserRequestDto.getEmail());
        }
        if (updateUserRequestDto.getAddress() != null) {
            user.setAddress(updateUserRequestDto.getAddress());
        }
        if (updateUserRequestDto.getPassword() != null) {
            user.setPassword(updateUserRequestDto.getPassword());
        }

        User updatedUser = userRepository.save(user);
        return convertToDto(updatedUser);
    }

    public String deleteUser(Long id) {
        userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found with ID: " + id));
        userRepository.deleteById(id);
        return "User with ID " + id + " deleted successfully.";
    }
}
