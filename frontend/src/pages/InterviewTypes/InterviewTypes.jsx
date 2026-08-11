import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaCode,
  FaCalculator,
  FaComments,
  FaBrain,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

import styles from "./InterviewTypes.module.css";

const interviewTypes = [
  {
    icon: FaUsers,
    title: "HR Interview",
    description: "Practice common HR and introduction questions.",
  },
  {
    icon: FaCode,
    title: "Technical",
    description: "Test your technical knowledge and problem solving.",
  },
  {
    icon: FaCalculator,
    title: "Aptitude",
    description: "Practice logical reasoning and aptitude questions.",
  },
  {
    icon: FaComments,
    title: "Communication",
    description: "Improve clarity, confidence and communication.",
  },
  {
    icon: FaBrain,
    title: "Behavioural",
    description: "Prepare for real workplace behavioural questions.",
  },
  {
    icon: FaBriefcase,
    title: "Role Based",
    description: "Practice an interview designed for your target role.",
  },
];

function InterviewTypes() {
  const navigate = useNavigate();

  const startInterview = (title) => {
    navigate("/interview", {
      state: {
        type: title,
      },
    });
  };

  return (
    <main className={styles.page}>

      <header className={styles.header}>

        <div className={styles.logo}>
          <span>I</span>
          INTERA
        </div>

        <span className={styles.resumeStatus}>
          Resume connected ✓
        </span>

      </header>

      <section className={styles.container}>

        <div className={styles.heading}>

          <span className={styles.badge}>
            AI INTERVIEW
          </span>

          <h1>
            Choose your
            <span> interview</span>
          </h1>

          <p>
            Select an interview type and INTERA will
            personalize the questions based on your profile.
          </p>

        </div>

        <div className={styles.grid}>

          {interviewTypes.map((item) => {

            const Icon = item.icon;

            return (
              <button
                key={item.title}
                className={styles.card}
                onClick={() => startInterview(item.title)}
              >

                <div className={styles.icon}>
                  <Icon />
                </div>

                <h2>{item.title}</h2>

                <p>{item.description}</p>

                <span className={styles.start}>
                  Start
                  <FaArrowRight />
                </span>

              </button>
            );
          })}

        </div>

      </section>

    </main>
  );
}

export default InterviewTypes;