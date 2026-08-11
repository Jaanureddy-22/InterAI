import styles from "./PerformancePreview.module.css";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaCheckCircle,
  FaComments,
  FaBrain,
  FaBullseye,
  FaStar,
} from "react-icons/fa";

const scores = [
  {
    icon: <FaBrain />,
    title: "Technical Skills",
    score: 88,
  },
  {
    icon: <FaComments />,
    title: "Communication",
    score: 92,
  },
  {
    icon: <FaBullseye />,
    title: "Confidence",
    score: 84,
  },
  {
    icon: <FaChartLine />,
    title: "Problem Solving",
    score: 90,
  },
];

function PerformancePreview() {
  return (
    <section
      className={styles.performance}
      id="performance"
    >
      {/* Header */}

      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className={styles.badge}>
          AI PERFORMANCE ANALYSIS
        </span>

        <h2>
          Know Exactly How You <span>Performed</span>
        </h2>

        <p>
          INTERA analyzes every interview and gives you
          actionable feedback to help you improve.
        </p>
      </motion.div>

      {/* Main Content */}

      <div className={styles.content}>

        {/* Performance Report */}

        <motion.div
          className={styles.report}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Report Header */}

          <div className={styles.reportHeader}>
            <div>
              <span>INTERVIEW REPORT</span>
              <h3>Software Engineer Interview</h3>
            </div>

            <div className={styles.completed}>
              <FaCheckCircle />
              Completed
            </div>
          </div>

          {/* Overall Score */}

          <div className={styles.overall}>

            <div className={styles.scoreCircle}>
              <div>
                <strong>89</strong>
                <span>/100</span>
              </div>
            </div>

            <div className={styles.scoreInfo}>
              <h3>Excellent Performance</h3>

              <p>
                You performed better than
                <strong> 87%</strong> of candidates.
              </p>

              <div className={styles.stars}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>

          </div>

          {/* Score Cards */}

          <div className={styles.scores}>

            {scores.map((item, index) => (

              <motion.div
                className={styles.scoreCard}
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
              >
                <div className={styles.scoreTop}>

                  <div className={styles.scoreIcon}>
                    {item.icon}
                  </div>

                  <strong>
                    {item.score}%
                  </strong>

                </div>

                <span>
                  {item.title}
                </span>

                <div className={styles.progress}>
                  <div
                    style={{
                      width: `${item.score}%`,
                    }}
                  />
                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* Feedback */}

        <motion.div
          className={styles.feedback}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.feedbackLabel}>
            AI FEEDBACK
          </span>

          <h3>
            Your strengths & areas to improve
          </h3>

          <div className={styles.feedbackItem}>
            <FaCheckCircle />

            <div>
              <strong>Strong Communication</strong>

              <p>
                Your answers were clear and structured.
                Keep maintaining this confidence.
              </p>
            </div>
          </div>

          <div className={styles.feedbackItem}>
            <FaCheckCircle />

            <div>
              <strong>Good Technical Knowledge</strong>

              <p>
                You demonstrated strong understanding
                of machine learning fundamentals.
              </p>
            </div>
          </div>

          <div className={styles.feedbackItem}>
            <FaBullseye />

            <div>
              <strong>Improve Answer Structure</strong>

              <p>
                Try using the STAR method when answering
                behavioral questions.
              </p>
            </div>
          </div>

          <button className={styles.reportButton}>
            View Full Report
            <span>→</span>
          </button>

        </motion.div>

      </div>
    </section>
  );
}

export default PerformancePreview;