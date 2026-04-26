import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { studentsData } from "../data/studentsData";
import "../styles/styles.css";

const ProjectsProgress = () => {
    const navigate = useNavigate();

    return (
        <div className="projects-page">
            <Navbar />
            <main className="projects-main">
                {/* Animated Header */}
                <div className="float-animation" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h1 className="projects-heading">Project Pulse</h1>
                    <p className="projects-description">
                        Track real-time progress and jump into student profiles with a single click.
                    </p>
                </div>

                {/* Glassmorphic Table Wrapper */}
                <div className="projects-table-wrapper glass-card" style={{ animation: "fadeSlideUp 0.8s ease both" }}>
                    <table className="projects-table">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Active Project</th>
                                <th>Visual Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentsData.map((student, index) => (
                                <tr 
                                    key={index} 
                                    style={{ 
                                        animation: `fadeSlideUp 0.5s ease both ${index * 0.1}s`,
                                    }}
                                >
                                    <td className="student-cell">
                                        <div 
                                            className="student-content stat-card-hover" 
                                            onClick={() => navigate(`/student/${student.id}`)}
                                            style={{ 
                                                cursor: "pointer", 
                                                padding: "10px", 
                                                borderRadius: "12px",
                                                background: "rgba(0, 91, 255, 0.03)",
                                                border: "1px solid rgba(0, 91, 255, 0.1)"
                                            }}
                                        >
                                            <img 
                                                src={student.avatar} 
                                                alt={student.name} 
                                                style={{ border: "2px solid #005bff" }}
                                            />
                                            <div className="student-info">
                                                <div className="student-name" style={{ fontWeight: "700", color: "var(--primary-blue, #005bff)" }}>
                                                    {student.name}
                                                </div>
                                                <div className="student-email" style={{ fontSize: '12px' }}>
                                                    {student.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    
                                    <td>
                                        <div style={{ fontWeight: 600, fontSize: '15px' }}>
                                            {student.project}
                                        </div>
                                    </td>

                                    <td>
                                        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                            <div className="progress-bar" style={{ flex: 1, height: '8px', background: 'rgba(0,0,0,0.05)' }}>
                                                <div 
                                                    className="progress-fill" 
                                                    style={{ 
                                                        width: `${student.progress}%`,
                                                        boxShadow: "0 0 10px rgba(0, 91, 255, 0.3)"
                                                    }}
                                                ></div>
                                            </div>
                                            <span style={{ fontSize: "14px", fontWeight: "800", color: "#005bff", minWidth: "40px" }}>
                                                {student.progress}%
                                            </span>
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