import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useAnimatedText from "../hooks/useAnimatedText";

const Skill = () => {
  const { key, characters, letterAnimation } =
    useAnimatedText("Skills & Expertise");
  return (
    <>
      <section className="container mx-auto px-2 md:px-10 h-screen flex flex-col items-center justify-center snap-start">
        <AnimatePresence mode="wait">
          <motion.h2
            key={key} // Reset component mỗi 4 giây để lặp animation
            className="text-center text-primary mb-8 text-3xl md:text-[40px] font-jetbrains font-bold"
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
          </motion.h2>
        </AnimatePresence>
        <div className="w-full">
          <div>
            <h3 className="relative text-[28px] text-white font-bold mb-8 ps-[18px] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px] before:bg-primary">
              Core Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
              <div className="flex items-center gap-5 p-3 md:p-5 text-white bg-[#1e1e1e] rounded-xl cursor-pointer hover:scale-105 transition duration-500">
                <div className="text-2xl md:text-5xl text-primary">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097" />
                    <path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254" />
                    <path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978" />
                    <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8" />
                    <path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087" />
                    <path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393" />
                    <path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24" />
                  </svg>
                </div>
                <div className="flex flex-col justify-between">
                  <h4 className="text-[13px] md:text-[19px] mb-2 font-semibold">
                    React Native
                  </h4>
                  <div className="text-[14px] mb-1">2 months</div>
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
                    version="1.1"
                    viewBox="0 0 34 32"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.314 15.987c0 1.321-1.071 2.392-2.392 2.392s-2.392-1.071-2.392-2.392c0-1.321 1.071-2.392 2.392-2.392s2.392 1.071 2.392 2.392z" />
                    <path d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906 0.489 0 0.952-0.103 1.337-0.334 1.337-0.772 1.826-2.701 1.363-5.453-0.077-0.489-0.18-0.977-0.309-1.492 0.514-0.154 0.977-0.309 1.44-0.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-0.463-0.18-0.926-0.334-1.44-0.463 0.129-0.514 0.232-1.003 0.309-1.492 0.437-2.803-0.051-4.758-1.389-5.53-0.386-0.231-0.849-0.334-1.337-0.334-1.466 0-3.344 1.080-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-0.489 0-0.952 0.103-1.337 0.334-1.337 0.772-1.826 2.701-1.363 5.453 0.077 0.489 0.18 0.977 0.309 1.492-0.514 0.154-0.977 0.309-1.44 0.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909 0.463 0.18 0.926 0.334 1.44 0.463-0.129 0.514-0.232 1.003-0.309 1.492-0.437 2.752 0.051 4.707 1.363 5.453 0.386 0.232 0.849 0.334 1.337 0.334 1.492 0.051 3.344-1.029 5.221-2.829v0zM15.481 21.311c0.463 0.026 0.952 0.026 1.44 0.026s0.977 0 1.44-0.026c-0.463 0.617-0.952 1.183-1.44 1.723-0.489-0.54-0.977-1.106-1.44-1.723zM12.292 18.662c0.257 0.437 0.489 0.849 0.772 1.26-0.797-0.103-1.543-0.232-2.263-0.386 0.232-0.694 0.489-1.415 0.797-2.135 0.206 0.411 0.437 0.849 0.694 1.26zM10.8 12.463c0.72-0.154 1.466-0.283 2.263-0.386-0.257 0.412-0.514 0.823-0.772 1.26s-0.489 0.849-0.694 1.286c-0.334-0.746-0.592-1.466-0.797-2.161zM12.215 15.987c0.334-0.694 0.694-1.389 1.106-2.083 0.386-0.669 0.823-1.337 1.26-2.006 0.772-0.051 1.543-0.077 2.341-0.077 0.823 0 1.595 0.026 2.341 0.077 0.463 0.669 0.874 1.337 1.26 2.006 0.412 0.694 0.772 1.389 1.106 2.083-0.334 0.694-0.694 1.389-1.106 2.083-0.386 0.669-0.823 1.337-1.26 2.006-0.772 0.051-1.543 0.077-2.341 0.077-0.823 0-1.595-0.026-2.341-0.077-0.463-0.669-0.874-1.337-1.26-2.006-0.412-0.695-0.772-1.389-1.106-2.083v0zM22.272 14.598l-0.694-1.286c-0.257-0.437-0.489-0.849-0.772-1.26 0.797 0.103 1.543 0.232 2.263 0.386-0.231 0.72-0.489 1.44-0.797 2.161v0zM22.272 17.376c0.309 0.72 0.566 1.44 0.797 2.135-0.72 0.154-1.466 0.283-2.263 0.386 0.257-0.412 0.514-0.823 0.772-1.26 0.232-0.386 0.463-0.823 0.694-1.26v0zM22.863 26.301c-0.206 0.129-0.463 0.18-0.746 0.18-1.26 0-2.829-1.029-4.372-2.572 0.746-0.797 1.466-1.698 2.186-2.701 1.209-0.103 2.366-0.283 3.447-0.54 0.129 0.463 0.206 0.926 0.283 1.389 0.36 2.186 0.077 3.755-0.797 4.244zM24.201 12.746c2.881 0.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-0.412 0.154-0.874 0.309-1.337 0.437-0.334-1.055-0.746-2.135-1.26-3.241 0.514-1.106 0.952-2.186 1.26-3.241v0zM22.143 5.493c0.283 0 0.514 0.051 0.746 0.18 0.849 0.489 1.157 2.032 0.797 4.244-0.077 0.437-0.18 0.9-0.283 1.389-1.080-0.232-2.238-0.412-3.447-0.54-0.694-1.003-1.44-1.903-2.186-2.701 1.543-1.518 3.112-2.572 4.372-2.572zM18.362 10.663c-0.463-0.026-0.952-0.026-1.44-0.026s-0.977 0-1.44 0.026c0.463-0.617 0.952-1.183 1.44-1.723 0.489 0.54 0.977 1.132 1.44 1.723v0zM10.98 5.673c0.206-0.129 0.463-0.18 0.746-0.18 1.26 0 2.829 1.029 4.372 2.572-0.746 0.797-1.466 1.697-2.186 2.701-1.209 0.103-2.366 0.283-3.447 0.54-0.129-0.463-0.206-0.926-0.283-1.389-0.36-2.186-0.077-3.729 0.797-4.244v0zM9.643 19.228c-2.881-0.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803 0.412-0.154 0.874-0.309 1.337-0.437 0.334 1.055 0.746 2.135 1.26 3.241-0.514 1.106-0.952 2.212-1.26 3.241zM10.183 22.057c0.077-0.437 0.18-0.9 0.283-1.389 1.080 0.232 2.238 0.412 3.447 0.54 0.694 1.003 1.44 1.903 2.186 2.701-1.543 1.517-3.112 2.572-4.372 2.572-0.283 0-0.514-0.051-0.746-0.18-0.875-0.489-1.157-2.058-0.797-4.244z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-between">
                  <h4 className="text-[13px] md:text-[19px] mb-2 font-semibold">
                    React.js
                  </h4>
                  <div className="text-[14px] mb-1">2 years</div>
                  <div className="text-[14px] mt-1 text-primary font-semibold">
                    Advanced
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
                    <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-between">
                  <h4 className="text-[13px] md:text-[19px] mb-2 font-semibold">
                    Next.js
                  </h4>
                  <div className="text-[14px] mb-1">2 months</div>
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
                    version="1.1"
                    viewBox="0 0 32 32"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.557 23.22c0 0-0.982 0.571 0.699 0.765 2.037 0.232 3.079 0.199 5.324-0.226 0 0 0.59 0.37 1.415 0.691-5.033 2.157-11.39-0.125-7.437-1.23zM11.942 20.405c0 0-1.102 0.816 0.581 0.99 2.176 0.224 3.895 0.243 6.869-0.33 0 0 0.411 0.417 1.058 0.645-6.085 1.779-12.863 0.14-8.508-1.305zM17.127 15.63c1.24 1.428-0.326 2.713-0.326 2.713s3.149-1.625 1.703-3.661c-1.351-1.898-2.386-2.841 3.221-6.093 0 0-8.801 2.198-4.598 7.042zM23.783 25.302c0 0 0.727 0.599-0.801 1.062-2.905 0.88-12.091 1.146-14.643 0.035-0.917-0.399 0.803-0.953 1.344-1.069 0.564-0.122 0.887-0.1 0.887-0.1-1.020-0.719-6.594 1.411-2.831 2.021 10.262 1.664 18.706-0.749 16.044-1.95zM13.029 17.489c0 0-4.673 1.11-1.655 1.513 1.274 0.171 3.814 0.132 6.181-0.066 1.934-0.163 3.876-0.51 3.876-0.51s-0.682 0.292-1.175 0.629c-4.745 1.248-13.911 0.667-11.272-0.609 2.232-1.079 4.046-0.956 4.046-0.956zM21.412 22.174c4.824-2.506 2.593-4.915 1.037-4.591-0.382 0.079-0.552 0.148-0.552 0.148s0.142-0.222 0.412-0.318c3.079-1.083 5.448 3.193-0.994 4.887-0 0 0.075-0.067 0.097-0.126zM18.503 3.337c0 0 2.671 2.672-2.534 6.781-4.174 3.296-0.952 5.176-0.002 7.323-2.436-2.198-4.224-4.133-3.025-5.934 1.761-2.644 6.638-3.925 5.56-8.17zM13.503 28.966c4.63 0.296 11.74-0.164 11.908-2.355 0 0-0.324 0.831-3.826 1.49-3.952 0.744-8.826 0.657-11.716 0.18 0 0 0.592 0.49 3.635 0.685z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-between">
                  <h4 className="text-[13px] md:text-[19px] mb-2 font-semibold">
                    Java
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
                    version="1.1"
                    viewBox="0 0 32 32"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-between">
                  <h4 className="text-[13px] md:text-[19px] mb-2 font-semibold">
                    JavaScript
                  </h4>
                  <div className="text-[14px] mb-1">2 years</div>
                  <div className="text-[14px] mt-1 text-primary font-semibold">
                    Advanced
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
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-between">
                  <h4 className="text-[13px] md:text-[19px] mb-2 font-semibold">
                    TypeScript
                  </h4>
                  <div className="text-[14px] mb-1">6 months</div>
                  <div className="text-[14px] mt-1 text-primary font-semibold">
                    Intermediate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
