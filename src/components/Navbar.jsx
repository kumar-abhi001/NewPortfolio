import React, { useState, useEffect } from "react";
import "./Navbar.css";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const links = ["Home", "Skills", "Projects", "Profile", "Socials"];

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
  <div className="nav-div flex gap-4">
  {links.map((link) => (
    <a
      key={link}
      onClick={() => setActiveLink(link)}
      className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 cursor-pointer"
    >
      <span
        className={`relative z-10 ${
          activeLink === link ? "text-teal-600" : ""
        }`}
      >
        {link}
      </span>

      {activeLink === link && (
        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
      )}
    </a>
  ))}
</div>

    </div>
  );
}
