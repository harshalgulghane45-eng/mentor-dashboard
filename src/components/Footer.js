import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const Footer = () => {
    const navigate = useNavigate();

    const linkStyle = {
        cursor: "pointer",
        color: "#d1d5db",
        textDecoration: "none",
        display: "block"
    };

    return (
        <>
            <footer className="dashboard-footer">
                <div>
                    <h4>Uptoskills</h4>
                    <ul>
                        <li><span style={linkStyle} onClick={() => navigate("/about")}>About</span></li>
                        <li><a href="https://dev.to" target="_blank" rel="noreferrer">Blog</a></li>
                        <li><a href="https://www.linkedin.com/jobs" target="_blank" rel="noreferrer">Careers</a></li>
                        <li><a href="https://techcrunch.com" target="_blank" rel="noreferrer">Press</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Programs</h4>
                    <ul>
                        <li><a href="https://internshala.com" target="_blank" rel="noreferrer">Internships</a></li>
                        <li><a href="https://github.com/explore" target="_blank" rel="noreferrer">Open Source</a></li>
                        <li><a href="https://devfolio.co/hackathons" target="_blank" rel="noreferrer">Hackathons</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Resources</h4>
                    <ul>
                        <li><span style={linkStyle} onClick={() => navigate("/help-center")}>Help Center</span></li>
                        <li><span style={linkStyle} onClick={() => navigate("/community")}>Community</span></li>
                        <li><a href="mailto:contact@uptoskills.com">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Legal</h4>
                    <ul>
                        <li><span style={linkStyle} onClick={() => navigate("/privacy-policy")}>Privacy Policy</span></li>
                        <li><span style={linkStyle} onClick={() => navigate("/terms")}>Terms</span></li>
                    </ul>
                </div>
                <div>
                    <h4>Dashboard</h4>
                    <ul>
                        <li><span style={linkStyle} onClick={() => navigate("/")}>Home</span></li>
                        <li><span style={linkStyle} onClick={() => navigate("/track-students")}>Track Students</span></li>
                        <li><span style={linkStyle} onClick={() => navigate("/projects-progress")}>Projects Progress</span></li>
                        <li><span style={linkStyle} onClick={() => navigate("/skill-assessments")}>Skill Assessments</span></li>
                        <li><span style={linkStyle} onClick={() => navigate("/feedback-approvals")}>Feedback & Approvals</span></li>
                        <li><span style={linkStyle} onClick={() => navigate("/multi-student-view")}>Multi-Student View</span></li>
                        <li><span style={linkStyle} onClick={() => navigate("/open-source-contributions")}>Open Source</span></li>
                    </ul>
                </div>
            </footer>
            <div className="dashboard-bottom">
                © 2025 Uptoskills, Built with 💻 by learners.
            </div>
        </>
    );
};

export default Footer;