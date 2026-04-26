import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/styles.css";

const students = [
    { name: "Ayush Sawaliya", email: "ayush.sawaliya@example.com", project: "Learning Platform", status: "Active", avatar: "/ayush-profile.jpg" },
    { name: "Harshal Gulghane", email: "harshal.gulghane@example.com", project: "Portfolio Website", status: "Active", avatar: "/harshal-profile.jpg" },
    { name: "Rehan Shaikh", email: "rehan.shaikh@example.com", project: "Mobile App", status: "Inactive", avatar: "/rehan-profile.jpg" },
    { name: "Shreyansh Pandey", email: "shreyansh.pandey@example.com", project: "Learning Platform", status: "Active", avatar: "/shreyansh-profile.jpg" },
    { name: "Devendra Rajpurohit", email: "devendra.rajpurohit@example.com", project: "Learning Platform", status: "Active", avatar: "/devendra-profile.jpg" },
];

const TrackStudents = () => {
    return (
        <div className="projects-page">
            <Navbar />
            <main className="projects-main">
                <h1 className="projects-heading">Track Assigned Students</h1>
                <p className="projects-description">
                    View and manage the students assigned to you with detailed profiles.
                </p>
                <div className="projects-table-wrapper">
                    <table className="projects-table">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Project</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={index} style={{ animation: "fadeSlideUp 0.5s ease both", animationDelay: `${index * 0.1}s` }}>
                                    <td className="student-cell">
                                        <div className="student-content">
                                            <img src={student.avatar} alt={student.name} />
                                            <div className="student-info">
                                                <div className="student-name">{student.name}</div>
                                                <div className="student-email">{student.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span style={{ fontWeight: 500 }}>{student.project}</span></td>
                                    <td>
                                        <span style={{
                                            padding: "6px 14px",
                                            borderRadius: "20px",
                                            fontSize: "13px",
                                            fontWeight: "600",
                                            background: student.status === "Active" ? "#d1fae5" : "#fee2e2",
                                            color: student.status === "Active" ? "#065f46" : "#991b1b",
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                                        }}>
                                            {student.status}
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

export default TrackStudents;