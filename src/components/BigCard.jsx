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
    const xPercent = ((clientX - left) / width) * 120;
    const yPercent = ((clientY - top) / height) * 120;

    // Update the background position
    setBgPosition({
      x: `${xPercent}%`,
      y: `${yPercent}%`,
    });
  };

  return (
    <div
      className="flex flex-col h-[390px] big-card hover:shadow-lg bg-white/90 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1
          ring-zinc-900/5  rounded-2xl transition-all duration-300 justify-start p-4 pt-7"
      onMouseMove={handleMouseMove}
      onMouseOut={() => setBgPosition({ x: "-100%", y: "-20%" })}
      style={{
        background: `radial-gradient(300px at ${bgPosition.x} ${bgPosition.y}, rgb(228, 247, 242), transparent)`,
      }}
    >
      <div className="flex flex-row w-full justify-between align-middle mb-4">
        <a href={live} target="_blank">
          <img src={icon} alt="vercel" />
        </a>
        <div className="heading px-2">
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="button inline-block py-1 px-3 rounded-lg bg-[#627cfc] text-white hover:bg-[#7f8df8]"
          >
            Code
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 inline-block py-1 px-3 rounded-lg bg-[#fb3f3f] text-white hover:bg-[#f87575]"
            >
              Live
            </a>
          )}
        </div>
      </div>
      <div className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </div>
      <div className="leading-6 pt-4 text-gray-700 dark:text-gray-300">
        {description}
      </div>
        <img src={photo} alt="project" className="mt-10 h-1/2 rounded-lg bg-slate-300" />
      
    </div>
  );
}
