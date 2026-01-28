package com.vedant.portfolio.model;

import lombok.Data;

@Data
public class Experience {
    private String company;
    private String role;
    private String duration;
    private String description;
    private boolean remote;
}