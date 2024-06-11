import React from "react"
import { useLocation} from "react-router-dom"
import '/home/gangadhar/quiz/src/main/resources/Quiz/src/components/layout/QuizResult.css';
import '/home/gangadhar/quiz/src/main/resources/Quiz/src/components/layout/Common.css'
import { useNavigate } from "react-router-dom";

 const QuizResult = () => {

    const navigate = useNavigate()
    const goToHome =() => {
        navigate('/home')
      }
		const location = useLocation()
		const { quizQuestions, totalScores } = location.state
		const numQuestions = quizQuestions.length
		const percentage = Math.round((totalScores / numQuestions) * 100)

		const handleRetakeQuiz = () => {
			alert("Oops! this functionality was not implemented!!!")
		}

		return (
			<section className="container mt-5">
                 <div className="admin-aside">
                    <div className="admin-logo">
                    <a><span>User</span></a>
                 </div>
                <div className="nav-toggler">
                    <span></span>
                </div>
                <ul className="nav">
                    <li><a href="/user" className="active"><i className="fa fa-home"></i>Home</a></li>
                    <li><a href="/take-quiz"><i className="fa fa-list"></i>Quiz</a></li>
                    <li><a href="/results"><i className="fa fa-briefcase"></i>Results</a></li>
                    <li><a href="#contact"><i className="fa fa-comments"></i>Contact</a></li>
                </ul>
                <button className="button login__submit">
                    <span className="button__text" onClick={() => goToHome()}>Log Out</span>
                    <i className="button__icon fa fa-sign-out"></i>
                </button>	
            </div>
    
            <div className="rside">
                <div className="header header-main">
                    <span className="button__text" onclick="getLogin()">Home</span>
                    <button className="create-quiz-button" onClick={() => goToCreateQuiz()}>
                        <span className="button__text">Take Quiz</span>
                
                    </button>	
            </div>
            <div className="quiz-result-container">
				<hr />
				<h5 className="text-info">
					You answered {totalScores} out of {numQuestions} questions correctly.
				</h5>
				<p>Your total score is {percentage}%.</p>

				<button className="btn btn-primary btn-sm" onClick={handleRetakeQuiz}>
					Retake this quiz
				</button>
            </div>
            </div>
			</section>
		)
 }

 export default QuizResult