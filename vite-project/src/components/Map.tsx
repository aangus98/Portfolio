import React, { useState } from "react";
import Marker from "./Marker";
import Section from "./Section";
import mapImage from "../assets/images/modern-world-antique-map.jpg";

const Map: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const markers = [
    { id: "about", label: "About Me", position: { top: "37%", left: "25%" } },
    { id: "projects", label: "Projects", position: { top: "20%", left: "49%" } },
    { id: "skills", label: "Skills", position: { top: "65%", left: "35%" } },
    { id: "links", label: "Links", position: { top: "33%", left: "86.5%" } },
    { id: "contact", label: "Contact", position: { top: "80%", left: "90%" } },
  ];

  return (
    <div className="map-container">
      <img src={mapImage} alt="Indiana Jones Map" className="map-background" />

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
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
        <br />
        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </Section>
      <Section id="contact" isActive={activeSection === "contact"} onClose={() => setActiveSection(null)}>
        <h1>Contact</h1>
        <p>Email: your-email@example.com</p>
      </Section>
    </div>
  );
};

export default Map;
