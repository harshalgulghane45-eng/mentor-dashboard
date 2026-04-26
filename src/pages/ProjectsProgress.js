import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ We need this to click and travel!
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { studentsData } from "../data/studentsData"; // ✅ Importing our master list
import "../styles/styles.css";

const ProjectsProgress = () => {
    const navigate = useNavigate();

    return (
        <div className="projects-page">
            <Navbar />
            <main className="projects-main">
                <h1 className="projects-heading">Track Assigned Students <br /> and Progress</h1>
                <p className="projects-description">
                    View and manage the students assigned to you with detailed profiles and progress logs.
                </p>
                <div className="projects-table-wrapper">
                    <table className="projects-table">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Project</th>
                                <th>Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentsData.map((student, index) => (
                                <tr key={index} style={{ animation: "fadeSlideUp 0.5s ease both", animationDelay: `${index * 0.1}s` }}>
                                    <td className="student-cell">
                                        
                                        {/* 👇 HERE IS THE CLICKABLE MAGIC 👇 */}
                                        <div 
                                            className="student-content" 
                                            onClick={() => navigate(`/student/${student.id}`)}
                                            style={{ cursor: "pointer", padding: "4px", borderRadius: "8px", transition: "background 0.2s" }}
                                            onMouseOver={(e) => e.currentTarget.style.background = "rgba(0,91,255,0.05)"}
                                            onMouseOut={(e) => e.currentTarget.style.background = "transparent"}
                                        >
                                            <img src={student.avatar} alt={student.name} />
                                            <div className="student-info">
                                                <div className="student-name" style={{ transition: "color 0.2s" }}>{student.name}</div>
                                                <div className="student-email">{student.email}</div>
                                            </div>
                                        </div>

                                    </td>
                                    <td><span style={{ fontWeight: 500 }}>{student.project}</span></td>
                                    <td>
                                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                            <div className="progress-bar" style={{ flex: 1 }}>
                                                <div className="progress-fill" style={{ width: `${student.progress}%` }}></div>
                                            </div>
                                            <span style={{ fontSize: "13px", fontWeight: "600", color: "#005bff", minWidth: "36px" }}>{student.progress}%</span>
                                        </div>
                                    </td>
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

export default ProjectsProgress;