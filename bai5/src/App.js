import React, { useState } from "react";
import "./App.css";

function App() {
  const questions = [
    {
      questionText: "ReactJS dùng để làm gì?",
      answerOptions: [
        { answerText: "Mobile App", isCorrect: false },
        { answerText: "Web UI", isCorrect: true },
        { answerText: "Hệ điều hành", isCorrect: false },
        { answerText: "Cơ sở dữ liệu", isCorrect: false },
      ],
    },
    {
      questionText: "Component trong React là gì?",
      answerOptions: [
        { answerText: "Một hàm JavaScript trả về HTML", isCorrect: true },
        { answerText: "Một biến CSS", isCorrect: false },
        { answerText: "Một thẻ HTML", isCorrect: false },
        { answerText: "Một database API", isCorrect: false },
      ],
    },
    {
      questionText: "useState là một...?",
      answerOptions: [
        { answerText: "Component", isCorrect: false },
        { answerText: "Biến toàn cục", isCorrect: false },
        { answerText: "Hook", isCorrect: true },
        { answerText: "Props", isCorrect: false },
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

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className="app-container quiz-app">
      <h1>Bài 5: Quiz App</h1>
      {/* Sử dụng toán tử 3 ngôi để render có điều kiện */}
      {showScore ? (
        <div className="score-section">
          <h2>
            Bạn đã trả lời đúng {score} trên {questions.length} câu!
          </h2>
          <button onClick={handleRestartQuiz}>Làm lại Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Câu hỏi {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
