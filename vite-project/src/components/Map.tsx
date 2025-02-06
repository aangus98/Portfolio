import React, { useRef, useState, useEffect } from "react";
import Marker from "./Marker";
import Section from "./Section";
import mapImage from "../assets/images/modern-world-antique-map.jpg";
import bioImage from "../assets/images/College_Photo.jpg";

interface MarkerData {
    id: string;
    label: string;
    position: { top: string; left: string };
  }
  
  const Map: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const svgRef = useRef<SVGPathElement | null>(null);

    const markers = [
      { id: "about", label: "About Me", position: { top: "15%", left: "17%" } },
      { id: "projects", label: "Projects", position: { top: "37%", left: "24.5%" } },
      { id: "skills", label: "Skills", position: { top: "20%", left: "50%" } },
      { id: "links", label: "Links", position: { top: "70%", left: "40%" } },
      { id: "contact", label: "Contact", position: { top: "30%", left: "55%" } },
    ];
  
   // Define the path string for the red line
  const pathString = `M 20% 30% L 60% 50% L 40% 70% L 80% 35% L 25% 85%`;

  // Animate the line drawing
  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.style.strokeDasharray = `${svgRef.current.getTotalLength()}`;
      svgRef.current.style.strokeDashoffset = `${svgRef.current.getTotalLength()}`;
      setTimeout(() => {
        if (svgRef.current) {
          svgRef.current.style.transition = "stroke-dashoffset 2s ease-in-out";
          svgRef.current.style.strokeDashoffset = "0";
        }
      }, 500);
    }
  }, []);

  return (
    <div className="map-container">
      {/* Indiana Jones Map */}
      <img src={mapImage} alt="Indiana Jones Map" className="map-background" />

      {/* Red Path Line */}
      <svg className="map-overlay">
        <path ref={svgRef} d={pathString} stroke="red" strokeWidth="3" fill="none" />
      </svg>

      {/* Markers */}
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          label={marker.label}
          position={marker.position}
          onClick={() => setActiveSection(marker.id)}
        />
      ))}

      {/* Sections */}
      <Section id="about" isActive={activeSection === "about"} onClose={() => setActiveSection(null)}>
        <h1>About Me</h1>
        <div className="about-section">
            <img src={bioImage} alt="Bio" className="bio-image" />
            <p>Your bio goes here...</p>
        </div>
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
