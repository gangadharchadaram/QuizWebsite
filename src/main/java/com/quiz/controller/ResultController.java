package com.quiz.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import com.quiz.model.Result;
import com.quiz.repository.ResultRepository;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/result")
public class ResultController {

  @Autowired
  private ResultRepository resultRepository;

  @PostMapping("/")
  public Result saveResult(@RequestBody Result result){
    resultRepository.save(result);
    return result;
  }


  @GetMapping("/")
  public List<Result> getScores() throws Exception{
    return resultRepository.findAll();
  }


   @GetMapping("/{id}")
  public Result getScoreById(@PathVariable("id") Long resultId){
  
     var result= resultRepository.findById(resultId);
     if(result.isPresent())
     {
      return result.get();
     }
     else
     {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Id not found");
     }

  }

}















