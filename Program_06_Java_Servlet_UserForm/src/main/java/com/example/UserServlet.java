package com.example;

import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/user")
public class UserServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Get data from the form
        String name = request.getParameter("name");
        String email = request.getParameter("email");

        // Set response type
        response.setContentType("text/html");

        // Create output
        PrintWriter out = response.getWriter();
        out.println("<html>");
        out.println("<head>");
        out.println("<title>User Details</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>User Details</h1>");
        out.println("<p><b>Name:</b> " + name + "</p>");
        out.println("<p><b>Email:</b> " + email + "</p>");
        out.println("<br>");
        out.println("<a href='index.html'>Go Back</a>");
        out.println("</body>");
        out.println("</html>");
    }
}