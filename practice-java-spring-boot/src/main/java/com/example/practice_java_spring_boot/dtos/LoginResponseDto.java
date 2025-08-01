package com.example.practice_java_spring_boot.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponseDto {
    private Long id;
    private String username;
    private String email;
    private String accessToken;
    @Builder.Default
    private String tokenType = "Bearer";

    public LoginResponseDto(String accessToken) {
        this.accessToken = accessToken;
    }

}
