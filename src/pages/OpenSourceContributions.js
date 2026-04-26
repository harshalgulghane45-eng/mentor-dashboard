import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { studentsData } from "../data/studentsData"; // ✅ Master List
import "../styles/styles.css";

const OpenSourceContributions = () => {
    const navigate = useNavigate();

    return (
        <div className="projects-page">
            <Navbar />
            <main className="projects-main">
                <h1 className="projects-heading">Open Source Contributions</h1>
                <div className="projects-table-wrapper">
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
                                <tr key={index}>
                                    <td className="student-cell">
                                        <div 
                                            className="student-content"
                                            onClick={() => navigate(`/student/${student.id}`)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <img src={student.avatar} alt={student.name} />
                                            <div className="student-name">{student.name}</div>
                                        </div>
                                    </td>
                                    <td>{student.repo}</td>
                                    <td>
                                        <span className={`status-badge ${student.prStatus.toLowerCase()}`}>
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