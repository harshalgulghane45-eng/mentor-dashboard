import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/styles.css";

const dashboardOptions = [
  { 
    title: "Track Assigned Students", 
    desc: "View profiles and manage assigned student logs.", 
    icon: "🎓", 
    path: "/track-students" 
  },
  { 
    title: "Projects Progress", 
    desc: "Monitor real-time project completion stats.", 
    icon: "📈", 
    path: "/projects-progress" 
  },
  { 
    title: "Skill Assessments", 
    desc: "Analyze performance via quizzes and tests.", 
    icon: "🧠", 
    path: "/skill-assessments" 
  },
  { 
    title: "Open Source Contributions", 
    desc: "Review PRs, commits, and student activity.", 
    icon: "🌐", 
    path: "/open-source-contributions" 
  },
  { 
    title: "Feedback & Approvals", 
    desc: "Approve milestones and give direct feedback.", 
    icon: "📝", 
    path: "/feedback-approvals" 
  },
  { 
    title: "Multi-Student View", 
    desc: "Toggle between students for quick comparison.", 
    icon: "👥", 
    path: "/multi-student-view" 
  }
];

export const MentorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <Navbar />

      <main className="dashboard-main">
        {/* Floating Header Section */}
        <div className="float-animation" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 className="projects-heading" style={{ fontSize: '3rem', marginBottom: '10px' }}>
            Mentor Universe
          </h1>
          <p className="subtitle" style={{ fontSize: '1.2rem', opacity: 0.8 }}>
            Manage your students with 3D precision and glassmorphic clarity.
          </p>
        </div>

        <div className="card-container">
          {dashboardOptions.map((option, index) => (
            <div 
              key={index} 
              className="dashboard-card glass-card stat-card-hover"
              onClick={() => navigate(option.path)}
              style={{ 
                animation: `fadeSlideUp 0.6s ease both ${index * 0.1}s`,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '30px',
                borderRadius: '24px'
              }}
            >
              <div style={{ 
                fontSize: "3rem", 
                marginBottom: "20px",
                filter: "drop-shadow(0 10px 15px rgba(0,91,255,0.2))" 
              }}>
                {option.icon}
              </div>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "15px", color: "var(--primary-blue, #005bff)" }}>
                {option.title}
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", opacity: 0.7 }}>
                {option.desc}
              </p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MentorDashboard;