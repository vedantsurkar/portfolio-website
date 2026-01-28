package com.vedant.portfolio.model;

import lombok.Data;
import java.util.List;

@Data
public class SkillCategory {
    private String category;
    private List<String> skills;
}