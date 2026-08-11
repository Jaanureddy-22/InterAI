import styles from "./HowItWorks.module.css";
import { motion } from "framer-motion";
import {
  FaFileUpload,
  FaUserTie,
  FaMicrophone,
  FaChartBar,
  FaArrowDown,
} from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: <FaFileUpload />,
    title: "Upload Your Resume",
    description:
      "Upload your resume and let INTERA analyze your skills, experience, projects and career profile.",
  },
  {
    number: "02",
    icon: <FaUserTie />,
    title: "Choose Your Interview",
    description:
      "Select the company, job role, interview type and difficulty level you want to practice.",
  },
  {
    number: "03",
    icon: <FaMicrophone />,
    title: "Start AI Interview",
    description:
      "Interact with INTERA through voice or text while the AI interviewer asks personalized questions.",
  },
  {
    number: "04",
    icon: <FaChartBar />,
    title: "Get Your Performance Report",
    description:
      "Receive detailed feedback on technical skills, communication, confidence and overall performance.",
  },
];

function HowItWorks() {
  return (
    <section className={styles.howItWorks} id="how-it-works">

      {/* Section Header */}

      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className={styles.badge}>
          SIMPLE & POWERFUL
        </span>

        <h2>
          How <span>INTERA</span> Works
        </h2>

        <p>
          From resume analysis to personalized AI interviews,
          prepare smarter in four simple steps.
        </p>
      </motion.div>

      {/* Steps */}

      <div className={styles.steps}>

        {steps.map((step, index) => (

          <motion.div
            className={styles.stepWrapper}
            key={step.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >

            <div className={styles.stepCard}>

              {/* Number */}

              <div className={styles.number}>
                {step.number}
              </div>

              {/* Icon */}

              <div className={styles.icon}>
                {step.icon}
              </div>

              {/* Content */}

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>

            {/* Connector */}

            {index < steps.length - 1 && (
              <div className={styles.connector}>
                <FaArrowDown />
              </div>
            )}

          </motion.div>

        ))}

      </div>

      {/* Bottom CTA */}

      <motion.div
        className={styles.bottomMessage}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3>
          Your next interview starts here.
        </h3>

        <p>
          Practice with AI. Learn from every answer. Become interview-ready.
        </p>
      </motion.div>

    </section>
  );
}

export default HowItWorks;