package com.example.practice_java_spring_boot.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // cho phép tất cả endpoint
                        .allowedOrigins("http://localhost:5173") // cho phép frontend React gọi
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // method cho phép
                        .allowedHeaders("*") // header cho phép
                        .allowCredentials(true); // cho phép gửi cookie/authorization header
            }
        };
    }
}
