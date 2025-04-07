import React, { useState, useEffect } from "react";
import "./Navbar.css";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div
      className={`navbar flex justify-between items-center h-[36px] py-10 px-6 ${
        isScrolled ? "blur-nav dark:bg-inherit" : ""
      }`}
    >
      {/* Theme Toggle Button */}
      <div>
        <DarkModeToggle/>
      </div>

      {/* Navbar Options */}
      <div
        className="nav-div
         bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1
          ring-zinc-900/5 backdrop-blur dark:bg-gray-700 "
      >
        {["Home", "Skills", "Projects", "Profile", "Socials"].map((link) => (
          <div
            key={link}
            className={`nav-link cursor-pointer mx-2  ${
              activeLink === link ? "active-link" : ""
            }`}
            onClick={() => handleLinkClick(link)}
          >
            {link}
          </div>
        ))}
      </div>
    </div>
  );
}
