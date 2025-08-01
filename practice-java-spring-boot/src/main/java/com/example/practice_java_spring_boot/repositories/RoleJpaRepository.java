package com.example.practice_java_spring_boot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.practice_java_spring_boot.entities.Role;
import java.util.Optional;

public interface RoleJpaRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String name);
}
