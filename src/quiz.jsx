import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import person from './images/Person.svg'
import { Typography, Button, CardContent } from '@material-ui/core';
import celeb from './images/Celebration.svg';
import lost from './images/Lost.svg';
import pic2 from './images/undraw_Winter_olympics_p07j (1).svg';

export default function App() {
	const questions = [
		{
			questionText: '______ loves to eat a lot',
			answerOptions: [
				{ answerText: 'xem', isCorrect: false },
				{ answerText: 'xyrs/xyr', isCorrect: false },
				{ answerText: 'xe', isCorrect: true },
				{ answerText: 'xemself', isCorrect: false },
			],
		},
		{
			questionText: 'Those cats belong to ______',
			answerOptions: [
				{ answerText: 'their/theirs', isCorrect: false },
				{ answerText: 'them', isCorrect: true },
				{ answerText: 'themselves', isCorrect: false },
				{ answerText: 'they', isCorrect: false },
			],
		},
		{
			questionText: 'Pick out the non gender neutral pronoun',
			answerOptions: [
				{ answerText: 'she', isCorrect: true },
				{ answerText: 'xyr', isCorrect: false },
				{ answerText: 'they', isCorrect: false },
				{ answerText: 'zemself', isCorrect: false },
			],
		},
		{
			questionText: 'The term, "ze", refers to a pronoun used by non-binary people',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
			],
		},
		{
			questionText: 'Fae is usually punctual and attends _______ classes',
			answerOptions: [
				{ answerText: 'faerself', isCorrect: false },
				{ answerText: 'faer', isCorrect: true },
				{ answerText: 'their', isCorrect: false },
				{ answerText: 'her', isCorrect: false },
			],
		},
		{
			questionText: "People can't change the gender they're assign at birth",
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: true },
			],
		},
		{
			questionText: 'Everyone fits on a Spectrum, from ‘Masculine’ to ‘Feminine’ - Myth or Fact',
			answerOptions: [
				{ answerText: 'Fact', isCorrect: false },
				{ answerText: 'Myth', isCorrect: true },
			],
		},
		{
			questionText: 'A person not limited in sexual choice with regard to biological sex, gender, or gender identity is called ________ ',
			answerOptions: [
				{ answerText: 'Sapiosexual', isCorrect: false },
				{ answerText: 'Asexual', isCorrect: false },
				{ answerText: 'Allosexual', isCorrect: false },
				{ answerText: 'Pansexual', isCorrect: true },
			],
		},
		{
			questionText: 'An Aromantic person does not have a sexual preference',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: true }
			],
		},
		{
			questionText: 'Hir likes to draw the cat _________',
			answerOptions: [
				{ answerText: 'hirself', isCorrect: true },
				{ answerText: 'herself', isCorrect: false },
				{ answerText: 'faerself', isCorrect: false },
				{ answerText: 'zirself', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
    	{showScore ? (
        score>questions.length/2?(<Card className="quizCard" style={{backgroundColor: "rgba(255,255,255,0.7)"}}>
        <CardContent >
        <br></br>
        <br></br>
        <div className='score-section'>
          <h4>You scored {score} out of {questions.length}!</h4>
          <img className="celeb" src={celeb} alt="Celebration"/>
		  </div>
		  <Button variant="contained" color="primary" onClick={() => {setCurrentQuestion(0); setScore(0); setShowScore(0);}}>Start Again</Button>
        </CardContent>
        </Card>):
        <Card className="quizCard" style={{backgroundColor: "rgba(255,255,255,0.7)"}}>
          <CardContent >
          <br></br>
          <br></br>
          <div className='score-section'>
            <h4>You scored {score} out of {questions.length} :(</h4>
            <img className="celeb" src={lost} alt="Better Luck Next time"/>
			<br></br>
			</div>
			<Button variant="contained" color="primary" onClick={() => {setCurrentQuestion(0); setScore(0);  setShowScore(0);}}>Start Again</Button>
          
          </CardContent>
        </Card>
			) : (
				<>
          <Card className="quizCard" style={{backgroundImage: "linear-gradient(90deg, #ED4CFF, rgb(255,255,255))"}}>
					<div className='question-section'>
						<div className='question-count'>
						
						<br></br>
              <Typography><span><i><b>Question {currentQuestion + 1}</b>/{questions.length}</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Score: {score}</span></Typography>
			  <br></br>
						</div>
						<div className='question-text'><p>{questions[currentQuestion].questionText}</p></div>
            <br></br>        
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<div className="option">
                <Button variant="contained" color="secondary" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
                <br/>
                <br/>
              </div>
						))}
					</div>
          </Card>
				</>
			)}
		</div>
	);
}