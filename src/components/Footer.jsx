import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className=" text-[#7a808c] font-normal" id='footer'>
      <div className="footer-1 grid grid-cols-3 my-10">
        <div className="flex flex-col">
          <a href="">Home</a>
          <a href="">Projects</a>
          <a href="">Blog</a>
          <a href="">Link</a>
        </div>
        <div className="flex flex-col">
          <a href="https://github.com/kumar-abhi001/E-Learning" target="_blank">
            Github
          </a>
          <a href="https://www.linkedin.com/in/kumar-abhi001/" target="_blank">
            LinkedIn
          </a>
          <a href="https://x.com/_kumar_abhi__" target="_blank">
            Twitter
          </a>
          <a href="">Instagram</a>
        </div>
        <div className="flex flex-col">
          <a href="https://leetcode.com/kumar-abhi001" target="_blank">
            Leetcode
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/kumarabhi001/"
            target="_blank"
          >
            Gfg
          </a>
          <a
            href="https://www.naukri.com/code360/profile/kumar_abhi"
            target="_blank"
          >
            CodeStudio
          </a>
          <a href="https://www.codechef.com/users/abhishek6356" target="_blank">
            CodeChef
          </a>
          <a href="https://codeforces.com/profile/abhishek6356" target="_blank">
            CodeForces
          </a>
        </div>
      </div>
      <div>
        <div className="text-[#aeb3be]">
          Find me on <a href="https://x.com/_kumar_abhi__" target='_blank'>
          <img src="./twitter.png" alt="twitter" className='h-10 w-10 inline' />
          </a>
        </div>
        <div className="text-[#aeb3be]">
          Portfolio inspired by <a href="https://manuarora.in/">Manu Arora</a>
        </div>
      </div>
    </div>
  );
}
