import { useNavigate } from "react-router-dom";
import { FaFileAlt, FaRobot, FaArrowRight } from "react-icons/fa";

import styles from "./ChooseMode.module.css";

function ChooseMode() {
  const navigate = useNavigate();

  return (
    <main className={styles.page}>

      <header className={styles.header}>
        <div className={styles.logo}>
          <span>I</span>
          INTERA
        </div>

        <span className={styles.step}>
          Resume uploaded ✓
        </span>
      </header>

      <section className={styles.container}>

        <div className={styles.heading}>
          <span className={styles.badge}>NEXT STEP</span>

          <h1>
            What do you want to
            <span> work on?</span>
          </h1>

          <p>
            Choose an option below. INTERA will use your
            resume to personalize the experience.
          </p>
        </div>

        <div className={styles.options}>

          {/* Resume Analyzer */}

          <button
            className={styles.option}
            onClick={() => navigate("/resume-dashboard")}
          >
            <div className={styles.icon}>
              <FaFileAlt />
            </div>

            <div className={styles.optionContent}>
              <span className={styles.number}>01</span>

              <h2>Resume Analyzer</h2>

              <p>
                Analyze your resume, discover your strongest
                skills, identify gaps, and understand what
                you should improve.
              </p>

              <span className={styles.action}>
                Analyze Resume
                <FaArrowRight />
              </span>
            </div>
          </button>

          {/* AI Interview */}

          <button
            className={styles.option}
            onClick={() => navigate("/interview-types")}
          >
            <div className={styles.icon}>
              <FaRobot />
            </div>

            <div className={styles.optionContent}>
              <span className={styles.number}>02</span>

              <h2>AI Interview</h2>

              <p>
                Practice realistic interviews based on your
                skills, experience, and the role you want
                to prepare for.
              </p>

              <span className={styles.action}>
                Start Interview
                <FaArrowRight />
              </span>
            </div>
          </button>

        </div>

      </section>

    </main>
  );
}

export default ChooseMode;