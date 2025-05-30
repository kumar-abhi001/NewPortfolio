import React from "react";
import SmallCard from "./SmallCard";
import "./Body.css";
import BigCard from "./BigCard";

export default function Body() {
  return (
    <div>
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="font-[600] text-lg">Welcome 👋🏻</div>
        <div className=" grid grid-cols-2 grid-rows-5 gap-y-1 gap-x-10 auto-rows-custom">
          {/* Linkedin */}
          <a href="https://www.linkedin.com/in/kumar-abhi001/" target="_blank">
            <SmallCard
              icon={
                <svg
                  width="28"
                  height="28"
                  classNmae="h-full w-full"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="10" fill="#006699"></rect>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.7344 29V15.5053H10.249V29H14.7344ZM12.4917 13.6629C14.0558 13.6629 15.0294 12.6266 15.0294 11.3316C15.0002 10.0075 14.0558 9 12.5214 9C10.9871 9 9.98389 10.0075 9.98389 11.3316C9.98389 12.6266 10.9572 13.6629 12.4625 13.6629H12.4916H12.4917Z"
                    fill="white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.2163 29H21.7016V21.464C21.7016 21.0607 21.7308 20.6578 21.8492 20.3695C22.1735 19.5636 22.9115 18.7291 24.1506 18.7291C25.7736 18.7291 26.4229 19.9666 26.4229 21.7807V29H30.9078V21.2624C30.9078 17.1174 28.695 15.1887 25.744 15.1887C23.3243 15.1887 22.262 16.5412 21.6718 17.4624H21.7017V15.5053H17.2164C17.2753 16.7716 17.2164 29 17.2164 29H17.2163Z"
                    fill="white"
                  ></path>
                </svg>
              }
              title="linkedin.com"
              style="bg-[#f9fafc] hover:bg-[#f0f4fb] hover:shadow-lg"
            />
          </a>

          {/* //github */}
          <a href="https://github.com/kumar-abhi001" target="_blank">
            <SmallCard
              icon={
                <svg
                  width="28"
                  height="28"
                  className="h-full w-full"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="10" fill="black"></rect>
                  <g clipPath="url(#clip0_920_2749)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20 8C13.37 8 8 13.37 8 20C8 25.31 11.435 29.795 16.205 31.385C16.805 31.49 17.03 31.13 17.03 30.815C17.03 30.53 17.015 29.585 17.015 28.58C14 29.135 13.22 27.845 12.98 27.17C12.845 26.825 12.26 25.76 11.75 25.475C11.33 25.25 10.73 24.695 11.735 24.68C12.68 24.665 13.355 25.55 13.58 25.91C14.66 27.725 16.385 27.215 17.075 26.9C17.18 26.12 17.495 25.595 17.84 25.295C15.17 24.995 12.38 23.96 12.38 19.37C12.38 18.065 12.845 16.985 13.61 16.145C13.49 15.845 13.07 14.615 13.73 12.965C13.73 12.965 14.735 12.65 17.03 14.195C17.99 13.925 19.01 13.79 20.03 13.79C21.05 13.79 22.07 13.925 23.03 14.195C25.325 12.635 26.33 12.965 26.33 12.965C26.99 14.615 26.57 15.845 26.45 16.145C27.215 16.985 27.68 18.05 27.68 19.37C27.68 23.975 24.875 24.995 22.205 25.295C22.64 25.67 23.015 26.39 23.015 27.515C23.015 29.12 23 30.41 23 30.815C23 31.13 23.225 31.505 23.825 31.385C28.565 29.795 32 25.295 32 20C32 13.37 26.63 8 20 8Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_920_2749">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(8 8)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              }
              title="Abhishek Kumar"
            />
          </a>

          {/* //twitter */}
          <a
            href="https://x.com/_kumar_abhi__"
            target="_blank"
            className="row-span-2 border-2 rounded-xl dark:border-[#313e51] dark:bg-[#27272a]"
          >
            <div
              className="bg-[#f5fafe] text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1
          ring-zinc-900/5  rounded-2xl justify-between px-8 transition-all duration-300 py-6 dark:bg-inherit dark:text-white"
            >
              <div className="flex flex-row justify-between">
                <div>
                  <img
                    src="./twitter.svg"
                    alt="twittericon"
                    className="h-10 w-10"
                  />
                </div>
                <div className="w-fit h-7 p-1 px-4 hover:underline text-white  rounded-2xl bg-[#55acee]">
                  Follow
                </div>
              </div>

              <div className="text-lg">Twitter</div>
              <div className="mb-4 text-[#7e8284]">@_kumar_abhi__</div>
              <div className="text-[#7e8284] font-[300]">
                ✦freelancer ✦full stack developer✦mern ✦ nextjs
              </div>
            </div>
          </a>

          {/* Portfolio */}
          <a href="" className="row-span-4">
            <BigCard
            title={"Personal Portfolio"}
            description={"Portolio using HTML, CSS and JavaScript"}
            photo="./Portfolio.png"
          />
          </a>

          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1kGhE28GRGZIGcNxrjXJVT6FSkq_bNuWT/view?usp=sharing"
            target="_blank"
          >
            <SmallCard
              icon={<img src="./file.png" className="h-8 w-8" />}
              title="Resume"
            />
          </a>

          {/* gmail */}
          <a href={`mailto:kumar.abhi.ok@gmail.com`}>
            <SmallCard
              icon={<img src="./gmail.svg" className="h-8 w-8" />}
              title="kumar.abhi.ok@gmail.com"
            />
          </a>
        </div>
      </div>

      {/* Skill Section */}
      <div className="mt-16">
        <div className="font-[600] text-lg">My Skills⚒️ </div>
        <div className="flex flex-col gap-2 mt-8">
          <div className="flex flex-row gap-2">
            <div className="font-bold">Language:</div>
            <div>
              <ul className="flex flex-row gap-2">
                <li>C/C++</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <div className="font-bold">Web Technology:</div>
            <div>
              <ul className="flex flex-row gap-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>TailwindCSS</li>
                <li>React.js</li>
                <li>Express.js</li>
                <li>Node.js</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <div className="font-bold">Databases:</div>
            <div>
              <ul className="flex flex-row gap-2">
                <li>MongoDB</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <div className="font-bold">Tools:</div>
            <div>
              <ul className="flex flex-row gap-2">
                <li>Git/Github</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Project Section */}
      <div className="mt-16">
        <div className="font-[600] text-lg mb-8">My Projects 💻</div>
        <div className="grid grid-cols-2 gap-5 gap-y-10">
          <BigCard
            icon="https://storage.googleapis.com/creatorspace-public/sites%2Ffavicons%2FaHR0cHM6Ly9mdXNpb24tdGhlLWVjb21tZXJjZS1zaG9wLnZlcmNlbC5hcHAvdml0ZS5zdmc%3D.svg"
            code={"https://github.com/kumar-abhi001/AI-Mock-INTERVIEW"}
            live={"https://ai-mock-interview-murex-five.vercel.app/dashboard"}
            title={"PrepMaster"}
            description={"Mock Interview Platform"}
            photo="./PrepMaster.png"
          />
          <BigCard
            icon="https://storage.googleapis.com/creatorspace-public/sites%2Ffavicons%2FaHR0cHM6Ly9mdXNpb24tdGhlLWVjb21tZXJjZS1zaG9wLnZlcmNlbC5hcHAvdml0ZS5zdmc%3D.svg"
            code={"https://github.com/kumar-abhi001/video-hub"}
            live={"https://video-hub-dun.vercel.app/"}
            title={"Video Hub"}
            description={"A video sharing platform"}
            photo="./Videohub.png"
          />
        </div>
      </div>

      {/*Profile Section */}
      <div className="mt-16">
        <div className="font-[600] text-lg mb-8">Profiles 🧑‍💻</div>
        <div className="grid grid-cols-2 gap-2 gap-x-10">
          <a href="https://leetcode.com/kumar-abhi001" target="_blank">
            <SmallCard
              icon={
                <img
                  className="h-8 w-8 border-2 rounded-md"
                  src="https://creatorspace.imgix.net/sites/favicons/aHR0cHM6Ly9sZWV0Y29kZS5jb20vZmF2aWNvbi5pY28=.ico?fm=png"
                />
              }
              title={"Just a moment..."}
            />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/kumarabhi001/"
            target="_blank"
          >
            <SmallCard
              icon={
                <img
                  className="h-8 w-8 border-2 rounded-md"
                  src="https://storage.googleapis.com/creatorspace-public/sites%2Ffavicons%2FaHR0cHM6Ly9tZWRpYS5nZWVrc2ZvcmdlZWtzLm9yZy93cC1jb250ZW50L2Nkbi11cGxvYWRzL2dmZ19mYXZpY29uLnBuZw%3D%3D.png"
                />
              }
              title={"kumar-abhi001 | geeksforgeeks"}
            />
          </a>
          <a
            href="https://www.naukri.com/code360/profile/kumar_abhi"
            target="_blank"
          >
            <SmallCard
              icon={
                <img
                  src="./codingninjas.svg"
                  className="h-8 w-8 border-2 rounded-md"
                />
              }
              title={"codestudio.com"}
            />
          </a>
          <a
            href="https://www.hackerrank.com/profile/kumar_abhi_ok"
            target="_blank"
          >
            <SmallCard
              icon={
                <img
                  src="hackerrank.png"
                  className="h-8 w-8 border-2 rounded-md"
                />
              }
              title={"HackerRank"}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
