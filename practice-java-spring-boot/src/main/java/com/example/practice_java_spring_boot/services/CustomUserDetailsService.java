package com.example.practice_java_spring_boot.services;

import org.springframework.stereotype.Service;

import com.example.practice_java_spring_boot.entities.User;
import com.example.practice_java_spring_boot.repositories.UserJpaRepository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    public final UserJpaRepository userJpaRepository;

    public CustomUserDetailsService(UserJpaRepository userJpaRepository) {
        this.userJpaRepository = userJpaRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userJpaRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));

        List<GrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(role -> {
            // Nếu dùng @PreAuthorize("hasAuthority('Administrators')") thì
            authorities.add(new SimpleGrantedAuthority(role.getName()));

            // Nếu dùng @PreAuthorize("hasRole('Administrators')") thì authorities.add(new
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getName()));
        });

        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getUsername())
                .password(user.getPassword())
                .authorities(authorities)
                .build();
    }
}
