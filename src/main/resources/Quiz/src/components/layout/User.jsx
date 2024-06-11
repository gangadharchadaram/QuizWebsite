import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSubjects } from "../../utils/QuizService";
import '/home/gangadhar/quiz/src/main/resources/Quiz/src/components/layout/User.css'
import '/home/gangadhar/quiz/src/main/resources/Quiz/src/components/layout/Common.css'


const User = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [selectedSubject, setSelectedSubject] = useState("");
	const [selectedNumQuestions, setSelectedNumQuestions] = useState("");
	const [subjects, setSubjects] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetchSubjectData();
	}, []);

	const fetchSubjectData = async () => {
		try {
			const subjectsData = await getSubjects();
			setSubjects(subjectsData || []); // Ensure subjectsData is always an array
		} catch (error) {
			console.error(error);
			setSubjects([]); // Ensure subjects is set to an empty array on error
		}
	};

	const handleNext = () => {
		if (currentStep === 3) {
			if (selectedSubject && selectedNumQuestions) {
				navigate("/take-quiz", { state: { selectedNumQuestions, selectedSubject } });
			} else {
				alert("Please select a subject and number of questions.");
			}
		} else {
			setCurrentStep((prevStep) => prevStep + 1);
		}
	};

	const handlePrevious = () => {
		setCurrentStep((prevStep) => prevStep - 1);
	};

	const handleSubjectChange = (event) => {
		setSelectedSubject(event.target.value);
	};

	const handleNumQuestionsChange = (event) => {
		setSelectedNumQuestions(event.target.value);
	};

	const renderStepContent = () => {
		switch (currentStep) {
			case 1:
				return (
					<div>
						<h3 className="text-info mb-2">I want to take a quiz on :</h3>
						<select
							className="form-select"
							value={selectedSubject}
							onChange={handleSubjectChange}>
							<option value="">Select a subject</option>
							{subjects.length > 0 && subjects.map((subject) => (
								<option key={subject} value={subject}>
									{subject}
								</option>
							))}
						</select>
					</div>
				);
			case 2:
				return (
					<div>
						<h4 className="text-info mb-2">How many questions would you like to attempt?</h4>
						<input
							type="number"
							className="form-control"
							value={selectedNumQuestions}
							onChange={handleNumQuestionsChange}
							placeholder="Enter the number of questions"
						/>
					</div>
				);
			case 3:
				return (
					<div className="text-format">
						<h2>Confirmation</h2>
						<p>Subject: {selectedSubject}</p>
						<p>Number of Questions: {selectedNumQuestions}</p>
					</div>
				);
			default:
				return null;
		}
	};

	const renderProgressBar = () => {
		const progress = currentStep === 3 ? 100 : ((currentStep - 1) / 2) * 100;
		return (
			<div className="progress">
				<div
					className="progress-bar"
					role="progressbar"
					style={{ width: `${progress}%` }}
					aria-valuenow={progress}>
					Step {currentStep}
				</div>
			</div>
		);
	};

	return (
		<div className="mt-5">
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
					<li><a href="#portfolio"><i className="fa fa-briefcase"></i>Results</a></li>
					<li><a href="#contact"><i className="fa fa-comments"></i>Contact</a></li>
				</ul>
				<button className="button login__submit" onClick={() => navigate("/home")}>
					<span className="button__text">Log Out</span>
					<i className="button__icon fa fa-sign-out"></i>
				</button>
			</div>

			<div className="rside">
				<div className="header header-main">
					<span className="button__text" onClick={() => navigate("/")}>Welcome to LMS Quiz</span>
				</div>
				<div className="take-quiz-container">
					
					{renderProgressBar()}
					<div className="card">
						<div className="card-body">
							{renderStepContent()}
							<div className="d-flex justify-content-between mt-4">
								{currentStep > 1 && (
									<button className="btn btn-primary" onClick={handlePrevious}>
										Previous
									</button>
								)}
								{currentStep < 3 && (
									<button
										className="btn btn-primary"
										onClick={handleNext}
										disabled={
											(currentStep === 1 && !selectedSubject) ||
											(currentStep === 2 && !selectedNumQuestions)
										}>
										Next
									</button>
								)}
								{currentStep === 3 && (
									<button className="btn btn-success" onClick={handleNext}>
										Start Quiz
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default User;
