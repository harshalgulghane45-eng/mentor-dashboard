import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { studentsData } from "../data/studentsData";
import "../styles/styles.css";

const MultiStudentView = () => {
    const [selected, setSelected] = useState(0);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const navigate = useNavigate(); 
    const s = studentsData[selected];

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientY - rect.top) / rect.height - 0.5) * 20; // Increased tilt intensity
        const y = ((e.clientX - rect.left) / rect.width - 0.5) * -20;
        setTilt({ x, y });
    };

    const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

    return (
        <div className="projects-page">
            <Navbar />
            <main className="projects-main">
                <div className="float-animation" style={{ textAlign: 'center' }}>
                    <h1 className="projects-heading">Comparison Deck</h1>
                    <p className="projects-description">
                        Toggle between student profiles with real-time 3D interaction.
                    </p>
                </div>

                {/* Staggered Tab Buttons */}
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px", justifyContent: "center" }}>
                    {studentsData.map((student, index) => (
                        <button
                            key={index}
                            onClick={() => setSelected(index)}
                            className="stat-card-hover"
                            style={{
                                display: "flex", alignItems: "center", gap: "8px",
                                padding: "10px 24px", borderRadius: "30px", cursor: "pointer",
                                border: selected === index ? "2px solid #005bff" : "1px solid rgba(0,91,255,0.1)",
                                background: selected === index ? "rgba(0,91,255,0.15)" : "transparent",
                                color: selected === index ? "#005bff" : "inherit",
                                fontWeight: "600",
                                fontSize: "14px",
                                transition: "all 0.3s ease",
                                animation: `fadeSlideDown 0.5s ease both ${index * 0.1}s`
                            }}
                        >
                            <img src={student.avatar} alt={student.name} style={{ width: "28px", height: "28px", borderRadius: "50%", objectFit: "cover" }} />
                            {student.name.split(" ")[0]}
                        </button>
                    ))}
                </div>

                {/* The 3D Glass Hero Card */}
                <div
                    className="info-card glass-card float-animation"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        maxWidth: "550px", margin: "0 auto",
                        padding: "50px",
                        textAlign: "center",
                        transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                        transition: tilt.x === 0 ? "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)" : "transform 0.1s linear",
                        position: "relative"
                    }}
                >
                    {/* Status Badge with Glow */}
                    <div style={{ position: "absolute", top: "30px", right: "30px" }}>
                        <span style={{
                            padding: "8px 18px", borderRadius: "30px", fontSize: "11px", fontWeight: "800",
                            letterSpacing: "1px",
                            background: s.status === "Active" ? "rgba(16, 185, 129, 0.15)" : "rgba(239, 68, 68, 0.15)",
                            color: s.status === "Active" ? "#10b981" : "#ef4444",
                            border: `1px solid ${s.status === "Active" ? "rgba(16, 185, 129, 0.3)" : "rgba(239, 68, 68, 0.3)"}`
                        }}>{s.status.toUpperCase()}</span>
                    </div>

                    <img 
                        src={s.avatar} 
                        alt={s.name} 
                        style={{ 
                            width: "140px", height: "140px", borderRadius: "50%", 
                            objectFit: "cover", marginBottom: "25px", 
                            border: "4px solid #005bff", 
                            boxShadow: "0 15px 35px rgba(0, 91, 255, 0.25)" 
                        }} 
                    />
                    
                    <h2 style={{ margin: "0 0 8px", fontSize: "28px", fontWeight: "800" }}>{s.name}</h2>
                    <p style={{ opacity: 0.6, fontSize: "16px", marginBottom: "25px" }}>{s.email}</p>

                    {/* Social Quick-Links */}
                    <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "30px" }}>
                        <a href={s.socials.github} target="_blank" rel="noreferrer" className="social-btn-3d github" style={{ padding: '8px 20px', fontSize: '12px' }}>GitHub</a>
                        <a href={s.socials.linkedin} target="_blank" rel="noreferrer" className="social-btn-3d linkedin" style={{ padding: '8px 20px', fontSize: '12px' }}>LinkedIn</a>
                    </div>

                    {/* Nested Glass Stats Box */}
                    <div style={{ 
                        background: "rgba(255,255,255,0.05)", 
                        backdropFilter: "blur(5px)",
                        borderRadius: "20px", 
                        padding: "25px", 
                        textAlign: "left", 
                        border: "1px solid rgba(255,255,255,0.1)", 
                        marginBottom: "30px",
                        boxShadow: "inset 0 0 20px rgba(0,0,0,0.02)"
                    }}>
                        <p style={{ margin: "0 0 15px", fontSize: "16px" }}>
                            <strong>Project:</strong> <span style={{ color: "#005bff", fontWeight: "600" }}>{s.project}</span>
                        </p>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", marginBottom: "8px" }}>
                            <span style={{ fontWeight: 700 }}>Pulse Level</span>
                            <span style={{ color: "#005bff", fontWeight: "800" }}>{s.progress}%</span>
                        </div>
                        <div className="progress-bar" style={{ height: "12px", borderRadius: '10px' }}>
                            <div className="progress-fill" style={{ width: `${s.progress}%`, boxShadow: "0 0 15px rgba(0, 91, 255, 0.5)" }}></div>
                        </div>
                    </div>

                    <button 
                        onClick={() => navigate(`/student/${s.id}`)}
                        className="stat-card-hover"
                        style={{
                            width: "100%", padding: "15px", borderRadius: "15px",
                            background: "linear-gradient(135deg, #005bff, #00c6ff)",
                            color: "white", border: "none", fontSize: "16px", fontWeight: "700",
                            cursor: "pointer", transition: "all 0.3s ease",
                            boxShadow: "0 10px 20px rgba(0,91,255,0.3)"
                        }}
                    >
                        Enter Profile Universe →
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MultiStudentView;