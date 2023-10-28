package main.java.com;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


public class MyServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("Hello world");
        request.getRequestDispatcher("/login.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

//        boolean isAuthenticated = authenticateUser(username, password);
//        if (isAuthenticated) {
//            // Store user information in a session
//            HttpSession session = request.getSession();
//            session.setAttribute("username", username);
//
//            // Send a success response
//            response.setStatus(HttpServletResponse.SC_OK);
//        }
//        else {
//            // Send an error response
//            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//        }
    }
}


