"use client"

import React, { useState } from 'react';
import Confetti_13 from '../tsx/Confetti_13';

const Example_13: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      answer: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: 1
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Giraffe", "Blue Whale", "Polar Bear"],
      answer: 2
    }
  ];

  const handleAnswer = (selectedIndex: number) => {
    if (selectedIndex === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizComplete(true);
      setIsConfettiVisible(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizComplete(false);
    setIsConfettiVisible(false);
  };

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Knowledge Quiz</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${
              darkMode 
                ? 'bg-gray-800 text-white border border-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200'
            } shadow-sm`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative overflow-hidden">
          {!quizComplete ? (
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm font-medium">
                  Question {currentQuestion + 1} of {questions.length}
                </div>
                <div className="text-sm font-medium">
                  Score: {score}
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">{questions[currentQuestion].question}</h2>
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className="w-full py-3 px-4 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-left rounded-lg transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-6">
              <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                {score} / {questions.length}
              </p>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                {score === questions.length 
                  ? "Perfect score! Amazing job!" 
                  : score >= questions.length / 2 
                    ? "Good job! You passed the quiz." 
                    : "Better luck next time!"}
              </p>
              <button
                onClick={resetQuiz}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all"
              >
                Try Again
              </button>
            </div>
          )}

          {isConfettiVisible && (
            <div className="absolute inset-0">
              <Confetti_13 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Example_13; 