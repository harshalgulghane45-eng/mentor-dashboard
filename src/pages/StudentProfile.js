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
                    <h1 className="float-animation">Student Not Found 😢</h1>
                    <button className="action-btn" onClick={() => navigate("/")} style={{ marginTop: "20px" }}>Go Home</button>
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
                    className="back-btn-3d"
                    style={{ 
                        background: "none", border: "none", color: "#005bff", cursor: "pointer", 
                        fontWeight: "600", fontSize: "15px", marginBottom: "20px", 
                        display: "flex", gap: "8px", alignItems: "center",
                        transition: "transform 0.3s ease"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = "translateX(-5px)"}
                    onMouseOut={(e) => e.currentTarget.style.transform = "translateX(0)"}
                >
                    ← Back to Universe
                </button>
                
                {/* Main Glass Profile Card */}
                <div className="info-card glass-card" style={{ maxWidth: "900px", margin: "0 auto", padding: "50px", borderRadius: "32px", animation: "fadeSlideUp 0.6s ease both" }}>
                    
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px", borderBottom: "1px solid rgba(229, 231, 235, 0.2)", paddingBottom: "40px", marginBottom: "40px" }}>
                        
                        {/* 3D Floating Avatar */}
                        <div className="float-animation" style={{ position: 'relative' }}>
                            <img 
                                src={student.avatar} 
                                alt={student.name} 
                                style={{ 
                                    width: "160px", height: "160px", borderRadius: "50%", objectFit: "cover", 
                                    border: "6px solid rgba(0, 91, 255, 0.2)", 
                                    boxShadow: "0 20px 40px rgba(0, 91, 255, 0.3)" 
                                }} 
                            />
                            <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '20px', height: '20px', background: student.status === "Active" ? "#10b981" : "#ef4444", borderRadius: '50%', border: '3px solid white', boxShadow: "0 0 15px rgba(16, 185, 129, 0.5)" }}></div>
                        </div>

                        <div style={{ textAlign: "left", flex: 1 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "20px" }}>
                                <div>
                                    <h1 style={{ margin: "0 0 8px", fontSize: "42px", fontWeight: "800", letterSpacing: "-1px" }}>{student.name}</h1>
                                    <p className="student-email" style={{ margin: "0 0 15px", fontSize: "18px", opacity: 0.8 }}>{student.email}</p>
                                    <span style={{ 
                                        background: student.status === "Active" ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)", 
                                        color: student.status === "Active" ? "#10b981" : "#ef4444", 
                                        padding: "8px 18px", borderRadius: "30px", fontSize: "14px", fontWeight: "700",
                                        border: `1px solid ${student.status === "Active" ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)"}`
                                    }}>
                                        {student.status.toUpperCase()}
                                    </span>
                                </div>
                                
                                <div style={{ display: "flex", gap: "15px" }}>
                                    <a href={student.socials.github} target="_blank" rel="noreferrer" className="social-btn-3d github">GitHub</a>
                                    <a href={student.socials.linkedin} target="_blank" rel="noreferrer" className="social-btn-3d linkedin">LinkedIn</a>
                                </div>
                            </div>

                            <p style={{ margin: "25px 0", fontSize: "16px", lineHeight: "1.6", opacity: 0.9 }}>{student.bio}</p>
                            
                            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                                {student.skills.map((skill, i) => (
                                    <span key={i} className="skill-badge-3d">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Staggered Stats Grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "25px" }}>
                        
                        <div className="info-card glass-card stat-card-hover" style={{ animation: "fadeSlideUp 0.6s ease both 0.2s" }}>
                            <h3 className="stat-label">Project Roadmap</h3>
                            <p className="stat-value">{student.project}</p>
                            <div style={{ marginTop: '20px' }}>
                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "8px" }}>
                                    <span style={{ fontWeight: 600 }}>Completion</span>
                                    <span style={{ fontWeight: "800", color: "#005bff" }}>{student.progress}%</span>
                                </div>
                                <div className="progress-bar" style={{ height: "10px", borderRadius: "10px" }}>
                                    <div className="progress-fill" style={{ width: `${student.progress}%`, boxShadow: "0 0 15px rgba(0, 91, 255, 0.4)" }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="info-card glass-card stat-card-hover" style={{ animation: "fadeSlideUp 0.6s ease both 0.4s" }}>
                            <h3 className="stat-label">Git Ecosystem</h3>
                            <p className="stat-value" style={{ fontSize: '16px' }}>{student.repo}</p>
                            <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ fontSize: '24px' }}>🎋</div>
                                <div>
                                    <p style={{ margin: 0, fontSize: '14px', fontWeight: 700 }}>{student.prs} Contributions</p>
                                    <p style={{ margin: 0, fontSize: '12px', opacity: 0.6 }}>Milestone: {student.milestone}</p>
                                </div>
                            </div>
                        </div>

                        <div className="info-card glass-card stat-card-hover" style={{ animation: "fadeSlideUp 0.6s ease both 0.6s" }}>
                            <h3 className="stat-label">Core Performance</h3>
                            <div style={{ marginTop: '10px' }}>
                                <div className="mini-stat"><span>Quiz Master</span> <strong>{student.quiz}%</strong></div>
                                <div className="mini-stat"><span>Tech Exam</span> <strong>{student.test}%</strong></div>
                                <div className="mini-stat"><span>Continuous</span> <strong>{student.continuous}%</strong></div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default StudentProfile;