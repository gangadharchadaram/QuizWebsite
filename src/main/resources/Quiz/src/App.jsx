import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import User from "./components/layout/User"
import TakeQuiz from "./components/layout/TakeQuiz"
import QuizResult from "./components/layout/QuizResult"
import GetAllQuiz from "./components/layout/GetAllQuiz"
import CreateQuiz from "/home/gangadhar/quiz/src/main/resources/Quiz/src/components/layout/CreateQuiz.jsx"
import UpdateQuestion from "./components/layout/UpdateQuestion"
import Home from "./components/layout/Home"
import Admin from "./components/layout/Admin"

function App() {
	return (
		<main>
			<Router>
				<Routes>
				<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/user" element={<User />} />
					<Route path="/take-quiz" element={<TakeQuiz />} />
					

					<Route path="/create-quiz" element={<CreateQuiz />} />
					<Route path="/update-quiz/:id" element={<UpdateQuestion />} />
					<Route path="/all-quizzes" element={<GetAllQuiz />} />
					<Route path="/quiz-result" element={<QuizResult />} />
				</Routes>
			</Router>
		</main>
	)
}

export default App