import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/styles.css";

const About = () => {
  return (
    <div className="projects-page">
      <Navbar />
      
      <main className="projects-main">
        <h1 className="projects-heading">About Uptoskills</h1>
        <p className="projects-description">
          A mentor-driven platform built to help students grow through real projects and continuous learning.
        </p>

        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div className="page-hero">
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🚀</div>
            <h2 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "10px" }}>
              Skills for Lifetime
            </h2>
            <p style={{ color: "#6b7280", fontSize: "15px", lineHeight: "1.7" }}>
              Uptoskills connects mentors and students to build skills that matter in the real world — through projects, assessments, and open source contributions.
            </p>
          </div>

          {[
            {
              icon: "🎯",
              title: "Our Mission",
              text: "We believe every student deserves a mentor who guides them through real-world challenges. Our platform makes mentorship accessible to everyone.",
            },
            {
              icon: "🛠️",
              title: "What We Do",
              text: "We provide tools for mentors to track progress, give feedback, review open source contributions, and run skill assessments — all in one place.",
            },
            {
              icon: "👨‍💻",
              title: "Our Team",
              text: "Built with 💻 by learners, for learners. Our team is a group of passionate developers and educators committed to making education better.",
            },
            {
              icon: "🌍",
              title: "Our Vision",
              text: "A world where every student has access to quality mentorship, regardless of background or location.",
            },
          ].map((item, i) => (
            <div key={i} className="info-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div style={{ fontSize: "28px", lineHeight: 1 }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px", color: "#111827" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.7", margin: 0 }}>
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;