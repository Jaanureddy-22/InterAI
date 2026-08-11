const fs = require("fs");
const path = require("path");

const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");

const Resume = require("../models/Resume");

const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Please upload a resume.",
      });
    }

    const filePath = req.file.path;
    const fileName = req.file.originalname;

    let extractedText = "";

    // PDF
    if (req.file.mimetype === "application/pdf") {
      const dataBuffer = fs.readFileSync(filePath);

      const pdfData = await pdfParse(dataBuffer);

      extractedText = pdfData.text;
    }

    // DOCX
    else if (
      req.file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const result = await mammoth.extractRawText({
        path: filePath,
      });

      extractedText = result.value;
    }

    else {
      return res.status(400).json({
        message: "Only PDF and DOCX files are supported.",
      });
    }

    // Basic skill detection for now
    const availableSkills = [
      "Python",
      "Java",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "MySQL",
      "Machine Learning",
      "Deep Learning",
      "Data Science",
      "Data Analysis",
      "Git",
      "GitHub",
      "HTML",
      "CSS",
      "C",
      "C++",
      "Docker",
      "AWS",
      "Power BI",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
    ];

    const lowerText = extractedText.toLowerCase();

    const detectedSkills = availableSkills.filter((skill) =>
      lowerText.includes(skill.toLowerCase())
    );

    const strengths = [];

    if (detectedSkills.length >= 5) {
      strengths.push("Good technical skill coverage");
    }

    if (
      detectedSkills.includes("Python") ||
      detectedSkills.includes("Java") ||
      detectedSkills.includes("C++")
    ) {
      strengths.push("Programming fundamentals");
    }

    if (
      detectedSkills.includes("Git") ||
      detectedSkills.includes("GitHub")
    ) {
      strengths.push("Version control knowledge");
    }

    const improvements = [];

    if (!detectedSkills.includes("SQL")) {
      improvements.push("SQL");
    }

    if (!detectedSkills.includes("Git")) {
      improvements.push("Git and GitHub");
    }

    if (!detectedSkills.includes("Machine Learning")) {
      improvements.push("Machine Learning");
    }

    // Temporary user ID
    // Authentication middleware will replace this later.
    const userId = req.body.userId;

    if (!userId) {
      return res.status(400).json({
        message: "User ID is required.",
      });
    }

    const resume = await Resume.create({
      user: userId,
      fileName,
      filePath,
      fileType: req.file.mimetype,
      extractedText,
      skills: detectedSkills,
      strengths,
      improvements,
    });

    res.status(201).json({
      message: "Resume uploaded and analyzed successfully.",
      resume: {
        id: resume._id,
        fileName: resume.fileName,
        skills: resume.skills,
        strengths: resume.strengths,
        improvements: resume.improvements,
      },
    });

  } catch (error) {
    console.error("Resume upload error:", error);

    res.status(500).json({
      message: "Resume processing failed.",
      error: error.message,
    });
  }
};

module.exports = {
  uploadResume,
};