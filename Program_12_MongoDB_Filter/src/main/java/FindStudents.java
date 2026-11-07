import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

public class FindStudents {
    public static void main(String[] args) {
        String connectionString = "mongodb://localhost:27017";
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            MongoDatabase database = mongoClient.getDatabase("college");
            MongoCollection<Document> collection = database.getCollection("students");

            Document filter = new Document("age", new Document("$gt", 20));

            System.out.println("Students older than 20");
            System.out.println("-------------------------");
            for (Document student : collection.find(filter)) {
                System.out.println("Name   : " + student.getString("name"));
                System.out.println("Age    : " + student.getInteger("age"));
                System.out.println("Course : " + student.getString("course"));
                System.out.println("-------------------------");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}