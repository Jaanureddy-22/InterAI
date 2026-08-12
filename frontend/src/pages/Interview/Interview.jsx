import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Interview.module.css";

const questions = [
  "Tell me about yourself.",
  "What are your strengths and weaknesses?",
  "Tell me about a project you have worked on.",
  "What challenges did you face in your project and how did you solve them?",
  "Where do you see yourself in the next five years?",
];

function Interview() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);

  const totalQuestions = questions.length;

  const handleNext = () => {
    if (!answer.trim()) {
      alert("Please enter your answer before continuing.");
      return;
    }

    const updatedAnswers = [
      ...answers,
      {
        question: questions[currentQuestion],
        answer: answer,
      },
    ];

    setAnswers(updatedAnswers);
    setAnswer("");

    if (currentQuestion === totalQuestions - 1) {
      // Temporary report navigation
      navigate("/interview-report");
      return;
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const progress =
    ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className={styles.page}>

      {/* Header */}

      <header className={styles.header}>

        <div className={styles.logo}>
          <span>I</span>
          INTERA
        </div>

        <div className={styles.interviewInfo}>
          <span>AI Interview</span>
          <span>
            Question {currentQuestion + 1} / {totalQuestions}
          </span>
        </div>

      </header>

      {/* Main */}

      <main className={styles.container}>

        <div className={styles.questionCard}>

          <div className={styles.aiIcon}>
            I
          </div>

          <div className={styles.aiLabel}>
            INTERA AI
          </div>

          <h1>
            {questions[currentQuestion]}
          </h1>

          <p className={styles.instruction}>
            Take your time and give a clear answer.
          </p>

        </div>

        {/* Answer */}

        <div className={styles.answerSection}>

          <label>
            Your Answer
          </label>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer here..."
          />

          <div className={styles.answerBottom}>

            <span>
              {answer.length} characters
            </span>

            <button
              onClick={handleNext}
              className={styles.submitButton}
            >
              {currentQuestion === totalQuestions - 1
                ? "Submit Interview"
                : "Submit Answer"}

              <span>→</span>
            </button>

          </div>

        </div>

        {/* Progress */}

        <div className={styles.progressSection}>

          <div className={styles.progressText}>
            <span>Interview Progress</span>

            <span>
              {Math.round(progress)}%
            </span>
          </div>

          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{ width: `${progress}%` }}
            />
          </div>

        </div>

        <p className={styles.notice}>
          Your answers will be analyzed by INTERA after
          completing the interview.
        </p>

      </main>

    </div>
  );
}

export default Interview;