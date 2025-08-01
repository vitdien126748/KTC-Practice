package com.example.practice_java_spring_boot.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.practice_java_spring_boot.dtos.CreateRoleRequestDto;
import com.example.practice_java_spring_boot.dtos.RoleResponseDto;
import com.example.practice_java_spring_boot.dtos.UpdateRoleRequestDto;
import com.example.practice_java_spring_boot.entities.Role;
import com.example.practice_java_spring_boot.repositories.RoleJpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RoleService {

    @Autowired
    private RoleJpaRepository roleRepository;

    public RoleResponseDto createRole(CreateRoleRequestDto dto) {
        Role role = new Role();
        role.setName(dto.getName());
        Role saved = roleRepository.save(role);
        return new RoleResponseDto(saved.getId(), saved.getName());
    }

    public List<RoleResponseDto> getAllRoles() {
        return roleRepository.findAll()
                .stream()
                .map(r -> new RoleResponseDto(r.getId(), r.getName()))
                .collect(Collectors.toList());
    }

    public Optional<RoleResponseDto> getRoleById(Long id) {
        return roleRepository.findById(id)
                .map(r -> new RoleResponseDto(r.getId(), r.getName()));
    }

    public Optional<RoleResponseDto> updateRole(Long id, UpdateRoleRequestDto dto) {
        return roleRepository.findById(id).map(role -> {
            role.setName(dto.getName());
            Role updated = roleRepository.save(role);
            return new RoleResponseDto(updated.getId(), updated.getName());
        });
    }

    public boolean deleteRole(Long id) {
        if (roleRepository.existsById(id)) {
            roleRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
