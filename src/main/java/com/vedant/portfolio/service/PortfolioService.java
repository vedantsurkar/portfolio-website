package com.vedant.portfolio.service;

import com.vedant.portfolio.model.*;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class PortfolioService {

    public Map<String, String> getHeroSection() {
        Map<String, String> hero = new HashMap<>();
        hero.put("name", "Vedant Surkar");
        hero.put("title", "Java Backend Developer | Spring Boot");
        hero.put("tagline", "Building scalable backend systems");
        hero.put("githubUrl", "https://github.com/vedant-s");
        hero.put("linkedinUrl", "https://linkedin.com/in/vedant-s");
        hero.put("resumeUrl", "/files/resume.pdf");
        return hero;
    }

    public Map<String, String> getAboutSection() {
        Map<String, String> about = new HashMap<>();
        about.put("content", "I am a Java Backend Developer and final-year Electronics & Telecommunication Engineering student with hands-on experience in Spring Boot, REST APIs, and MySQL. I enjoy designing clean backend architectures, building scalable APIs, and solving DSA problems in Java. Currently seeking Java Backend / Spring Boot opportunities.");
        return about;
    }

    public List<SkillCategory> getSkills() {
        List<SkillCategory> skills = new ArrayList<>();

        // Backend
        SkillCategory backend = new SkillCategory();
        backend.setCategory("Backend");
        backend.setSkills(Arrays.asList("Java", "Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs"));
        skills.add(backend);

        // Database
        SkillCategory database = new SkillCategory();
        database.setCategory("Database");
        database.setSkills(Arrays.asList("MySQL", "SQL"));
        skills.add(database);

        // Tools
        SkillCategory tools = new SkillCategory();
        tools.setCategory("Tools");
        tools.setSkills(Arrays.asList("Git & GitHub", "Postman", "IntelliJ IDEA"));
        skills.add(tools);

        return skills;
    }

    public List<Project> getProjects() {
        List<Project> projects = new ArrayList<>();

        Project project1 = new Project();
        project1.setId("project1");
        project1.setTitle("SmartLPD – Smart License Plate Detection");
        project1.setDescription("Role-based backend system with REST APIs for fine management and data processing");
        project1.setTechnologies(new String[]{"Java", "Spring Boot", "MySQL"});
        project1.setGithubUrl("https://github.com/vedant-s/smart-lpd");
        project1.setDemoUrl("");
        project1.setHasDemo(false);
        projects.add(project1);

        Project project2 = new Project();
        project2.setId("project2");
        project2.setTitle("Smart Vehicle Number Plate Detection");
        project2.setDescription("Real-time number plate detection with OCR-based text extraction");
        project2.setTechnologies(new String[]{"YOLOv8", "OpenCV", "Python"});
        project2.setGithubUrl("https://github.com/vedant-s/vehicle-plate-detection");
        project2.setDemoUrl("");
        project2.setHasDemo(false);
        projects.add(project2);

        return projects;
    }

    public List<Experience> getExperience() {
        List<Experience> experiences = new ArrayList<>();

        Experience exp1 = new Experience();
        exp1.setCompany("Smartkey LLP");
        exp1.setRole("Backend Developer Intern");
        exp1.setDuration("Remote");
        exp1.setDescription("Worked on backend services using Java and Spring Boot. Built REST APIs and database operations using JPA.");
        exp1.setRemote(true);
        experiences.add(exp1);

        return experiences;
    }

    public Map<String, String> getContactInfo() {
        Map<String, String> contact = new HashMap<>();
        contact.put("email", "vedantsurkar724@gmail.com");
        contact.put("linkedin", "https://www.linkedin.com/in/vedant-surkar-b054911b6/");
        contact.put("github", "https://github.com/vedantsurkar");
        return contact;
    }
}