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
public class Employee {
  @Id
  @JsonIgnore
  @Column(name = "empId")
  private Long EmpId;
  @Column(name = "empName")
  private String EmpName;
  private String Designation;

  @ManyToOne
  @JoinColumn(name = "quiz_id")
  private Quiz quiz;

  @OneToMany(mappedBy = "employee", cascade =  CascadeType.ALL)
  private List<Result> results;

  
  }