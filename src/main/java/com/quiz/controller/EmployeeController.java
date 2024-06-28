package com.quiz.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import com.quiz.model.Employee;
import com.quiz.repository.EmployeeRepository;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/employee")
public class EmployeeController {


  @Autowired
  private EmployeeRepository empRepo;

  @PostMapping("/")
    public Employee saveEmployee(@RequestBody Employee employee) {
        try {
          empRepo.save(employee);
          return employee;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid Data..");
        }
    }

  @GetMapping("/")
  public List<Employee> getEmployees(){
    return empRepo.findAll();
  }
  @GetMapping("/{id}")
  public Optional<Employee> getEmployeeById(@PathVariable("id") Long id){
      Optional<Employee> e=empRepo.findById(id);
      return e;
  }
  @PutMapping("/{id}")
  public Employee updateEmployee(@PathVariable("id") Long id, @RequestBody Employee employee){

    Optional<Employee> e=empRepo.findById(id);
    if(e.isPresent())
    {
      var emp=e.get();
      emp.setEmpName(employee.getEmpName());
      emp.setDesignation(employee.getDesignation());
      empRepo.save(emp);
      return emp;
    }
    
    else
    {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Emp ID Not Found");
    }

  }
  @DeleteMapping("/{id}/delete")
  public void deleteEmpolyee(@PathVariable("id") Long id){
    Optional<Employee> e=empRepo.findById(id);
    if(e.isPresent())
    {
      empRepo.deleteById(id);
    }
    else
    {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Id Not Found");
    }
  }
}