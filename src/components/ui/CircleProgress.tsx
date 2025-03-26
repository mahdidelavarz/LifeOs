import React from "react";
import { useProgressStore } from "../../store/ProfileProgressStore";

const CircleProgress: React.FC = () => {
  const step = useProgressStore((state) => state.step);

  // Define quarter-circle paths
  const arcs: string[] = [
    "M 50,10 A 40,40 0 0,1 90,50", // Top-right
    "M 90,50 A 40,40 0 0,1 50,90", // Bottom-right
    "M 50,90 A 40,40 0 0,1 10,50", // Bottom-left
    "M 10,50 A 40,40 0 0,1 50,10", // Top-left
  ];

  return (
    <div className="text-center relative">
      <svg width="50" height="50" viewBox="0 0 100 100">
        {/* Background Circle (light gray) */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="lightgray"
          strokeWidth="6"
        />

        {/* Blue arcs with rounded ends */}
        {arcs.map((d, index) => (
          <path
            key={index}
            d={d}
            stroke={index < step ? "#155e75" : "transparent"} // Blue color only for active steps
            strokeWidth="8"
            fill="none"
            strokeLinecap="round" // Rounded ends for blue arcs only
          />
        ))}
      </svg>
      <span className="text-text-gray text-xs absolute top-3.5 right-4">
        <b className="text-black text-base">1</b>/4
      </span>
    </div>
  );
};

export default CircleProgress;
