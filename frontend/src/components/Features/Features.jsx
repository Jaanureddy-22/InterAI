import styles from "./Features.module.css";
import { motion } from "framer-motion";
import {
  FaMicrophone,
  FaBrain,
  FaFileAlt,
  FaChartLine,
  FaBuilding,
  FaUserTie,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMicrophone />,
    title: "Voice Interview",
    desc: "Talk naturally with the AI interviewer using real-time speech recognition."
  },
  {
    icon: <FaBrain />,
    title: "AI Interviewer",
    desc: "LLM-powered interviewer that adapts questions based on your responses."
  },
  {
    icon: <FaFileAlt />,
    title: "Resume Analyzer",
    desc: "Upload your resume and receive ATS-friendly suggestions instantly."
  },
  {
    icon: <FaChartLine />,
    title: "Performance Analytics",
    desc: "Track confidence, communication, technical skills and overall progress."
  },
  {
    icon: <FaBuilding />,
    title: "Company Specific",
    desc: "Practice interviews for Google, Amazon, Microsoft, Infosys and more."
  },
  {
    icon: <FaUserTie />,
    title: "HR + Technical",
    desc: "Prepare for HR, technical and behavioral interview rounds in one place."
  },
];

function Features() {
  return (
    <section className={styles.features} id="features">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
      >
        Everything You Need to Crack Interviews
      </motion.h2>

      <p className={styles.subtitle}>
        Modern AI tools designed to improve your interview performance.
      </p>

      <div className={styles.grid}>

        {features.map((item, index) => (

          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >

            <div className={styles.icon}>
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Features;