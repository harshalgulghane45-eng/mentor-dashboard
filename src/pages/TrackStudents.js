import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { studentsData } from "../data/studentsData";
import "../styles/styles.css";

const TrackStudents = () => {
    const navigate = useNavigate();

    return (
        <div className="projects-page">
            <Navbar />
            <main className="projects-main">
                <h1 className="projects-heading" style={{ animation: "fadeSlideDown 0.6s ease both" }}>Track Students</h1>
                <div className="projects-table-wrapper" style={{ animation: "fadeSlideUp 0.8s ease both" }}>
                    <table className="projects-table">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Current Milestone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentsData.map((student, index) => (
                                <tr key={index} style={{ animation: `fadeSlideUp 0.5s ease both ${index * 0.1}s` }}>
                                    <td 
                                        className="student-cell" 
                                        onClick={() => navigate(`/student/${student.id}`)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div className="student-content student-hover-effect">
                                            <img src={student.avatar} alt={student.name} style={{ transition: "transform 0.3s ease" }} />
                                            <div className="student-info">
                                                <div className="student-name" style={{ color: "var(--primary-blue, #005bff)" }}>{student.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="milestone-text" style={{ fontWeight: "500" }}>{student.milestone}</span>
                                    </td>
                                    <td>
                                        <button 
                                            className="action-btn"
                                            onClick={() => navigate(`/student/${student.id}`)}
                                            style={{ transition: "all 0.3s ease", transform: "scale(1)" }}
                                            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                                            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                                        >
                                            View Profile
                                        </button>
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

export default TrackStudents;