// Terms.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/styles.css";

const sections = [
  { icon: "✅", title: "Acceptance of Terms", text: "By using Uptoskills, you agree to these Terms of Service. If you do not agree, please do not use the platform." },
  { icon: "⚖️", title: "Use of the Platform", text: "You agree to use the platform only for lawful purposes and in a way that does not infringe the rights of others." },
  { icon: "👤", title: "Accounts", text: "You are responsible for maintaining the confidentiality of your account credentials and all activities under your account." },
  { icon: "💡", title: "Intellectual Property", text: "All content on this platform is owned by Uptoskills or its contributors. You may not reproduce content without permission." },
  { icon: "🚫", title: "Termination", text: "We reserve the right to suspend or terminate your account if you violate these terms." },
  { icon: "📬", title: "Contact", text: "For questions about these Terms, contact us at legal@uptoskills.com." },
];

const Terms = () => (
  <div className="projects-page">
    <Navbar />
    <main className="projects-main">
      <h1 className="projects-heading">Terms of Service</h1>
      <p className="projects-description">Last updated: April 2025 — Please read these terms carefully.</p>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        {sections.map((s, i) => (
          <div key={i} className="info-card" style={{ animationDelay: `${i * 0.1}s` }}>
            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{ fontSize: "26px" }}>{s.icon}</div>
              <div>
                <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px", color: "#111827" }}>{s.title}</h3>
                <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.7", margin: 0 }}>{s.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Terms;