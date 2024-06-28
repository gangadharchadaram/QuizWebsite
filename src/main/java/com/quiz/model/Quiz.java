package com.quiz.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Quiz {
  @Id
  @JsonIgnore
  @Column(name = "quiz_id")
  private int QuizId;
  @Column(name = "no_of_questions")
  private int NoOfQuestions;


  @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL)
  private List<Employee> employees;

  @ManyToOne
  @JoinColumn(name="subject_id")
  private Subject subject;
}







