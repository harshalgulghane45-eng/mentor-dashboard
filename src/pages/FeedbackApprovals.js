import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/styles.css";

const initialMilestones = [
    { name: "Ayush Sawaliya", avatar: "/ayush-profile.jpg", milestone: "UI Design Complete", status: "Pending" },
    { name: "Harshal Gulghane", avatar: "/harshal-profile.jpg", milestone: "Backend API Ready", status: "Pending" },
    { name: "Rehan Shaikh", avatar: "/rehan-profile.jpg", milestone: "Database Schema", status: "Approved" },
    { name: "Shreyansh Pandey", avatar: "/shreyansh-profile.jpg", milestone: "Auth Module", status: "Pending" },
    { name: "Devendra Rajpurohit", avatar: "/devendra-profile.jpg", milestone: "Deployment Setup", status: "Approved" },
];

const FeedbackApprovals = () => {
    const [milestones, setMilestones] = useState(initialMilestones);
    const [feedbacks, setFeedbacks] = useState({});

    const handleApprove = (index) => {
        const updated = [...milestones];
        updated[index].status = "Approved";
        setMilestones(updated);
    };

    const handleFeedbackChange = (index, value) => {
        setFeedbacks({ ...feedbacks, [index]: value });
    };

    return (
        <div className="projects-page">
            <Navbar />
            <main className="projects-main">
                <h1 className="projects-heading">Feedback & Approvals</h1>
                <p className="projects-description">
                    Give personalized feedback and approve submitted milestones with ease.
                </p>
                <div className="projects-table-wrapper">
                    <table className="projects-table">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Milestone</th>
                                <th>Feedback</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {milestones.map((s, index) => (
                                <tr key={index} style={{ animation: "fadeSlideUp 0.5s ease both", animationDelay: `${index * 0.1}s` }}>
                                    <td className="student-cell">
                                        <div className="student-content">
                                            <img src={s.avatar} alt={s.name} />
                                            <div className="student-name">{s.name}</div>
                                        </div>
                                    </td>
                                    <td><span style={{ fontWeight: 500 }}>{s.milestone}</span></td>
                                    <td>
                                        <input
                                            type="text"
                                            placeholder="Write feedback..."
                                            value={feedbacks[index] || ""}
                                            onChange={(e) => handleFeedbackChange(index, e.target.value)}
                                            style={{
                                                border: "1px solid #d1d5db",
                                                borderRadius: "8px",
                                                padding: "8px 12px",
                                                fontSize: "13px",
                                                width: "100%",
                                                maxWidth: "200px",
                                                transition: "border-color 0.2s, box-shadow 0.2s",
                                                outline: "none"
                                            }}
                                            onFocus={(e) => { e.target.style.borderColor = "#005bff"; e.target.style.boxShadow = "0 0 0 3px rgba(0,91,255,0.1)"; }}
                                            onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; e.target.style.boxShadow = "none"; }}
                                        />
                                    </td>
                                    <td>
                                        {s.status === "Approved" ? (
                                            <span style={{ color: "#065f46", background: "#d1fae5", padding: "6px 16px", borderRadius: "20px", fontSize: "13px", fontWeight: "600", display: "inline-block" }}>
                                                ✓ Approved
                                            </span>
                                        ) : (
                                            <button
                                                onClick={() => handleApprove(index)}
                                                style={{
                                                    background: "linear-gradient(135deg, #4f46e5, #3b82f6)",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "20px",
                                                    padding: "8px 18px",
                                                    cursor: "pointer",
                                                    fontSize: "13px",
                                                    fontWeight: "600",
                                                    boxShadow: "0 4px 12px rgba(79, 70, 229, 0.2)",
                                                    transition: "transform 0.2s, box-shadow 0.2s"
                                                }}
                                                onMouseOver={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 6px 16px rgba(79, 70, 229, 0.3)"; }}
                                                onMouseOut={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 12px rgba(79, 70, 229, 0.2)"; }}
                                            >
                                                Approve
                                            </button>
                                        )}
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

export default FeedbackApprovals;