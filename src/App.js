import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MentorDashboard } from "./pages/MentorDashboard";
import ProjectsProgress from "./pages/ProjectsProgress";
import OpenSourceContributions from "./pages/OpenSourceContributions";
import TrackStudents from "./pages/TrackStudents";
import SkillAssessments from "./pages/SkillAssessments";
import FeedbackApprovals from "./pages/FeedbackApprovals";
import MultiStudentView from "./pages/MultiStudentView";
import About from "./pages/About";
import HelpCenter from "./pages/HelpCenter";
import Community from "./pages/Community";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

// ✅ The new Profile Page import
import StudentProfile from "./pages/StudentProfile"; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MentorDashboard />} />
                <Route path="/projects-progress" element={<ProjectsProgress />} />
                <Route path="/open-source-contributions" element={<OpenSourceContributions />} />
                <Route path="/track-students" element={<TrackStudents />} />
                <Route path="/skill-assessments" element={<SkillAssessments />} />
                <Route path="/feedback-approvals" element={<FeedbackApprovals />} />
                <Route path="/multi-student-view" element={<MultiStudentView />} />
                <Route path="/about" element={<About />} />
                <Route path="/help-center" element={<HelpCenter />} />
                <Route path="/community" element={<Community />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                
                {/* ✅ The new dynamic route for individual students */}
                <Route path="/student/:id" element={<StudentProfile />} /> 
            </Routes>
        </Router>
    );
}

export default App;