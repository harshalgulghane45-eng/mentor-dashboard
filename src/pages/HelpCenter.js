import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/styles.css";

const faqs = [
  { q: "How do I track my students?", a: "Go to 'Track Assigned Students' from the dashboard to see all your assigned students and their progress." },
  { q: "How do I approve a milestone?", a: "Navigate to 'Feedback & Approvals', find the student's milestone, write feedback, and click the Approve button." },
  { q: "How do I view skill assessment scores?", a: "Click on 'Skill Assessments' from the dashboard to see quiz, test, and continuous assessment scores." },
  { q: "How do I switch between students?", a: "Use the 'Multi-Student View' page to toggle between students using the tab buttons at the top." },
  { q: "How do I review open source contributions?", a: "Visit the 'Open Source Contributions' page to see each student's pull requests, commits, and activity." },
];

const HelpCenter = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="projects-page">
      <Navbar />
      <main className="projects-main">
        <h1 className="projects-heading">Help Center</h1>
        <p className="projects-description">Find answers to common questions about the Mentor Dashboard.</p>

        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div className="page-hero" style={{ marginBottom: "32px" }}>
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>💬</div>
            <p style={{ color: "#6b7280", fontSize: "15px", margin: 0 }}>Can't find your answer? Email us at <a href="mailto:contact@uptoskills.com" style={{ color: "#005bff" }}>contact@uptoskills.com</a></p>
          </div>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="info-card"
              style={{ animationDelay: `${index * 0.1}s`, padding: 0, overflow: "hidden" }}
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                style={{
                  width: "100%", textAlign: "left", padding: "20px 24px",
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: "15px", fontWeight: "600", color: "#111827",
                  display: "flex", justifyContent: "space-between", alignItems: "center"
                }}
              >
                <span>{faq.q}</span>
                <span style={{
                  fontSize: "20px", color: "#005bff",
                  transform: open === index ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  display: "inline-block"
                }}>+</span>
              </button>
              <div style={{
                maxHeight: open === index ? "200px" : "0",
                overflow: "hidden",
                transition: "max-height 0.4s ease",
              }}>
                <p style={{ padding: "0 24px 20px", fontSize: "14px", color: "#6b7280", lineHeight: "1.7", margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;