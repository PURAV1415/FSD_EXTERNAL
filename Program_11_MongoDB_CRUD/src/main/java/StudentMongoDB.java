import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

public class StudentMongoDB {
    public static void main(String[] args) {
        String connectionString = "mongodb://localhost:27017";
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            MongoDatabase database = mongoClient.getDatabase("college");
            MongoCollection<Document> collection = database.getCollection("students");

            // 1. INSERT STUDENT
            Document student = new Document("name", "Ravi")
                    .append("age", 22)
                    .append("course", "Java");
            collection.insertOne(student);
            System.out.println("Student inserted successfully!");

            // 2. RETRIEVE ALL STUDENTS
            System.out.println("\nStudent Details");
            System.out.println("-------------------------");
            FindIterable<Document> students = collection.find();
            for (Document doc : students) {
                System.out.println("Name   : " + doc.getString("name"));
                System.out.println("Age    : " + doc.getInteger("age"));
                System.out.println("Course : " + doc.getString("course"));
                System.out.println("-------------------------");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}