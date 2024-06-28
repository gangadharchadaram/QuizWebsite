package com.quiz.repository;

import com.quiz.model.Question;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;




public interface QuestionRepository  extends JpaRepository<Question, Long> {

    List<Question> findByQuestionId(Long id);
    
}