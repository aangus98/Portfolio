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
        textAlign: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {/* Section Name Above the X */}
      <div className="marker-label">{label}</div>

      {/* Red X */}
      <div className="marker-x">X</div>
    </div>
  );
};

export default Marker;
