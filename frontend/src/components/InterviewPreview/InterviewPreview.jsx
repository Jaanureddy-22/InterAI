import styles from "./InterviewPreview.module.css";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaMicrophone,
  FaVolumeUp,
  FaBrain,
  FaCheckCircle,
} from "react-icons/fa";

function InterviewPreview() {
  return (
    <section className={styles.preview} id="interview-preview">

      {/* Section Header */}

      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className={styles.badge}>
          AI INTERVIEW EXPERIENCE
        </span>

        <h2>
          Meet Your <span>AI Interviewer</span>
        </h2>

        <p>
          Experience realistic interviews powered by AI,
          designed to challenge you and help you improve.
        </p>
      </motion.div>

      {/* Main Preview */}

      <div className={styles.content}>

        {/* Left Side */}

        <motion.div
          className={styles.info}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <h3>
            Practice like it's the real interview.
          </h3>

          <p>
            INTERA analyzes your profile and creates
            personalized interview questions based on
            your skills, experience and target role.
          </p>

          <div className={styles.points}>

            <div>
              <FaCheckCircle />
              <span>Personalized questions</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Voice & text interaction</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Real-time AI feedback</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Detailed performance analysis</span>
            </div>

          </div>

        </motion.div>

        {/* AI Interview Window */}

        <motion.div
          className={styles.interviewWindow}
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* Window Header */}

          <div className={styles.windowHeader}>

            <div className={styles.aiProfile}>

              <div className={styles.aiIcon}>
                <FaRobot />
              </div>

              <div>
                <strong>INTERA AI</strong>
                <span>
                  <i></i>
                  Interviewer is online
                </span>
              </div>

            </div>

            <div className={styles.status}>
              LIVE
            </div>

          </div>

          {/* Question */}

          <div className={styles.questionArea}>

            <span className={styles.questionLabel}>
              AI INTERVIEWER
            </span>

            <h3>
              "Tell me about yourself and
              your experience with machine learning."
            </h3>

            <div className={styles.audioWave}>

              <FaVolumeUp />

              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>

            </div>

          </div>

          {/* User Response */}

          <div className={styles.responseArea}>

            <div className={styles.userLabel}>
              YOUR RESPONSE
            </div>

            <div className={styles.responseBox}>
              <p>
                "During my projects, I worked with
                supervised learning algorithms such as
                Random Forest and Logistic Regression..."
              </p>
            </div>

          </div>

          {/* Bottom Controls */}

          <div className={styles.controls}>

            <div className={styles.listening}>

              <div className={styles.micIcon}>
                <FaMicrophone />
              </div>

              <span>Listening...</span>

            </div>

            <div className={styles.aiScore}>
              <FaBrain />
              <span>AI Analysis</span>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default InterviewPreview;