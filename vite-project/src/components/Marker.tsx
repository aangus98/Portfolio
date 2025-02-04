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
        padding: "10px",
        borderRadius: "50%",
        backgroundColor: "#d4af37",
        cursor: "pointer",
        transform: "translate(-50%, -50%)",
      }}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Marker;