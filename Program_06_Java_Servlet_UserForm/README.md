# Program 6: Java Servlet User Form

## Description
A Java Servlet application that processes a registration form via a POST request and displays the submitted name and email on a new page.

## Files
- `src/main/webapp/index.html`: The user registration form.
- `src/main/java/com/example/UserServlet.java`: Servlet handling the POST request.
- `pom.xml`: Maven configuration with Servlet API dependency.

## How to Run
1. Build the project using Maven: `mvn clean package`
2. Deploy the resulting `.war` file to a Tomcat server.
3. Access `index.html` and submit the form.

## Expected Output
- A new page displaying: "User Details", "Name: [entered name]", and "Email: [entered email]".