import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaClock,
  FaRobot,
} from "react-icons/fa";

import styles from "./Interview.module.css";

const questions = [
  {
    question: "Tell me about yourself and your background.",
    category: "Introduction",
  },
  {
    question: "What are your strongest technical skills?",
    category: "Technical Skills",
  },
  {
    question: "Tell me about a project you have worked on recently.",
    category: "Project Experience",
  },
  {
    question: "How do you approach solving a difficult problem?",
    category: "Problem Solving",
  },
  {
    question: "Where do you see yourself professionally in the next few years?",
    category: "Career",
  },
];

function Interview() {
  const location = useLocation();
  const navigate = useNavigate();

  const interviewType = location.state?.type || "General";

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(
    Array(questions.length).fill("")
  );

  const question = questions[currentQuestion];

  const handleAnswer = (event) => {
    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestion] = event.target.value;

    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    navigate("/interview-report", {
      state: {
        type: interviewType,
        answers,
      },
    });
  };

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <main className={styles.page}>

      {/* HEADER */}

      <header className={styles.header}>

        <div className={styles.logo}>
          <span>I</span>
          INTERA
        </div>

        <div className={styles.interviewInfo}>
          <span>{interviewType}</span>
          <strong>AI Interview</strong>
        </div>

        <div className={styles.timer}>
          <FaClock />
          15:00
        </div>

      </header>

      {/* PROGRESS */}

      <div className={styles.progressContainer}>

        <div className={styles.progressInfo}>
          <span>
            Question {currentQuestion + 1} of {questions.length}
          </span>

          <span>{Math.round(progress)}%</span>
        </div>

        <div className={styles.progress}>
          <div style={{ width: `${progress}%` }} />
        </div>

      </div>

      {/* CONTENT */}

      <section className={styles.container}>

        <div className={styles.questionNumber}>
          Question {String(currentQuestion + 1).padStart(2, "0")}
        </div>

        <div className={styles.questionCard}>

          <div className={styles.aiIcon}>
            <FaRobot />
          </div>

          <div className={styles.questionContent}>

            <span className={styles.category}>
              {question.category}
            </span>

            <h1>{question.question}</h1>

            <p>
              Take a moment to think about your answer.
              Explain your thoughts clearly and use examples
              wherever possible.
            </p>

          </div>

        </div>

        {/* ANSWER */}

        <div className={styles.answerSection}>

          <div className={styles.answerHeader}>
            <label>Your Answer</label>

            <span>
              {answers[currentQuestion].length} characters
            </span>
          </div>

          <textarea
            value={answers[currentQuestion]}
            onChange={handleAnswer}
            placeholder="Type your answer here..."
          />

          <div className={styles.answerHint}>
            💡 Tip: Structure your answer clearly and give
            specific examples when possible.
          </div>

        </div>

        {/* NAVIGATION */}

        <div className={styles.navigation}>

          <button
            className={styles.previous}
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            <FaArrowLeft />
            Previous
          </button>

          {currentQuestion === questions.length - 1 ? (

            <button
              className={styles.submit}
              onClick={handleSubmit}
            >
              Submit Interview
              <FaCheck />
            </button>

          ) : (

            <button
              className={styles.next}
              onClick={handleNext}
            >
              Next Question
              <FaArrowRight />
            </button>

          )}

        </div>

      </section>

    </main>
  );
}

export default Interview;