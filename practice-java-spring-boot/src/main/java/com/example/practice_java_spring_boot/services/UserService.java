package com.example.practice_java_spring_boot.services;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.example.practice_java_spring_boot.dtos.CreateUserRequestDto;
import com.example.practice_java_spring_boot.dtos.LoginRequestDto;
import com.example.practice_java_spring_boot.dtos.LoginResponseDto;
import com.example.practice_java_spring_boot.dtos.UpdateUserRequestDto;
import com.example.practice_java_spring_boot.dtos.UserResponseDto;
import com.example.practice_java_spring_boot.entities.Role;
import com.example.practice_java_spring_boot.entities.User;
import com.example.practice_java_spring_boot.repositories.UserJpaRepository;

import com.example.practice_java_spring_boot.repositories.RoleJpaRepository;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final UserJpaRepository userRepository;
    private final RoleJpaRepository roleRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public UserService(UserJpaRepository userRepository, RoleJpaRepository roleRepository,
            AuthenticationManager authenticationManager,
            JwtService jwtService) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    private UserResponseDto convertToDto(User user) {
        return UserResponseDto.builder()
                .id(user.getId().toString())
                .username(user.getUsername())
                .email(user.getEmail())
                .address(user.getAddress())
                .roles(null != user.getRoles() ? user.getRoles().stream()
                        .map(role -> role.getName())
                        .collect(Collectors.toSet()) : Collections.emptySet())
                .build();
    }

    private Set<Role> getRolesFromNames(Set<String> roleNames) {
        if (roleNames == null || roleNames.isEmpty()) {
            return Collections.emptySet();
        }

        return roleNames.stream()
                .map(roleName -> {
                    // First try to find existing role by name
                    return roleRepository.findByName(roleName)
                            .orElseGet(() -> {
                                // If role doesn't exist, create and save a new one
                                Role newRole = Role.builder()
                                        .name(roleName)
                                        .build();
                                return roleRepository.save(newRole);
                            });
                })
                .collect(Collectors.toSet());
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
                .username(createUserRequestDto.getUsername().toLowerCase())
                .email(createUserRequestDto.getEmail())
                .address(createUserRequestDto.getAddress())
                .password(createUserRequestDto.getPassword())
                .roles(getRolesFromNames(createUserRequestDto.getRoles()))
                .build();

        User savedUser = userRepository.save(user);
        return convertToDto(savedUser);
    }

    public UserResponseDto updateUser(Long id, UpdateUserRequestDto updateUserRequestDto) {
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return null;
        }

        if (updateUserRequestDto.getUsername() != null) {
            user.setUsername(updateUserRequestDto.getUsername());
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
        if (updateUserRequestDto.getRoles() != null && !updateUserRequestDto.getRoles().isEmpty()) {
            user.setRoles(getRolesFromNames(updateUserRequestDto.getRoles()));
        }

        User updatedUser = userRepository.save(user);
        return convertToDto(updatedUser);
    }

    public String deleteUser(Long id) {
        userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found with ID: " + id));
        userRepository.deleteById(id);
        return "User with ID " + id + " deleted successfully.";
    }

    public Optional<UserResponseDto> findByUsername(String username) {
        return userRepository.findByUsernameFetchRoles(username)
                .map(this::convertToDto);
    }

    public LoginResponseDto login(LoginRequestDto loginRequestDto) {
        // Spring Security sẽ check username + password
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequestDto.getUsername(),
                        loginRequestDto.getPassword()));

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        // Lấy user gốc từ DB
        User user = userRepository.findByUsername(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        String token = jwtService.generateAccessToken(user);

        return LoginResponseDto.builder()
                .id(user.getId()) // set id
                .username(user.getUsername()) // set username
                .email(user.getEmail()) // set email
                .accessToken(token) // set access token
                .tokenType("Bearer") // set token type
                .build();
    }
}
