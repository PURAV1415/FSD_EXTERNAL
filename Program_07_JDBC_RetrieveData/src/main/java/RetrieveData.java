import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class RetrieveData {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/college";
        String username = "root";
        String password = "root";
        try {
            // 1. Connect to the database
            Connection con = DriverManager.getConnection(url, username, password);
            // 2. Create Statement
            Statement stmt = con.createStatement();
            // 3. Execute SELECT query
            String sql = "SELECT * FROM students";
            ResultSet rs = stmt.executeQuery(sql);
            // 4. Retrieve and display records
            System.out.println("Student Details");
            System.out.println("-------------------------");
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                String email = rs.getString("email");
                System.out.println("ID: " + id + ", Name: " + name + ", Email: " + email);
            }
            // 5. Close resources
            rs.close();
            stmt.close();
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}