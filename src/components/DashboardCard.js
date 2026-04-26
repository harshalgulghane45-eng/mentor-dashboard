import React, { useState } from "react";

const iconColors = {
  "🎓": "#e6f1fb",
  "📈": "#eaf3de",
  "🧠": "#eeedfe",
  "🌐": "#e1f5ee",
  "📝": "#faeeda",
  "👥": "#fbeaf0",
};

const DashboardCard = ({ icon, title, description, onClick }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -10;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      className="dashboard-card"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(0px)`,
        transition: tilt.x === 0 ? "transform 0.5s ease" : "transform 0.1s ease",
      }}
    >
      <div className="card-icon" style={{ background: iconColors[icon] || "#f3f4f6" }}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {onClick && <div className="card-arrow">Open →</div>}
    </div>
  );
};

export default DashboardCard;