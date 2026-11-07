package com.example;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

public class Main {
    public static void main(String[] args) {
        SessionFactory factory = HibernateUtil.getSessionFactory();
        Session session = factory.openSession();
        Transaction transaction = session.beginTransaction();

        Student student = new Student(1, "Ravi", "ravi@gmail.com");
        session.persist(student);

        transaction.commit();
        session.close();
        factory.close();
        System.out.println("Student saved successfully!");
    }
}