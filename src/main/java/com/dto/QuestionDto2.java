package com.dto;

import java.util.List;


public class QuestionDto2 {

    private String question;
    
    private String questionType;

    private List< String> choices;

    
    private List<String> correctAnswers;

    

    public QuestionDto2() {
    }

    

    public QuestionDto2(String question, String questionType, List<String> choices, List<String> correctAnswers) {
        this.question = question;
        this.questionType = questionType;
        this.choices = choices;
        this.correctAnswers = correctAnswers;
    }



    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getQuestionType() {
        return questionType;
    }

    public void setQuestionType(String questionType) {
        this.questionType = questionType;
    }

    public List<String> getChoices() {
        return choices;
    }

    public void setChoices(List<String> choices) {
        this.choices = choices;
    }

    public List<String> getCorrectAnswers() {
        return correctAnswers;
    }

    public void setCorrectAnswers(List<String> correctAnswers) {
        this.correctAnswers = correctAnswers;
    }

    
}
