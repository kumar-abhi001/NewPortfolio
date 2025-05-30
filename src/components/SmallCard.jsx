import React from 'react';
import "./SmallCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function SmallCard({
    icon,
    title,
    style
}) {
  return (
    <div
      className={`bg-white/90 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5  rounded-2xl flex flex-col justify-center px-8 min-h-16 transition-all
  duration-300 border ${style} dark:bg-[#27272a] dark:border-[#313e51] dark:text-white`}
    >
      <div className="flex flex-row items-center">
        <div>{icon}</div>
        <div className="ml-5">{title}</div>
      </div>
    </div>
  );
}
