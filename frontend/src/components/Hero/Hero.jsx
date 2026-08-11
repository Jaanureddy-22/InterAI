import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaFileAlt,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.backgroundGlow}></div>

      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        <div className={styles.badge}>
          <span></span>
          AI-Powered Interview Preparation
        </div>

        <h1>
          Prepare Smarter.
          <br />
          <span>Interview Better.</span>
        </h1>

        <p className={styles.description}>
          INTERA helps you analyze your resume, identify skill gaps,
          practice realistic interviews, and understand exactly
          where you can improve.
        </p>

        <div className={styles.buttons}>

          <Link to="/auth" className={styles.primaryButton}>
            Get Started
            <FaArrowRight />
          </Link>

          <a href="#how-it-works" className={styles.secondaryButton}>
            See How It Works
          </a>

        </div>

        <div className={styles.trust}>
          No complicated setup&nbsp; • &nbsp;Practice at your own pace
        </div>

      </motion.div>

      {/* PRODUCT PREVIEW */}

      <motion.div
        className={styles.preview}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >

        <div className={styles.previewHeader}>
          <div>
            <span>INTERA</span>
            <strong>Career Preparation Dashboard</strong>
          </div>

          <div className={styles.status}>
            <span></span>
            AI Ready
          </div>
        </div>

        <div className={styles.previewBody}>

          <div className={styles.previewCard}>
            <div className={styles.cardIcon}>
              <FaFileAlt />
            </div>

            <div>
              <span>Resume Analysis</span>
              <strong>82% Match</strong>
            </div>
          </div>

          <div className={styles.previewCard}>
            <div className={styles.cardIcon}>
              <FaRobot />
            </div>

            <div>
              <span>AI Interviews</span>
              <strong>6 Modes</strong>
            </div>
          </div>

          <div className={styles.previewCard}>
            <div className={styles.cardIcon}>
              <FaChartLine />
            </div>

            <div>
              <span>Performance</span>
              <strong>89 / 100</strong>
            </div>
          </div>

        </div>

        <div className={styles.progressSection}>

          <div className={styles.progressHeader}>
            <span>Interview Readiness</span>
            <strong>78%</strong>
          </div>

          <div className={styles.progress}>
            <div></div>
          </div>

          <div className={styles.progressFooter}>
            <span>Skills</span>
            <span>Interview</span>
            <span>Confidence</span>
          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;