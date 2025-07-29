package com.example.practice_java_spring_boot.dtos;

import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdateUserRequestDto {
    private String name;

    @Email(message = "Email should be valid")
    private String email;

    private String address;

    private String password;

}
