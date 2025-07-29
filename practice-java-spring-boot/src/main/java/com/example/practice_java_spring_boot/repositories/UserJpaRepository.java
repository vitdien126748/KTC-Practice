package com.example.practice_java_spring_boot.repositories;

import org.springframework.stereotype.Repository;

import com.example.practice_java_spring_boot.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UserJpaRepository extends JpaRepository<User, Long> {
    // This class can be used
}
