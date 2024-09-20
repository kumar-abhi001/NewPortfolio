import React from 'react'
import "./Mainleft.css"
export default function MainLeft() {
  return (
    <div className='main-left'>
        <img className="main-img" src="about-pic.png" alt="abhi" />
        <div className='name-heading mt-10'>Abhishek Kumar</div>
        <div class="mt-3 text-[#565656]  xl:mt-3 xl:text-xl">
          <div class="">
              <div className="" >
                <p >✦ Final Year - LPU</p>
                <p >✦ Full Stack Developer</p>
                <p >✦ MERN Stack</p>
                <p >✦ Some other point</p>
                <p >✦ Other point</p>
              </div>
          </div>
      </div>
    </div>
  );
}
