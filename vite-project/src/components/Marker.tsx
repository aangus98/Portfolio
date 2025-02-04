import React from "react";

interface MarkerProps {
  label: string;
  position: { top: string; left: string };
  onClick: () => void;
}

const Marker: React.FC<MarkerProps> = ({ label, position, onClick }) => {
  return (
    <div
      className="marker"
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        transform: "translate(-50%, -50%)",
      }}
      onClick={onClick}
    >
      <span>{label}</span>
      <div className="pulse"></div> {/* 🔥 Animated pulse effect */}
    </div>
  );
};

export default Marker;
