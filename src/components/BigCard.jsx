import React, { useState } from "react";
import "./BigCard.css";
export default function BigCard({
  icon,
  code,
  live,
  title,
  description,
  photo,
}) {
  const [bgPosition, setBgPosition] = useState({ x: "-50%", y: "-50%" });

  // Function to handle mouse movement and update gradient position
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    // Calculate position relative to the element
    const xPercent = ((clientX - left) / width) * 100;
    const yPercent = ((clientY - top) / height) * 100;

    // Update the background position
    setBgPosition({
      x: `${xPercent}%`,
      y: `${yPercent}%`,
    });
  };

  return (
    <div
      className="big-card hover:shadow-lg bg-white/90 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1
          ring-zinc-900/5  rounded-2xl justify-center px-8 min-h-16 transition-all duration-300"
      onMouseMove={handleMouseMove}
      onMouseOut={() => setBgPosition({ x: "-100%", y: "-20%" })}
      style={{
        background: `radial-gradient(300px at ${bgPosition.x} ${bgPosition.y}, rgb(228, 247, 242), transparent)`,

        // radial-gradient(300px at 4.39996px 95px, white, transparent)
      }}
    >
      <div>
        <div>{icon}</div>
        <a href={code} target="_blank" rel="noopener noreferrer">
          <div>Code</div>
        </a>
        <a href={live} target="_blank" rel="noopener noreferrer">
          {live && <div>Live</div>}
        </a>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
