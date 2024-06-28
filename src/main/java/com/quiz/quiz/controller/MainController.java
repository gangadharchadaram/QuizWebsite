package com.quiz.quiz.controller;

import org.springframework.stereotype.Controller;

@Controller
public class MainController {
    public String getHome(){
        return "index.html";
    }

    public String getLogin(){
        return "login.html";   
    }
    
}
