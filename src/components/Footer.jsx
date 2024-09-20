import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className=" text-[#7a808c] font-normal">
      <div className="footer-1 grid grid-cols-3 my-10">
        <div className="flex flex-col">
          <a href="">Home</a>
          <a href="">Projects</a>
          <a href="">Blog</a>
          <a href="">Link</a>
        </div>
        <div className="flex flex-col">
          <a href="">Github</a>
          <a href="">LinkedIn</a>
          <a href="">Twitter</a>
          <a href="">Instagram</a>
        </div>
        <div className="flex flex-col">
          <a href="">Leetcode</a>
          <a href="">Gfg</a>
          <a href="">CodeStudio</a>
          <a href="">CodeChef</a>
          <a href="">CodeForces</a>
        </div>
      </div>
      <div>
        <div className="text-[#aeb3be]">Find me on X</div>
        <div className="text-[#aeb3be]">
          Portfolio inspired by <a href="#many">Manu Arora</a>
        </div>
      </div>
    </div>
  );
}
