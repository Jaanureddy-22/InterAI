import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowUp,
  FaArrowRight,
  FaLightbulb,
} from "react-icons/fa";

import styles from "./ResumeDashboard.module.css";

function ResumeDashboard() {
  const navigate = useNavigate();

  return (
    <main className={styles.page}>

      <header className={styles.header}>
        <div className={styles.logo}>
          <span>I</span>
          INTERA
        </div>

        <button
          className={styles.backButton}
          onClick={() => navigate("/choose-mode")}
        >
          Back
        </button>
      </header>

      <section className={styles.container}>

        <div className={styles.top}>

          <div>
            <span className={styles.badge}>
              RESUME ANALYSIS
            </span>

            <h1>
              Your Resume
              <span> Insights</span>
            </h1>

            <p>
              Here's what INTERA found from your resume.
              Use these insights to understand your strengths
              and focus areas.
            </p>
          </div>

          <div className={styles.score}>
            <strong>82</strong>
            <span>/100</span>
            <small>
              <FaArrowUp /> 8% improvement
            </small>
          </div>

        </div>

        {/* SKILLS */}

        <div className={styles.section}>

          <div className={styles.sectionTitle}>
            <div>
              <h2>Skill Overview</h2>
              <p>Detected skills from your resume</p>
            </div>
          </div>

          <div className={styles.skills}>

            <Skill name="Python" value="92%" width="92%" />
            <Skill name="Machine Learning" value="84%" width="84%" />
            <Skill name="SQL" value="78%" width="78%" />
            <Skill name="Data Analysis" value="74%" width="74%" />
            <Skill name="React" value="58%" width="58%" />
            <Skill name="System Design" value="42%" width="42%" />

          </div>

        </div>

        {/* STRENGTHS + IMPROVEMENTS */}

        <div className={styles.columns}>

          <div className={styles.infoCard}>

            <div className={styles.cardTitle}>
              <FaCheckCircle />
              <h2>Strengths</h2>
            </div>

            <ul>
              <li>Strong Python fundamentals</li>
              <li>Good machine learning knowledge</li>
              <li>Practical project experience</li>
              <li>Data analysis skills</li>
            </ul>

          </div>

          <div className={styles.infoCard}>

            <div className={styles.cardTitle}>
              <FaLightbulb />
              <h2>Needs Improvement</h2>
            </div>

            <ul>
              <li>Advanced SQL</li>
              <li>React development</li>
              <li>System design concepts</li>
              <li>Cloud technologies</li>
            </ul>

          </div>

        </div>

        {/* RECOMMENDATION */}

        <div className={styles.recommendation}>

          <div className={styles.recommendIcon}>
            <FaLightbulb />
          </div>

          <div>
            <h3>INTERA Recommendation</h3>

            <p>
              Your strongest area is Python and machine learning.
              Improving SQL, system design and React would make
              your profile more well-rounded for software and
              AI-related roles.
            </p>
          </div>

        </div>

        <button
          className={styles.interviewButton}
          onClick={() => navigate("/interview-types")}
        >
          Practice With AI Interview
          <FaArrowRight />
        </button>

      </section>

    </main>
  );
}

function Skill({ name, value, width }) {
  return (
    <div className={styles.skill}>

      <div className={styles.skillHeader}>
        <span>{name}</span>
        <strong>{value}</strong>
      </div>

      <div className={styles.progress}>
        <div style={{ width }}></div>
      </div>

    </div>
  );
}

export default ResumeDashboard;