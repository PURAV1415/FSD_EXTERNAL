# Program 10: Hibernate Query Language (HQL)

## Description
Demonstrates the use of Hibernate Query Language (HQL) to retrieve all students and filter students by a specific name.

## Files
- `src/main/java/com/example/Student.java`: Entity class.
- `src/main/java/com/example/HibernateUtil.java`: SessionFactory utility.
- `src/main/java/com/example/Main.java`: Implementation of HQL queries.
- `src/main/resources/hibernate.cfg.xml`: Configuration.
- `pom.xml`: Dependencies.

## How to Run
1. Ensure MySQL and `college` database exist.
2. Build and run `Main.java`.

## Expected Output
Console output listing all students and then specifically those named "Ravi".