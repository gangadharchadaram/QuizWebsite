package com.quiz.controller;

import com.DTO.QuestionDto;
import com.DTO.QuestionDto2;
import com.quiz.model.Question;
import com.quiz.repository.QuestionRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/questions")
public class QuestionController {
    @Autowired
    private QuestionRepository questionRepository;

    @GetMapping("/")
    public List<QuestionDto> getAllQuestions() {
       
        List<Question> questions = questionRepository.findAll();
        List<QuestionDto> questionDto=new ArrayList<>();
        for (Question q : questions) {
            QuestionDto qDto=new QuestionDto();
            qDto.setQuestionId(q.getQuestionId());
            qDto.setQuestionType(q.getQuestionType());
            qDto.setQuestion(q.getQuestion());
            questionDto.add(qDto);  
        }
        return questionDto;
    }

    @GetMapping("/{id}")
    public List<QuestionDto> getQuestionById(@PathVariable Long id){
        List<Question> theQuestion = questionRepository.findByQuestionId(id);
        List<QuestionDto> qDto=new ArrayList<>();
        for (Question question : theQuestion) {
            QuestionDto q=new QuestionDto();
            q.setQuestionId(question.getQuestionId());
            q.setQuestion(question.getQuestion());
            q.setQuestionType(question.getQuestionType());
            qDto.add(q);
        }
        return qDto;
    }
    


    @PostMapping("/create-new-question")
    public Question createQuestion( @RequestBody QuestionDto2 questionDto) {
        try {
            Question question = new Question();
            question.setQuestion(questionDto.getQuestion());
            question.setQuestionType(questionDto.getQuestionType());
            question.setChoices(questionDto.getChoices());
            question.setCorrectAnswers(questionDto.getCorrectAnswers());
            return questionRepository.save(question);
        } catch (Exception e) {
            e.printStackTrace();
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid data");
        }
    }

    @PutMapping("/{id}/update")
    public Question updateQuestion(
            @PathVariable Long id, @RequestBody QuestionDto2 question) {
        Optional<Question> updatedQuestion = questionRepository.findById(id);
        if(updatedQuestion.isPresent()){
            var q = updatedQuestion.get();
            q.setQuestion(question.getQuestion());
            q.setQuestionType(question.getQuestionType());
            q.setChoices(question.getChoices());
            q.setCorrectAnswers(question.getCorrectAnswers());
            questionRepository.save(q);
            return q;
        }
        else{
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid Data");
        }
    }



    @DeleteMapping("/{id}")
    public void deleteQuestion(@PathVariable("id") Long id){

        List<Question>  qu=questionRepository.findByQuestionId(id);
        if(qu==null)
        {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "id not found");
        }
        else{
            questionRepository.deleteById(id);;
        }

    }

}







