import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/styles.css";

const posts = [
  { author: "Devendra Rajpurohit", time: "2 hours ago", message: "Just hit 80% progress on my Learning Platform project! Feeling great 🚀", avatar: "/devendra-profile.jpg", tag: "Milestone" },
  { author: "Ayush Sawaliya", time: "5 hours ago", message: "Anyone else working on a Learning Platform? Would love to collaborate!", avatar: "/ayush-profile.jpg", tag: "Question" },
  { author: "Harshal Gulghane", time: "1 day ago", message: "Finished the backend API for my Portfolio Website. Open source PR submitted!", avatar: "/harshal-profile.jpg", tag: "Achievement" },
  { author: "Rehan Shaikh", time: "2 days ago", message: "Struggling with mobile app navigation — any tips from mentors?", avatar: "/rehan-profile.jpg", tag: "Help" },
  { author: "Shreyansh Pandey", time: "3 days ago", message: "Starting my auth module today. Wish me luck! 💪", avatar: "/shreyansh-profile.jpg", tag: "Update" },
];

const tagColors = {
  Milestone: { bg: "#eaf3de", color: "#3b6d11" },
  Question: { bg: "#e6f1fb", color: "#0c447c" },
  Achievement: { bg: "#faeeda", color: "#633806" },
  Help: { bg: "#fbeaf0", color: "#72243e" },
  Update: { bg: "#eeedfe", color: "#3c3489" },
};

const Community = () => {
  return (
    <div className="projects-page">
      <Navbar />
      <main className="projects-main">
        <h1 className="projects-heading">Community</h1>
        <p className="projects-description">See what students and mentors are sharing across the platform.</p>

        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          {posts.map((post, index) => (
            <div key={index} className="info-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <img src={post.avatar} alt={post.author} style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover", border: "2px solid #e5e7eb" }} />
                  <div>
                    <div style={{ fontWeight: "600", fontSize: "15px", color: "#111827" }}>{post.author}</div>
                    <div style={{ fontSize: "12px", color: "#9ca3af" }}>{post.time}</div>
                  </div>
                </div>
                <span style={{
                  fontSize: "11px", fontWeight: "600", padding: "4px 10px", borderRadius: "20px",
                  background: tagColors[post.tag].bg, color: tagColors[post.tag].color
                }}>{post.tag}</span>
              </div>
              <p style={{ margin: 0, fontSize: "14px", color: "#374151", lineHeight: "1.7" }}>{post.message}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;