import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { studentsData } from "../data/studentsData"; // ✅ Master List
import "../styles/styles.css";

const TrackStudents = () => {
    const navigate = useNavigate();

    return (
        <div className="projects-page">
            <Navbar />
            <main className="projects-main">
                <h1 className="projects-heading">Track Students</h1>
                <div className="projects-table-wrapper">
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
                                <tr key={index}>
                                    <td 
                                        className="student-cell" 
                                        onClick={() => navigate(`/student/${student.id}`)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div className="student-content">
                                            <img src={student.avatar} alt={student.name} />
                                            <div className="student-info">
                                                <div className="student-name">{student.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{student.milestone}</td>
                                    <td>
                                        <button 
                                            className="action-btn"
                                            onClick={() => navigate(`/student/${student.id}`)}
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