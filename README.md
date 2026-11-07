# FSD Lab Manual Implementation

This repository contains the implementation of 12 programs as specified in the FSD Lab Manual.

## Folder Structure

- `Program_01_jQuery_TextChange/`: jQuery text manipulation.
- `Program_02_React_Class_Instance/`: ReactJS class and instances.
- `Program_03_React_Calculator/`: ReactJS basic calculator.
- `Program_04_React_Events/`: ReactJS event handling.
- `Program_05_React_VotingSystem/`: ReactJS voting application.
- `Program_06_Java_Servlet_UserForm/`: Java Servlet form processing.
- `Program_07_JDBC_RetrieveData/`: JDBC MySQL data retrieval.
- `Program_08_SpringBoot_HelloAPI/`: Spring Boot REST API.
- `Program_09_Hibernate_BasicApp/`: Hibernate basic persistence.
- `Program_10_Hibernate_HQL/`: Hibernate Query Language (HQL).
- `Program_11_MongoDB_CRUD/`: MongoDB basic CRUD.
- `Program_12_MongoDB_Filter/`: MongoDB filtered retrieval.

## How to Run Programs

### Frontend Programs (1-5)
- **Program 1**: Open `index.html` in a browser.
- **Programs 2-5**: 
  1. Navigate to the program folder.
  2. Run `npm install`.
  3. Run `npm run dev`.
  4. Open the URL provided by Vite in your browser.

### Backend Programs (6-12)
- **Program 6**: Deploy the `.war` file to a Tomcat server.
- **Programs 7-12**: Use Maven to build and run the main class.
  - `mvn clean compile`
  - `mvn exec:java -Dexec.mainClass="ClassName"`

## Dependencies & Requirements
- **Java**: JDK 21
- **Frontend**: Node.js & npm
- **Database**: MySQL 8.0+, MongoDB 6.0+
- **Server**: Apache Tomcat (for Program 6)
- **Build Tool**: Maven
