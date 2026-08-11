import { useLocation, useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowUp,
  FaLightbulb,
  FaRedo,
  FaArrowRight,
} from "react-icons/fa";

import styles from "./InterviewReport.module.css";

function InterviewReport() {
  const location = useLocation();
  const navigate = useNavigate();

  const interviewType =
    location.state?.type || "General Interview";

  const answers = location.state?.answers || [];

  /*
    Temporary score.

    Later this value will come from the backend
    after the AI evaluates the interview.
  */
  const score = 86;
  const previousScore = 74;

  const improvement = score - previousScore;

  return (
    <main className={styles.page}>

      {/* HEADER */}

      <header className={styles.header}>

        <div className={styles.logo}>
          <span>I</span>
          INTERA
        </div>

        <div className={styles.headerText}>
          {interviewType} Report
        </div>

      </header>

      <section className={styles.container}>

        {/* TITLE */}

        <div className={styles.title}>

          <span className={styles.badge}>
            INTERVIEW COMPLETED
          </span>

          <h1>
            Your Interview
            <span> Performance</span>
          </h1>

          <p>
            Here's a summary of your performance based on
            your answers and interview behaviour.
          </p>

        </div>

        {/* SCORE SECTION */}

        <div className={styles.scoreSection}>

          <div className={styles.scoreCircle}>

            <strong>{score}</strong>

            <span>/100</span>

            <small>Overall Score</small>

          </div>

          <div className={styles.scoreDetails}>

            <div className={styles.improvement}>

              <FaArrowUp />

              <div>
                <strong>
                  +{improvement} points
                </strong>

                <span>
                  compared with your previous interview
                </span>
              </div>

            </div>

            <div className={styles.scoreMessage}>
              <FaCheckCircle />

              <p>
                Good performance! Your answers showed
                strong preparation and confidence.
              </p>
            </div>

          </div>

        </div>

        {/* PERFORMANCE GRAPH */}

        <div className={styles.card}>

          <div className={styles.cardHeader}>

            <div>
              <h2>Performance Progress</h2>

              <p>
                Your interview performance over time
              </p>
            </div>

            <span className={styles.currentScore}>
              {score}/100
            </span>

          </div>

          <div className={styles.chart}>

            <div className={styles.yAxis}>
              <span>100</span>
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>

            <div className={styles.graphArea}>

              <div className={styles.gridLine}></div>
              <div className={styles.gridLine}></div>
              <div className={styles.gridLine}></div>
              <div className={styles.gridLine}></div>
              <div className={styles.gridLine}></div>

              <svg
                className={styles.lineChart}
                viewBox="0 0 700 250"
                preserveAspectRatio="none"
              >

                <polyline
                  points="30,175 170,150 310,135 450,100 590,65 670,45"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="4"
                />

                <circle
                  cx="30"
                  cy="175"
                  r="6"
                  fill="#10b981"
                />

                <circle
                  cx="170"
                  cy="150"
                  r="6"
                  fill="#10b981"
                />

                <circle
                  cx="310"
                  cy="135"
                  r="6"
                  fill="#10b981"
                />

                <circle
                  cx="450"
                  cy="100"
                  r="6"
                  fill="#10b981"
                />

                <circle
                  cx="590"
                  cy="65"
                  r="6"
                  fill="#10b981"
                />

                <circle
                  cx="670"
                  cy="45"
                  r="7"
                  fill="#ffffff"
                  stroke="#10b981"
                  strokeWidth="4"
                />

              </svg>

              <div className={styles.xAxis}>
                <span>Interview 1</span>
                <span>Interview 2</span>
                <span>Interview 3</span>
                <span>Interview 4</span>
                <span>Interview 5</span>
                <span>Current</span>
              </div>

            </div>

          </div>

        </div>

        {/* STRENGTHS */}

        <div className={styles.columns}>

          <div className={styles.card}>

            <div className={styles.cardTitle}>
              <FaCheckCircle />
              <h2>Your Strengths</h2>
            </div>

            <div className={styles.list}>

              <div>
                <span>01</span>
                <p>Clear communication</p>
              </div>

              <div>
                <span>02</span>
                <p>Strong technical understanding</p>
              </div>

              <div>
                <span>03</span>
                <p>Good problem-solving approach</p>
              </div>

              <div>
                <span>04</span>
                <p>Confident responses</p>
              </div>

            </div>

          </div>

          {/* IMPROVEMENT */}

          <div className={styles.card}>

            <div className={styles.cardTitle}>
              <FaLightbulb />
              <h2>Needs Improvement</h2>
            </div>

            <div className={styles.list}>

              <div>
                <span>01</span>
                <p>Give more specific examples</p>
              </div>

              <div>
                <span>02</span>
                <p>Improve answer structure</p>
              </div>

              <div>
                <span>03</span>
                <p>Explain technical concepts deeper</p>
              </div>

              <div>
                <span>04</span>
                <p>Reduce hesitation in responses</p>
              </div>

            </div>

          </div>

        </div>

        {/* AI RECOMMENDATION */}

        <div className={styles.recommendation}>

          <div className={styles.recommendIcon}>
            <FaLightbulb />
          </div>

          <div>

            <h3>
              INTERA AI Recommendation
            </h3>

            <p>
              Your performance improved by {improvement} points.
              Focus on giving structured answers with real
              examples and explaining your technical decisions
              clearly. Another practice interview could help
              improve your consistency.
            </p>

          </div>

        </div>

        {/* ACTIONS */}

        <div className={styles.actions}>

          <button
            className={styles.secondary}
            onClick={() => navigate("/interview-types")}
          >
            <FaRedo />
            Practice Again
          </button>

          <button
            className={styles.primary}
            onClick={() => navigate("/choose-mode")}
          >
            Back to Dashboard
            <FaArrowRight />
          </button>

        </div>

      </section>

    </main>
  );
}

export default InterviewReport;