package com.example.practice_java_spring_boot.repositories;

import org.springframework.stereotype.Repository;

import com.example.practice_java_spring_boot.entities.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface UserJpaRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u JOIN FETCH u.roles WHERE LOWER(u.username) = LOWER(:username)")
    Optional<User> findByUsernameFetchRoles(@Param("username") String username);

    Optional<User> findByUsername(String username);
}
