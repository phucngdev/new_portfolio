import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useAnimatedText from "../hooks/useAnimatedText";

const Tools = () => {
  const { key, characters, letterAnimation } =
    useAnimatedText("Tools & DevOps");
  return (
    <>
      <section className="container mx-auto px-2 md:px-10 h-screen flex items-center justify-center snap-start">
        <div className="w-full">
          {/* <h3 className="relative text-[28px] text-white font-bold mb-8 ps-[18px] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px] before:bg-primary">
            Tools &amp; DevOps
          </h3> */}
          <AnimatePresence mode="wait">
            <motion.h3
              key={key} // Reset component mỗi 4 giây để lặp animation
              className="relative text-[28px] text-white font-bold mb-8 ps-[18px] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px] before:bg-primary"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                exit: {
                  transition: {
                    staggerChildren: 0.1,
                    staggerDirection: -1,
                    delay: 2,
                  },
                }, // Chờ 2s rồi biến mất từ cuối về đầu
              }}
            >
              {characters.map(({ char, key }) => (
                <motion.span
                  key={key}
                  variants={letterAnimation}
                  style={{
                    display: "inline-block",
                    minWidth: char === " " ? "0.3em" : "auto",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h3>
          </AnimatePresence>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
            <div className="flex items-center gap-5 p-3 md:p-5 text-white bg-[#1e1e1e] rounded-xl cursor-pointer hover:scale-105 transition duration-500">
              <div className="text-2xl md:text-5xl text-primary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  version="1.1"
                  viewBox="0 0 32 32"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M26.852 15.281l-9.848-9.848c-0.567-0.567-1.487-0.567-2.054 0l-2.045 2.045 2.594 2.594c0.603-0.204 1.294-0.067 1.775 0.413 0.483 0.483 0.619 1.181 0.41 1.786l2.5 2.5c0.605-0.209 1.303-0.074 1.786 0.41 0.675 0.675 0.675 1.769 0 2.444s-1.769 0.675-2.445 0c-0.508-0.508-0.633-1.254-0.376-1.88l-2.332-2.332v6.136c0.164 0.082 0.32 0.19 0.457 0.327 0.675 0.675 0.675 1.769 0 2.445-0.675 0.675-1.77 0.675-2.444 0-0.675-0.676-0.675-1.77 0-2.445 0.167-0.167 0.36-0.293 0.566-0.377v-6.193c-0.206-0.084-0.399-0.209-0.566-0.377-0.511-0.511-0.634-1.262-0.372-1.889l-2.557-2.558-6.753 6.752c-0.567 0.568-0.567 1.488 0 2.055l9.849 9.848c0.567 0.567 1.486 0.567 2.054 0l9.802-9.802c0.567-0.567 0.567-1.488 0-2.055z" />
                </svg>
              </div>
              <div className="flex flex-col justify-between">
                <h4 className="text-[13px] md:text-[19px] mb-2 font-semibold">
                  Git
                </h4>
                <div className="text-[14px] mb-1">2 years</div>
                <div className="text-[14px] mt-1 text-primary font-semibold">
                  Intermediate
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 md:p-5 text-white bg-[#1e1e1e] rounded-xl cursor-pointer hover:scale-105 transition duration-500">
              <div className="text-2xl md:text-5xl text-primary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
                </svg>
              </div>
              <div className="flex flex-col justify-between">
                <h4 className="text-[13px] md:text-[19px] mb-2 font-semibold">
                  Docker
                </h4>
                <div className="text-[14px] mb-1">null</div>
                <div className="text-[14px] mt-1 text-primary font-semibold">
                  In Plan :))
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 md:p-5 text-white bg-[#1e1e1e] rounded-xl cursor-pointer hover:scale-105 transition duration-500">
              <div className="text-2xl md:text-5xl text-primary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z" />
                </svg>
              </div>
              <div className="flex flex-col justify-between">
                <h4 className="text-[13px] md:text-[19px] mb-2 font-semibold">
                  GitLab
                </h4>
                <div className="text-[14px] mb-1">1 months</div>
                <div className="text-[14px] mt-1 text-primary font-semibold">
                  Beginner
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 md:p-5 text-white bg-[#1e1e1e] rounded-xl cursor-pointer hover:scale-105 transition duration-500">
              <div className="text-2xl md:text-5xl text-primary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>github [#142]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-140.000000, -7559.000000)"
                      fill="#000000"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          stroke="#4caf50"
                          d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                          id="github-[#142]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col justify-between">
                <h4 className="text-[13px] md:text-[19px] mb-2 font-semibold">
                  Github
                </h4>
                <div className="text-[14px] mb-1">2 years</div>
                <div className="text-[14px] mt-1 text-primary font-semibold">
                  Intermediate
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 md:p-5 text-white bg-[#1e1e1e] rounded-xl cursor-pointer hover:scale-105 transition duration-500">
              <div className="text-2xl md:text-5xl text-primary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.984 13.836a.5.5 0 0 1-.353-.146l-.745-.743a.5.5 0 1 1 .706-.708l.392.391 1.181-1.18a.5.5 0 0 1 .708.707l-1.535 1.533a.504.504 0 0 1-.354.146zm9.353-.147l1.534-1.532a.5.5 0 0 0-.707-.707l-1.181 1.18-.392-.391a.5.5 0 1 0-.706.708l.746.743a.497.497 0 0 0 .706-.001zM4.527 7.452l2.557-1.585A1 1 0 0 0 7.09 4.17L4.533 2.56A1 1 0 0 0 3 3.406v3.196a1.001 1.001 0 0 0 1.527.85zm2.03-2.436L4 6.602V3.406l2.557 1.61zM24 12.5c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3h-2.08a3.503 3.503 0 0 1-3.46 3 3.502 3.502 0 0 1-3.46-3h-.558c-.972 0-1.85-.399-2.482-1.042V17c0 1.654 1.346 3 3 3h.04c.244-1.693 1.7-3 3.46-3 1.93 0 3.5 1.57 3.5 3.5S13.43 24 11.5 24a3.502 3.502 0 0 1-3.46-3H8c-2.206 0-4-1.794-4-4V9.899A5.008 5.008 0 0 1 0 5c0-2.757 2.243-5 5-5s5 2.243 5 5a5.005 5.005 0 0 1-4.952 4.998A2.482 2.482 0 0 0 7.482 12h.558c.244-1.693 1.7-3 3.46-3a3.502 3.502 0 0 1 3.46 3h2.08a3.503 3.503 0 0 1 3.46-3c1.93 0 3.5 1.57 3.5 3.5zm-15 8c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5S9 19.122 9 20.5zM5 9c2.206 0 4-1.794 4-4S7.206 1 5 1 1 2.794 1 5s1.794 4 4 4zm9 3.5c0-1.378-1.122-2.5-2.5-2.5S9 11.122 9 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm9 0c0-1.378-1.122-2.5-2.5-2.5S18 11.122 18 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm-13 8a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm12 0c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3.002c-.007.001-.013.005-.021.005l-.506.017h-.017a.5.5 0 0 1-.016-.999l.506-.017c.018-.002.035.006.052.007A3.503 3.503 0 0 1 20.5 17c1.93 0 3.5 1.57 3.5 3.5zm-1 0c0-1.378-1.122-2.5-2.5-2.5S18 19.122 18 20.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5z" />
                </svg>
              </div>
              <div className="flex flex-col justify-between">
                <h4 className="text-[13px] md:text-[19px] mb-2 font-semibold">
                  CI/CD Pipeline
                </h4>
                <div className="text-[14px] mb-1">null</div>
                <div className="text-[14px] mt-1 text-primary font-semibold">
                  In Plan :))
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 md:p-5 text-white bg-[#1e1e1e] rounded-xl cursor-pointer hover:scale-105 transition duration-500">
              <div className="text-2xl md:text-5xl text-primary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                >
                  <g data-name="Layer 2">
                    <g data-name="npm">
                      <rect width="24" height="24" opacity="0" />

                      <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h7V11h4v10h1a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col justify-between">
                <h4 className="text-[13px] md:text-[19px] mb-2 font-semibold">
                  NPM
                </h4>
                <div className="text-[14px] mb-1">2 years</div>
                <div className="text-[14px] mt-1 text-primary font-semibold">
                  Intermediate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tools;
