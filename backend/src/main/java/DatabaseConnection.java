package main.java;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    public static void main(String args[]) throws SQLException {
        try {
            Connection connection = null;
            String url = "jdbc:mysql://localhost:3306/dynamicdata";
            String user = "root";
            String password = "hrhk";
            connection = DriverManager.getConnection(url, user, password);
            System.out.println(connection);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
