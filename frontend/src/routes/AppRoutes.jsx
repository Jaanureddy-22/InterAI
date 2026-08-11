import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Auth from "../pages/Auth/Auth";
import ResumeUpload from "../pages/ResumeUpload/ResumeUpload";
import ChooseMode from "../pages/ChooseMode/ChooseMode";
import ResumeDashboard from "../pages/ResumeDashboard/ResumeDashboard";
import InterviewTypes from "../pages/InterviewTypes/InterviewTypes";
import Interview from "../pages/Interview/Interview";
import InterviewReport from "../pages/InterviewReport/InterviewReport";


function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />

      <Route path="/auth" element={<Auth />} />
      <Route path="/upload-resume" element={<ResumeUpload />}
      />
      <Route path="/choose-mode" element={<ChooseMode />}
      />
      <Route path="/resume-dashboard" element={<ResumeDashboard />}
      />
      <Route path="/interview-types" element={<InterviewTypes />}
      />
      <Route path="/interview" element={<Interview />}
      />
      <Route path="/interview-report" element={<InterviewReport />}
      />
    </Routes>
  );
}

export default AppRoutes;