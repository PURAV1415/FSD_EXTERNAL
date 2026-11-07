# Program 8: Spring Boot REST API

## Description
A simple Spring Boot application that provides a REST endpoint (`/hello`) returning a welcome message.

## Files
- `src/main/java/com/example/demo/HelloSpringBootApplication.java`: Main entry point.
- `src/main/java/com/example/demo/HelloController.java`: REST Controller with GET endpoint.
- `pom.xml`: Maven configuration for Spring Boot.

## How to Run
1. Run `mvn spring-boot:run` or execute the `HelloSpringBootApplication` class.
2. Open browser and visit `http://localhost:8080/hello`.

## Expected Output
Browser displays: "Welcome to Spring Boot REST API!"