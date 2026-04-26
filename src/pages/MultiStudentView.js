import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Added to allow navigation
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { studentsData } from "../data/studentsData";
import "../styles/styles.css";

const MultiStudentView = () => {
    const [selected, setSelected] = useState(0);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const navigate = useNavigate(); // ✅ Added navigation hook
    const s = studentsData[selected];

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
        const y = ((e.clientX - rect.left) / rect.width - 0.5) * -15;
        setTilt({ x, y });
    };

    const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

    return (
        <div className="projects-page">
            <Navbar />
            <main className="projects-main">
                <h1 className="projects-heading">Multi-Student View</h1>
                <p className="projects-description">
                    Easily toggle between multiple students to evaluate and mentor efficiently.
                </p>

                {/* Tab buttons */}
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px", justifyContent: "center", animation: "fadeSlideDown 0.6s ease both" }}>
                    {studentsData.map((student, index) => (
                        <button
                            key={index}
                            onClick={() => setSelected(index)}
                            style={{
                                display: "flex", alignItems: "center", gap: "8px",
                                padding: "8px 20px", borderRadius: "30px", cursor: "pointer",
                                border: selected === index ? "2px solid #005bff" : "2px solid transparent",
                                background: selected === index ? "rgba(0,91,255,0.1)" : "transparent",
                                color: selected === index ? "#005bff" : "inherit",
                                fontWeight: selected === index ? "600" : "500",
                                fontSize: "14px",
                                transition: "all 0.3s ease",
                            }}
                        >
                            <img src={student.avatar} alt={student.name} style={{ width: "28px", height: "28px", borderRadius: "50%", objectFit: "cover" }} />
                            {student.name.split(" ")[0]}
                        </button>
                    ))}
                </div>

                {/* 3D Student detail card - Using className="info-card" to respect Dark Mode */}
                <div
                    className="info-card"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        maxWidth: "600px", margin: "0 auto",
                        padding: "40px",
                        textAlign: "center",
                        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                        transition: tilt.x === 0 ? "transform 0.5s ease out" : "transform 0.1s ease",
                        position: "relative"
                    }}
                >
                    {/* Status Badge */}
                    <div style={{ position: "absolute", top: "24px", right: "24px" }}>
                        <span style={{
                            padding: "6px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: "600",
                            background: s.status === "Active" ? "rgba(16, 185, 129, 0.15)" : "rgba(239, 68, 68, 0.15)",
                            color: s.status === "Active" ? "#10b981" : "#ef4444"
                        }}>{s.status}</span>
                    </div>

                    <img src={s.avatar} alt={s.name} style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", marginBottom: "20px", border: "4px solid rgba(0,91,255,0.1)", boxShadow: "0 8px 16px rgba(0,91,255,0.15)" }} />
                    <h2 style={{ margin: "0 0 6px", fontSize: "24px", fontWeight: "700" }}>{s.name}</h2>
                    <p className="student-email" style={{ margin: "0 0 16px", fontSize: "15px" }}>{s.email}</p>

                    {/* Social Buttons */}
                    <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
                        {s.socials && (
                            <>
                                <a href={s.socials.github} target="_blank" rel="noreferrer" style={{ padding: "6px 16px", borderRadius: "8px", background: "#1f2937", color: "white", textDecoration: "none", fontSize: "13px", fontWeight: "600" }}>GitHub</a>
                                <a href={s.socials.linkedin} target="_blank" rel="noreferrer" style={{ padding: "6px 16px", borderRadius: "8px", background: "#0a66c2", color: "white", textDecoration: "none", fontSize: "13px", fontWeight: "600" }}>LinkedIn</a>
                            </>
                        )}
                    </div>

                    {/* Bio & Skills */}
                    <p className="projects-description" style={{ fontSize: "14px", marginBottom: "16px" }}>{s.bio}</p>
                    <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
                        {s.skills && s.skills.map((skill, i) => (
                            <span key={i} style={{ background: "rgba(0, 91, 255, 0.1)", color: "#005bff", padding: "4px 12px", borderRadius: "16px", fontSize: "12px", fontWeight: "600" }}>
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Stats Box */}
                    <div style={{ background: "rgba(0,0,0,0.03)", borderRadius: "16px", padding: "20px", textAlign: "left", border: "1px solid rgba(0,0,0,0.05)", marginBottom: "20px" }}>
                        <p style={{ margin: "0 0 12px", fontSize: "15px" }}><strong>Project:</strong> <span style={{ color: "#4f46e5", fontWeight: "500" }}>{s.project}</span></p>
                        <p style={{ margin: "0 0 10px", fontSize: "15px", display: "flex", justifyContent: "space-between" }}>
                            <strong>Overall Progress:</strong>
                            <span style={{ color: "#005bff", fontWeight: "700" }}>{s.progress}%</span>
                        </p>
                        <div className="progress-bar" style={{ height: "10px" }}>
                            <div className="progress-fill" style={{ width: `${s.progress}%` }}></div>
                        </div>
                    </div>

                    {/* ✅ THE NEW OPEN PROFILE BUTTON */}
                    <button 
                        onClick={() => navigate(`/student/${s.id}`)}
                        style={{
                            width: "100%", padding: "12px", borderRadius: "12px",
                            background: "linear-gradient(135deg, #005bff, #00c6ff)",
                            color: "white", border: "none", fontSize: "15px", fontWeight: "600",
                            cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s",
                            boxShadow: "0 4px 12px rgba(0,91,255,0.2)"
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,91,255,0.3)"; }}
                        onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,91,255,0.2)"; }}
                    >
                        View Full Profile →
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MultiStudentView;