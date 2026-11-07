package com.example;

import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;

public class Main {
    public static void main(String[] args) {
        SessionFactory factory = HibernateUtil.getSessionFactory();
        Session session = factory.openSession();

        // HQL: Retrieve all students
        String hql = "FROM Student";
        Query<Student> query = session.createQuery(hql, Student.class);
        List<Student> students = query.getResultList();

        System.out.println("----- All Students -----");
        for (Student student : students) {
            System.out.println(student);
        }

        // HQL: Retrieve students by name
        String hql2 = "FROM Student WHERE name = :studentName";
        Query<Student> query2 = session.createQuery(hql2, Student.class);
        query2.setParameter("studentName", "Ravi");
        List<Student> result = query2.getResultList();

        System.out.println("\n----- Student Named Ravi -----");
        for (Student student : result) {
            System.out.println(student);
        }

        session.close();
        factory.close();
    }
}