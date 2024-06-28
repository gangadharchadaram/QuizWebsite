package com.quiz.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Result {
  @Id
  @JsonIgnore
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long resultId;

  @NotBlank
  private long Score;

  @ManyToOne
  @JoinColumn(name = "EmpId")
  private Employee employee;
}