import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css"; 
import logo from "./logo.png";

const Navbar = () => {
    const navigate = useNavigate();
    const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    const handleNav = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    return (
        <header className="dashboard-header" style={{ background: isDark ? "rgba(30, 41, 59, 0.85)" : "rgba(255,255,255,0.85)", transition: "background 0.3s ease" }}>
            
            <img 
                src={logo} 
                alt="Uptoskills Logo" 
                className="logo" 
                onClick={() => handleNav("/")} 
                style={{ cursor: "pointer", zIndex: 1000, position: "relative" }} 
            />
            
            {/* Hamburger Button */}
            <button 
                className="mobile-menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{ color: isDark ? "white" : "#333" }}
            >
                {isMenuOpen ? "✕" : "☰"}
            </button>

            {/* Navigation Links (No more ugly inline styles!) */}
            <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                <span className="nav-item" onClick={() => handleNav("/")}>Home</span>
                <span className="nav-item" onClick={() => handleNav("/about")}>About</span>
                <a href="https://devfolio.co/hackathons" target="_blank" rel="noreferrer" className="nav-item">Programs</a>
                
                <button 
                    className="theme-toggle-btn"
                    onClick={() => { setIsDark(!isDark); setIsMenuOpen(false); }}
                >
                    {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
            </nav>
        </header>
    );
};

export default Navbar;