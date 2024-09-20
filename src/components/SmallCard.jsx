import React from 'react';
import "./SmallCard.css";

export default function SmallCard({
    icon,
    title
}) {
  return (
    <div
      className="bg-white/90 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1
          ring-zinc-900/5 backdrop-blur rounded-2xl h-16 flex flex-col justify-center px-8"
    >
      <div className="flex flex-row align-middle">
        <div>
          {icon}
        </div>
        <div className="ml-5">{title}</div>
      </div>
    </div>
  );
}
