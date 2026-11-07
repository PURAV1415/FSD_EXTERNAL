# Program 9: Hibernate Basic Application

## Description
A Hibernate application that defines a `Student` entity and persists a record into a MySQL database.

## Files
- `src/main/java/com/example/Student.java`: Entity class.
- `src/main/java/com/example/HibernateUtil.java`: SessionFactory utility.
- `src/main/java/com/example/Main.java`: Application entry point.
- `src/main/resources/hibernate.cfg.xml`: Hibernate configuration.
- `pom.xml`: Maven dependencies.

## How to Run
1. Ensure MySQL is running and `college` database exists.
2. Build and run `Main.java`.

## Expected Output
Console: "Student saved successfully!"
Database: Record inserted into `student` table.