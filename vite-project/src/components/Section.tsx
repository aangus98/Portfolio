import React from "react";

interface SectionProps {
  id: string;
  isActive: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const Section: React.FC<SectionProps> = ({ isActive, children, onClose }) => {
  if (!isActive) return null;

  return (
    <div
      className="section"
      style={{
        position: "fixed",
        top: "10%",
        left: "10%",
        width: "80%",
        height: "80%",
        background: "rgba(255, 255, 255, 0.9)",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
        overflow: "auto",
        zIndex: 10,
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {children}
    </div>
  );
};

export default Section;
