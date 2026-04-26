import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/styles.css";

const assessments = [
    { name: "Ayush Sawaliya", avatar: "/ayush-profile.jpg", quiz: 85, test: 78, continuous: 90 },
    { name: "Harshal Gulghane", avatar: "/harshal-profile.jpg", quiz: 72, test: 88, continuous: 75 },
    { name: "Rehan Shaikh", avatar: "/rehan-profile.jpg", quiz: 60, test: 65, continuous: 70 },
    { name: "Shreyansh Pandey", avatar: "/shreyansh-profile.jpg", quiz: 55, test: 60, continuous: 58 },
    { name: "Devendra Rajpurohit", avatar: "/devendra-profile.jpg", quiz: 92, test: 95, continuous: 88 },
];

const ScoreBar = ({ value }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div className="progress-bar" style={{ flex: 1, height: "8px" }}>
            <div className="progress-fill" style={{ 
                width: `${value}%`, 
                background: value > 80 ? "linear-gradient(90deg, #10b981, #34d399)" : value > 60 ? "linear-gradient(90deg, #f59e0b, #fbbf24)" : "linear-gradient(90deg, #ef4444, #f87171)" 
            }}></div>
        </div>
        <span style={{ fontSize: "13px", fontWeight: "600", minWidth: "32px", color: "#374151" }}>{value}%</span>
    </div>
);

const SkillAssessments = () => {
    return (
        <div className="projects-page">
            <Navbar />
            <main className="projects-main">
                <h1 className="projects-heading">Skill Assessments</h1>
                <p className="projects-description">
                    Analyze performance through quizzes, tests, and continuous assessments.
                </p>
                <div className="projects-table-wrapper">
                    <table className="projects-table">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Quiz Score</th>
                                <th>Test Score</th>
                                <th>Continuous</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assessments.map((s, index) => (
                                <tr key={index} style={{ animation: "fadeSlideUp 0.5s ease both", animationDelay: `${index * 0.1}s` }}>
                                    <td className="student-cell">
                                        <div className="student-content">
                                            <img src={s.avatar} alt={s.name} />
                                            <div className="student-name">{s.name}</div>
                                        </div>
                                    </td>
                                    <td><ScoreBar value={s.quiz} /></td>
                                    <td><ScoreBar value={s.test} /></td>
                                    <td><ScoreBar value={s.continuous} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SkillAssessments;