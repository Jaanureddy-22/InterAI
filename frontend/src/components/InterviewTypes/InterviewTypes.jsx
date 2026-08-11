import styles from "./InterviewTypes.module.css";
import { motion } from "framer-motion";

import {
  FaMicrophone,
  FaLaptopCode,
  FaCode,
  FaBuilding,
  FaBrain,
  FaUserCheck,
} from "react-icons/fa";

const interviewTypes = [
  {
    icon: <FaMicrophone />,
    title: "HR Interview",
    description:
      "Practice common HR and behavioral questions to improve communication and confidence.",
    tag: "Communication",
  },
  {
    icon: <FaLaptopCode />,
    title: "Technical Interview",
    description:
      "Test your computer science fundamentals, technical concepts and problem-solving skills.",
    tag: "Technical",
  },
  {
    icon: <FaCode />,
    title: "Coding Interview",
    description:
      "Practice DSA and coding problems commonly asked in technical recruitment rounds.",
    tag: "DSA & Coding",
  },
  {
    icon: <FaBuilding />,
    title: "Company Specific",
    description:
      "Prepare for a specific company and role with questions tailored to your target position.",
    tag: "Company",
  },
  {
    icon: <FaBrain />,
    title: "Aptitude Test",
    description:
      "Improve quantitative aptitude, logical reasoning and analytical problem-solving skills.",
    tag: "Aptitude",
  },
  {
    icon: <FaUserCheck />,
    title: "Behavioral Interview",
    description:
      "Practice real-world situations and learn how to structure strong behavioral answers.",
    tag: "Behavioral",
  },
];

function InterviewTypes() {
  return (
    <section className={styles.interviewTypes} id="interview-types">

      {/* Header */}

      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className={styles.badge}>
          INTERVIEW MODES
        </span>

        <h2>
          Choose Your <span>Interview</span>
        </h2>

        <p>
          Practice exactly what you need for your next interview
          with AI-powered personalized sessions.
        </p>
      </motion.div>

      {/* Interview Cards */}

      <div className={styles.grid}>

        {interviewTypes.map((interview, index) => (

          <motion.div
            className={styles.card}
            key={interview.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -10,
            }}
          >

            {/* Icon */}

            <div className={styles.icon}>
              {interview.icon}
            </div>

            {/* Tag */}

            <span className={styles.tag}>
              {interview.tag}
            </span>

            {/* Content */}

            <h3>
              {interview.title}
            </h3>

            <p>
              {interview.description}
            </p>

            {/* Button */}

            <button className={styles.exploreButton}>
              Explore
              <span>→</span>
            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default InterviewTypes;