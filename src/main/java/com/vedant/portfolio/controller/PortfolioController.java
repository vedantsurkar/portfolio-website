package com.vedant.portfolio.controller;

import com.vedant.portfolio.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    @GetMapping
    public String home(Model model) {
        model.addAttribute("hero", portfolioService.getHeroSection());
        model.addAttribute("about", portfolioService.getAboutSection());
        model.addAttribute("skills", portfolioService.getSkills());
        model.addAttribute("projects", portfolioService.getProjects());
        model.addAttribute("experience", portfolioService.getExperience());
        model.addAttribute("contact", portfolioService.getContactInfo());
        return "index";
    }
}