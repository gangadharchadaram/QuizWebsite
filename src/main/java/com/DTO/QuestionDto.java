package com.DTO;

public class QuestionDto {

    private Long questionId;

    private String question;


    private String questionType;

   
    public QuestionDto() {
    }

    public QuestionDto(Long questionId, String question, String questionType) {
        this.questionId = questionId;
        this.question = question;
        this.questionType = questionType;
    }



    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

 

    public void setQuestionType(String questionType) {
        this.questionType = questionType;
    }

    public Long getQuestionId() {
        return questionId;
    }

    public String getQuestion() {
        return question;
    }

    

    public String getQuestionType() {
        return questionType;
    }
    
}
