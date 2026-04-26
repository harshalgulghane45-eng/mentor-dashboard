import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { studentsData } from "../data/studentsData";
import "../styles/styles.css";

const StudentProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const student = studentsData.find(s => s.id === id);

    if (!student) {
        return (
            <div className="projects-page">
                <Navbar />
                <main className="projects-main">
                    <h1>Student Not Found 😢</h1>
                    <button onClick={() => navigate("/")} style={{ padding: "10px 20px", marginTop: "20px", cursor: "pointer" }}>Go Home</button>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="projects-page">
            <Navbar />
            <main className="projects-main">
                <button 
                    onClick={() => navigate(-1)} 
                    style={{ background: "none", border: "none", color: "#005bff", cursor: "pointer", fontWeight: "600", fontSize: "15px", marginBottom: "20px", display: "flex", gap: "5px", alignItems: "center" }}
                >
                    ← Back to Dashboard
                </button>
                
                {/* ✅ Using className="info-card" ONLY. No inline background colors! */}
                <div className="info-card" style={{ maxWidth: "800px", margin: "0 auto", padding: "40px", borderRadius: "24px" }}>
                    
                    {/* Header: Avatar, Info, and Socials */}
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "32px", borderBottom: "1px solid #e5e7eb", paddingBottom: "30px", marginBottom: "30px" }}>
                        <img src={student.avatar} alt={student.name} style={{ width: "140px", height: "140px", borderRadius: "50%", objectFit: "cover", border: "4px solid #f0f4ff", boxShadow: "0 8px 16px rgba(0,91,255,0.15)" }} />
                        <div style={{ textAlign: "left", flex: 1 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" }}>
                                <div>
                                    <h1 style={{ margin: "0 0 8px", fontSize: "32px" }}>{student.name}</h1>
                                    <p className="student-email" style={{ margin: "0 0 12px", fontSize: "16px" }}>{student.email}</p>
                                    <span style={{ background: student.status === "Active" ? "rgba(16, 185, 129, 0.15)" : "rgba(239, 68, 68, 0.15)", color: student.status === "Active" ? "#10b981" : "#ef4444", padding: "6px 14px", borderRadius: "20px", fontSize: "13px", fontWeight: "600" }}>
                                        {student.status}
                                    </span>
                                </div>
                                
                                {/* Social Buttons */}
                                <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
                                    <a href={student.socials.github} target="_blank" rel="noreferrer" style={{ padding: "8px 16px", borderRadius: "8px", background: "#1f2937", color: "white", textDecoration: "none", fontSize: "14px", fontWeight: "600", display: "flex", alignItems: "center", gap: "8px" }}>
                                        GitHub
                                    </a>
                                    <a href={student.socials.linkedin} target="_blank" rel="noreferrer" style={{ padding: "8px 16px", borderRadius: "8px", background: "#0a66c2", color: "white", textDecoration: "none", fontSize: "14px", fontWeight: "600", display: "flex", alignItems: "center", gap: "8px" }}>
                                        LinkedIn
                                    </a>
                                </div>
                            </div>

                            {/* Bio & Skills */}
                            <p className="projects-description" style={{ margin: "20px 0 16px", textAlign: "left", maxWidth: "100%" }}>{student.bio}</p>
                            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                                {student.skills.map((skill, i) => (
                                    <span key={i} style={{ background: "rgba(0, 91, 255, 0.1)", color: "#005bff", padding: "4px 12px", borderRadius: "16px", fontSize: "12px", fontWeight: "600" }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", textAlign: "left" }}>
                        
                        {/* Project Progress */}
                        <div style={{ padding: "20px", background: "rgba(0,0,0,0.03)", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.05)" }}>
                            <h3 style={{ margin: "0 0 10px", fontSize: "13px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "1px" }}>Current Project</h3>
                            <p style={{ margin: "0 0 15px", fontWeight: "600", fontSize: "16px" }}>{student.project}</p>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "6px" }}>
                                <span>Progress</span>
                                <span style={{ fontWeight: "700", color: "#005bff" }}>{student.progress}%</span>
                            </div>
                            <div className="progress-bar" style={{ height: "6px" }}><div className="progress-fill" style={{ width: `${student.progress}%` }}></div></div>
                        </div>

                        {/* Open Source */}
                        <div style={{ padding: "20px", background: "rgba(0,0,0,0.03)", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.05)" }}>
                            <h3 style={{ margin: "0 0 10px", fontSize: "13px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "1px" }}>Open Source</h3>
                            <p style={{ margin: "0 0 8px", fontWeight: "600", fontSize: "15px" }}>{student.repo}</p>
                            <p style={{ margin: 0, fontSize: "14px" }}><strong>{student.prs}</strong> Pull Requests</p>
                        </div>

                        {/* Skill Assessments */}
                        <div style={{ padding: "20px", background: "rgba(0,0,0,0.03)", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.05)" }}>
                            <h3 style={{ margin: "0 0 10px", fontSize: "13px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "1px" }}>Assessments</h3>
                            <p style={{ margin: "0 0 8px", fontSize: "14px", display: "flex", justifyContent: "space-between" }}><span>Quiz:</span> <strong>{student.quiz}%</strong></p>
                            <p style={{ margin: "0 0 8px", fontSize: "14px", display: "flex", justifyContent: "space-between" }}><span>Test:</span> <strong>{student.test}%</strong></p>
                            <p style={{ margin: 0, fontSize: "14px", display: "flex", justifyContent: "space-between" }}><span>Continuous:</span> <strong>{student.continuous}%</strong></p>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default StudentProfile;