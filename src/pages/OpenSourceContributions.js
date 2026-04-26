import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { studentsData } from "../data/studentsData";
import "../styles/styles.css";

const OpenSourceContributions = () => {
    const navigate = useNavigate();

    return (
        <div className="projects-page">
            <Navbar />
            <main className="projects-main">
                <h1 className="projects-heading" style={{ animation: "fadeSlideDown 0.6s ease both" }}>Open Source Contributions</h1>
                <div className="projects-table-wrapper" style={{ animation: "fadeSlideUp 0.8s ease both" }}>
                    <table className="projects-table">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Repository</th>
                                <th>PR Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentsData.map((student, index) => (
                                <tr key={index} style={{ animation: `fadeSlideUp 0.5s ease both ${index * 0.1}s` }}>
                                    <td className="student-cell">
                                        <div 
                                            className="student-content student-hover-effect"
                                            onClick={() => navigate(`/student/${student.id}`)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <img src={student.avatar} alt={student.name} />
                                            <div className="student-name">{student.name}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <code style={{ background: "rgba(0,91,255,0.05)", padding: "4px 8px", borderRadius: "6px", color: "#005bff" }}>{student.repo}</code>
                                    </td>
                                    <td>
                                        <span className={`status-badge ${student.prStatus.toLowerCase()}`} style={{ 
                                            padding: "6px 12px", 
                                            borderRadius: "20px", 
                                            fontSize: "12px", 
                                            fontWeight: "600",
                                            background: student.prStatus === "Merged" ? "rgba(16, 185, 129, 0.15)" : "rgba(245, 158, 11, 0.15)",
                                            color: student.prStatus === "Merged" ? "#10b981" : "#f59e0b"
                                        }}>
                                            {student.prStatus}
                                        </span>
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

export default OpenSourceContributions;