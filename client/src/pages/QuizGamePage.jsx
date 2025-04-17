import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const QuizGamePage = () => {
  const location = useLocation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { units } = location.state || {};
  const questions = [
    { question: "What is the powerhouse of the cell?",
      answers: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
      correctAnswer: "Mitochondria"
    },
    { question: "What is the capital of France?",
      answers: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris"
    },
    { question: "What is the highest mountain in the world?",
      answers: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
      correctAnswer: "Mount Everest"
    },
  ];
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setEnableSubmit(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setEnableSubmit(false);
      setIsAnswerSubmitted(false);
      console.log("Test")
    } else {
      // Handle end of quiz
      setQuizFinished(true);
      setIsAnswerSubmitted(false); // Ensure no further submissions
    }
  };

  const isCorrectAnswer = () => {
    return selectedAnswer === questions[currentQuestion].correctAnswer;
  };

  const handleSubmitAnswer = () => {
    if (isCorrectAnswer()) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  return (

    <div className="w-screen flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full max-w-2xl px-4 lg:px-0">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Quiz
        </h1>
        <div className="bg-white rounded-lg shadow-md p-8 w-full">
          {!quizFinished ? (
            <>
              <p className="text-lg text-gray-700 mb-4">
                Question {currentQuestion + 1} of {questions.length}
              </p>
              <p className="text-xl font-medium text-gray-800">
                {questions[currentQuestion].question}
              </p>
              <div className="mt-4">
                {questions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={
                      !isAnswerSubmitted
                        ? () => handleAnswerSelect(answer)
                        : undefined
                    }
                    className={`block !border-2 !border-[#0F3C2F] w-full text-left px-4 py-2 mt-2 text-black b-2 rounded focus:!outline-none
                      ${selectedAnswer === answer
                        ? isAnswerSubmitted
                          ? isCorrectAnswer()
                            ? '!bg-green-200'
                            : '!bg-red-200'
                          : '!bg-blue-200'
                        : isAnswerSubmitted && questions[currentQuestion].correctAnswer === answer
                          ? '!bg-green-200' : '!bg-transparent hover:!bg-gray-100'}`
                    }>{answer}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  if (isAnswerSubmitted) {
                    console.log("test 3")
                    handleNextQuestion();
                  } else {;
                    console.log("test 4")
                    setIsAnswerSubmitted(true);
                    handleSubmitAnswer();
                  }
                }}
                disabled={!enableSubmit}
                className={`mt-6 px-4 py-2 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${enableSubmit && !isAnswerSubmitted && !quizFinished
                  ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                {isAnswerSubmitted
                  ? currentQuestion === questions.length - 1
                    ? "View Results"
                    : "Next Question"
                  : "Submit"}
              </button>
            </>
          ) : (
            <div className="text-center">
              <p className="text-xl text-black">You answered {correctAnswers} out of {questions.length} questions correctly.</p>
              <p className="text-xl text-black">Your score is {Math.round((correctAnswers / questions.length) * 100)}%</p>
            </div>
          )}
        </div>
        <Link to="/quiz" className="mt-4 px-4 py-2 text-blue-500  hover:text-blue-800 focus:outline-none">
          Back to Quiz Page
        </Link>
      </main>
    </div>
  );
};

export default QuizGamePage;