import React from "react";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

export const MentorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <Navbar />

      <main className="dashboard-main">
        <h1>Mentor Dashboard</h1>
        <p className="subtitle">Manage your students, track progress, and give feedback — all in one place.</p>

        <div className="card-container">
          <DashboardCard
            icon="🎓"
            title="Track Assigned Students"
            description="View and manage the students assigned to you with detailed profiles and progress logs."
            onClick={() => navigate("/track-students")}
          />
          <DashboardCard
            icon="📈"
            title="Projects Progress"
            description="Monitor the ongoing and completed projects of your students in real-time."
            onClick={() => navigate("/projects-progress")}
          />
          <DashboardCard
            icon="🧠"
            title="Skill Assessments"
            description="Analyze performance through quizzes, tests, and continuous assessments."
            onClick={() => navigate("/skill-assessments")}
          />
          <DashboardCard
            icon="🌐"
            title="Open Source Contributions"
            description="Review your student's pull requests, commits, and activity on open source platforms."
            onClick={() => navigate("/open-source-contributions")}
          />
          <DashboardCard
            icon="📝"
            title="Feedback & Approvals"
            description="Give personalized feedback and approve submitted milestones with ease."
            onClick={() => navigate("/feedback-approvals")}
          />
          <DashboardCard
            icon="👥"
            title="Multi-Student View"
            description="Easily toggle between multiple students to evaluate and mentor efficiently."
            onClick={() => navigate("/multi-student-view")}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MentorDashboard;