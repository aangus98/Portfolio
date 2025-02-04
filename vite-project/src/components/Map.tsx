import React, { useState } from "react";
import Marker from "./Marker";
import Section from "./Section";

const Map: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const markers = [
    { id: "about", label: "About Me", position: { top: "20%", left: "30%" } },
    { id: "projects", label: "Projects", position: { top: "40%", left: "60%" } },
    { id: "skills", label: "Skills", position: { top: "70%", left: "50%" } },
    { id: "links", label: "Links", position: { top: "30%", left: "80%" } },
    { id: "contact", label: "Contact", position: { top: "80%", left: "20%" } },
  ];

  return (
    <div className="map-container" style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <img
        src="assets/images/indiana-jones-map.jpg"
        alt="Map"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          label={marker.label}
          position={marker.position}
          onClick={() => setActiveSection(marker.id)}
        />
      ))}

      <Section id="about" isActive={activeSection === "about"} onClose={() => setActiveSection(null)}>
        <h1>About Me</h1>
        <p>Your bio goes here...</p>
      </Section>
      <Section id="projects" isActive={activeSection === "projects"} onClose={() => setActiveSection(null)}>
        <h1>Projects</h1>
        <p>Project details...</p>
      </Section>
      <Section id="skills" isActive={activeSection === "skills"} onClose={() => setActiveSection(null)}>
        <h1>Skills</h1>
        <p>Skills go here...</p>
      </Section>
      <Section id="links" isActive={activeSection === "links"} onClose={() => setActiveSection(null)}>
        <h1>Links</h1>
        <a href="https://github.com/your-username">GitHub</a>
        <a href="https://linkedin.com/in/your-username">LinkedIn</a>
      </Section>
      <Section id="contact" isActive={activeSection === "contact"} onClose={() => setActiveSection(null)}>
        <h1>Contact</h1>
        <p>Email: your-email@example.com</p>
      </Section>
    </div>
  );
};

export default Map;
