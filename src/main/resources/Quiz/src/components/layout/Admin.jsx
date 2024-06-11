import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import '/home/gangadhar/quiz/src/main/resources/Quiz/src/components/layout/Common.css'

const Admin = () => {
	const navigate = useNavigate()
    const goToCreateQuiz= () =>{
        navigate('/create-quiz');
    }

    const goToHome =() => {
      navigate('/home')
    }
	return (
		<div className="admin-container">
			 <div className="admin-aside">
        <div className="admin-logo">
            <a><span>Admin</span></a>
        </div>
        <div className="nav-toggler">
            <span></span>
        </div>
        <ul className="nav">
            <li><a href="/Admin" className="active" ><i className="fa fa-home"></i>Home</a></li>
            <li><a href="/create-quiz"><i className="fa fa-list"></i>Quiz</a></li>
            <li><a href="/all-quizzes"><i className="fa fa-briefcase"></i>All Questions</a></li>
            <li><a href="#contact"><i className="fa fa-comments"></i>Result</a></li>
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
                <span className="button__text">Create Quiz</span>
                
            </button>	
        </div>	
        <div className="card-container">

      <main>
        <section className="cards">
          <div className="card">
            <div className="card__image-container">
              <img
                src="https://static.javatpoint.com/core/images/java-logo1.png"
              />
            </div>
            <div className="card__content">
              <p className="card__title text--medium">
                Java Quiz
              </p>
              <div className="card__info">
                <p className="text--medium">10 questions</p>
                <p className="card__price text--medium">Start</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__image-container">
              <img
                src="https://static.javatpoint.com/core/images/java-logo1.png"
              />
            </div>
            <div className="card__content">
              <p className="card__title text--medium">
                Java Quiz
              </p>
              <div className="card__info">
                <p className="text--medium">10 Questions</p>
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
          </div>
          
        </section>
      </main>


        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>
    </div>
		</div>
	)
}

export default Admin