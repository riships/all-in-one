package main.java;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    public static void main(String args[]) throws SQLException {
        try {
            // Load the MySQL JDBC driver
//            class.("com.mysql.jdbc.Driver");
            Connection connection = null;
            String url = "jdbc:mysql://localhost:3306/dynamicdata";
            String user = "root";
            String password = "hrhk";
            connection = DriverManager.getConnection(url, user, password);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
