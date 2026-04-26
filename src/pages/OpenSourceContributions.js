import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/styles.css";

const contributions = [
    { name: "Ayush Sawaliya", avatar: "/ayush-profile.jpg", repo: "facebook/react", prs: 2, status: "Merged" },
    { name: "Harshal Gulghane", avatar: "/harshal-profile.jpg", repo: "vercel/next.js", prs: 5, status: "Pending" },
    { name: "Rehan Shaikh", avatar: "/rehan-profile.jpg", repo: "tailwindlabs/tailwindcss", prs: 1, status: "Merged" },
    { name: "Shreyansh Pandey", avatar: "/shreyansh-profile.jpg", repo: "angular/angular", prs: 3, status: "Review" },
    { name: "Devendra Rajpurohit", avatar: "/devendra-profile.jpg", repo: "vuejs/core", prs: 4, status: "Merged" },
];

const OpenSourceContributions = () => {
    return (
        <div className="projects-page">
            <Navbar />
            <main className="projects-main">
                <h1 className="projects-heading">Open Source Contributions</h1>
                <p className="projects-description">
                    Review your student's pull requests, commits, and activity on open source platforms.
                </p>
                <div className="projects-table-wrapper">
                    <table className="projects-table">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Repository</th>
                                <th>Pull Requests</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contributions.map((c, index) => (
                                <tr key={index} style={{ animation: "fadeSlideUp 0.5s ease both", animationDelay: `${index * 0.1}s` }}>
                                    <td className="student-cell">
                                        <div className="student-content">
                                            <img src={c.avatar} alt={c.name} />
                                            <div className="student-name">{c.name}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#f3f4f6", padding: "6px 12px", borderRadius: "8px", fontSize: "13px", fontWeight: "600", color: "#374151" }}>
                                            <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
                                            {c.repo}
                                        </span>
                                    </td>
                                    <td>
                                        <span style={{ fontSize: "15px", fontWeight: "700", color: "#4f46e5" }}>{c.prs} PRs</span>
                                    </td>
                                    <td>
                                        <span style={{
                                            padding: "6px 14px",
                                            borderRadius: "20px",
                                            fontSize: "12px",
                                            fontWeight: "600",
                                            background: c.status === "Merged" ? "#d1fae5" : c.status === "Review" ? "#fef3c7" : "#e0e7ff",
                                            color: c.status === "Merged" ? "#065f46" : c.status === "Review" ? "#92400e" : "#3730a3",
                                        }}>
                                            {c.status}
                                        </span>
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

export default OpenSourceContributions;