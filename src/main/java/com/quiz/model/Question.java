


package com.quiz.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Getter
@Setter
@Entity
public class Question {
    
    @Id@GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long questionId;
    @NotBlank
    private String question;
    
    @NotBlank
    private String questionType;

    @ElementCollection
    private List<String> choices;

    @ElementCollection
    private List<String> correctAnswers;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Subject> subjects;


    
}