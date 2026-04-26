// PrivacyPolicy.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/styles.css";

const sections = [
  { icon: "📋", title: "Information We Collect", text: "We collect information you provide when registering, such as your name, email address, and role. We also collect usage data to improve the platform." },
  { icon: "🔍", title: "How We Use Your Information", text: "Your information is used to provide and improve our services, communicate with you, and personalize your experience." },
  { icon: "🤝", title: "Data Sharing", text: "We do not sell or share your personal data with third parties except as required by law or to operate our platform services." },
  { icon: "🔒", title: "Data Security", text: "We take reasonable measures to protect your data from unauthorized access, loss, or misuse." },
  { icon: "📬", title: "Contact Us", text: "If you have any questions about this Privacy Policy, please contact us at privacy@uptoskills.com." },
];

const PrivacyPolicy = () => (
  <div className="projects-page">
    <Navbar />
    <main className="projects-main">
      <h1 className="projects-heading">Privacy Policy</h1>
      <p className="projects-description">Last updated: April 2025 — We take your privacy seriously.</p>
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

export default PrivacyPolicy;