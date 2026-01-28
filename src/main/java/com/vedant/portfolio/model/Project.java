package com.vedant.portfolio.model;

import lombok.Data;

@Data
public class Project {
    private String id;
    private String title;
    private String description;
    private String[] technologies;
    private String githubUrl;
    private String demoUrl;
    private boolean hasDemo;
}