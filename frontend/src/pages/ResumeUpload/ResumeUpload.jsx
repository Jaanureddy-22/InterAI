import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCloudUploadAlt,
  FaFilePdf,
  FaFileWord,
  FaCheckCircle,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

import styles from "./ResumeUpload.module.css";

function ResumeUpload() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFile = (selectedFile) => {
    setError("");

    if (!selectedFile) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Please upload a PDF or Word document.");
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("File size should be less than 5 MB.");
      return;
    }

    setFile(selectedFile);
  };

  const handleInputChange = (event) => {
    handleFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();

    handleFile(event.dataTransfer.files[0]);
  };

  const removeFile = () => {
    setFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const continueToNext = () => {
    if (!file) {
      setError("Please upload your resume first.");
      return;
    }

    /*
      For now we store the selected file temporarily.

      Later this will be replaced with:
      POST /api/resume/upload
    */

    navigate("/choose-mode", {
      state: {
        resume: file,
      },
    });
  };

  return (
    <main className={styles.page}>

      {/* HEADER */}

      <header className={styles.header}>

        <div className={styles.logo}>
          <span>I</span>
          INTERA
        </div>

        <div className={styles.step}>
          Step 1 of 2
        </div>

      </header>

      {/* MAIN */}

      <section className={styles.container}>

        <div className={styles.heading}>

          <span className={styles.badge}>
            PROFILE SETUP
          </span>

          <h1>
            Upload your
            <span> resume</span>
          </h1>

          <p>
            Your resume helps INTERA understand your skills,
            experience and background so we can personalize
            your experience.
          </p>

        </div>

        {/* UPLOAD AREA */}

        {!file ? (

          <div
            className={styles.uploadBox}
            onDragOver={(event) => event.preventDefault()}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >

            <div className={styles.uploadIcon}>
              <FaCloudUploadAlt />
            </div>

            <h2>
              Drop your resume here
            </h2>

            <p>
              or click to browse from your computer
            </p>

            <span className={styles.formats}>
              PDF or DOCX · Maximum 5 MB
            </span>

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleInputChange}
              hidden
            />

          </div>

        ) : (

          <div className={styles.fileCard}>

            <div className={styles.fileIcon}>
              {file.type === "application/pdf" ? (
                <FaFilePdf />
              ) : (
                <FaFileWord />
              )}
            </div>

            <div className={styles.fileDetails}>

              <strong>{file.name}</strong>

              <span>
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </span>

            </div>

            <FaCheckCircle className={styles.successIcon} />

            <button
              className={styles.remove}
              onClick={removeFile}
            >
              <FaTimes />
            </button>

          </div>

        )}

        {/* ERROR */}

        {error && (
          <p className={styles.error}>
            {error}
          </p>
        )}

        {/* PRIVACY */}

        <div className={styles.privacy}>

          <FaCheckCircle />

          <span>
            Your resume is used only to personalize your
            INTERA experience.
          </span>

        </div>

        {/* CONTINUE */}

        <button
          className={styles.continueButton}
          onClick={continueToNext}
        >
          Continue
          <FaArrowRight />
        </button>

        <p className={styles.skip}>
          You can replace your resume later.
        </p>

      </section>

    </main>
  );
}

export default ResumeUpload;