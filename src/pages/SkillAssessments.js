import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { studentsData } from "../data/studentsData"; // ✅ Master List
import "../styles/styles.css";

const SkillAssessments = () => {
    const navigate = useNavigate();

    return (
        <div className="projects-page">
            <Navbar />
            <main className="projects-main">
                <h1 className="projects-heading">Skill Assessments</h1>
                <div className="projects-table-wrapper">
                    <table className="projects-table">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Quiz Score</th>
                                <th>Test Score</th>
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
                                    <td>{student.quiz}%</td>
                                    <td>{student.test}%</td>
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