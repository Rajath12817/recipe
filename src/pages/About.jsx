import React from "react";

const About = () => {
  const teamMembers = [
    { name: "Rajath", role: "Backend Developer", contribution: "Optimized APIs, handled database design, and implemented server-side logic with precision." },
    { name: "Pranav", role: "Frontend Developer", contribution: "Crafted a responsive user interface using React, ensuring an engaging and seamless user experience." },
    { name: "Rudra", role: "Database & Frontend Manager", contribution: "Led frontend design and managed database systems for efficient data handling." },
  ];

  return (
    <div
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/1737995.jpg')", // Background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Poppins', sans-serif",
        color: "#FFF",
        padding: "4rem 2rem",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom right, rgba(30, 58, 138, 0.7), rgba(59, 130, 246, 0.7))",
          zIndex: -1,
        }}
      ></div>

      {/* Heading */}
      <h1
        style={{
          color: "#FFD700",
          fontSize: "4rem",
          marginBottom: "2rem",
          textAlign: "center",
          fontWeight: "700",
          fontFamily: "'Abril Fatface', cursive",
          textShadow: "3px 3px 8px rgba(0, 0, 0, 0.5)",
        }}
      >
        Meet Our Team
      </h1>

      {/* Paragraph */}
      <p
        style={{
          fontSize: "1.5rem",
          marginBottom: "3rem",
          lineHeight: "1.8",
          maxWidth: "800px",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          color: "#FFF",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background for readability
          padding: "1.5rem 2rem",
          borderRadius: "12px",
        }}
      >
        Welcome to <strong>Indian Bites!</strong> Our platform is designed to bring the rich flavors of India to your kitchen. 
        Discover curated recipes, share cooking tips, and enjoy a seamless culinary experience with us. 
        Indian Bites combines creativity with functionality to inspire food enthusiasts across the globe.
      </p>

      {/* Team Contributions */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#FFF",
              padding: "1.5rem",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
              flex: "1 1 calc(25% - 2rem)",
              minWidth: "220px",
              height: "240px", // Increased height for enhanced content
              animation: `slideIn 0.8s ease-in-out ${index * 0.2}s forwards`,
              transform: "translateY(50px)", // Initial state for animation
              opacity: 0,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 255, 255, 0.6)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #3B82F6, #1E3A8A)",
                zIndex: -1,
                opacity: 0.1,
              }}
            ></div>
            <h3 style={{ color: "#1E3A8A", marginBottom: "0.5rem", fontSize: "1.8rem", fontWeight: "600" }}>
              {member.name}
            </h3>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#3B82F6",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              {member.role}
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#555",
                lineHeight: "1.5",
                fontStyle: "italic", // Italicized for aesthetic enhancement
                margin: "0 auto",
                maxWidth: "90%",
              }}
            >
              "{member.contribution}"
            </p>
          </div>
        ))}
      </div>

      {/* Inline Animation Styles */}
      <style>
        {`
          @keyframes slideIn {
            0% {
              transform: translateY(50px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;