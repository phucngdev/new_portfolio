import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useAnimatedText from "../hooks/useAnimatedText";

const Infomation = () => {
  const { key, characters, letterAnimation } = useAnimatedText("Hello");

  return (
    <>
      <section className="container mx-auto h-screen px-2 md:px-10 flex items-center justify-center snap-start">
        <div className="flex flex-col">
          <AnimatePresence mode="wait">
            <motion.h1
              key={key} // Reset component mỗi 4 giây để lặp animation
              className="text-primary text-[50px] md:text-[72px] font-jetbrains font-bold"
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
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </AnimatePresence>

          <h2 className="text-[clamp(2rem,5vw,3rem)] text-primary mb-4 font-jetbrains font-bold">
            My name is Nguyen Minh Phuc
          </h2>
          <p className="text-base md:text-2xl text-[#b0b0b0] font-bold leading-7 md:leading-10">
            Code like an{" "}
            <span className="animate-gradient bg-[linear-gradient(to_right,#0081a7,#38BDF8,#A7F3D0,#38BDF8,#A7F3D0,#6EE7B7)]  bg-[length:200%_auto] bg-clip-text tracking-tighter text-transparent">
              artist
            </span>
            , optimize like an{" "}
            <span className="animate-gradient bg-[linear-gradient(to_right,#0081a7,#38BDF8,#A7F3D0,#38BDF8,#A7F3D0,#6EE7B7)]  bg-[length:200%_auto] bg-clip-text tracking-tighter text-transparent">
              engineer
            </span>
            , and debug like a{" "}
            <span className="animate-gradient bg-[linear-gradient(to_right,#0081a7,#38BDF8,#A7F3D0,#38BDF8,#A7F3D0,#6EE7B7)]  bg-[length:200%_auto] bg-clip-text tracking-tighter text-transparent">
              detective
            </span>
            . No{" "}
            <span className="animate-gradient bg-[linear-gradient(to_right,#0081a7,#38BDF8,#A7F3D0,#38BDF8,#A7F3D0,#6EE7B7)]  bg-[length:200%_auto] bg-clip-text tracking-tighter text-transparent">
              limits
            </span>
            , only{" "}
            <span className="animate-gradient bg-[linear-gradient(to_right,#0081a7,#38BDF8,#A7F3D0,#38BDF8,#A7F3D0,#6EE7B7)]  bg-[length:200%_auto] bg-clip-text tracking-tighter text-transparent">
              solutions!
            </span>{" "}
            🚀
          </p>

          <div className="mt-8 flex items-center gap-5">
            <a
              href="mailto:phucnguyen09022003@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-primary hover:scale-125 transition duration-300"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
              </svg>
            </a>
            <a
              href="https://github.com/phucngdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-primary hover:scale-125 transition duration-300"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-primary hover:scale-125 transition duration-300"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/emkhonganhanh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-primary hover:scale-125 transition duration-300"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/_phucghethanh_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-primary hover:scale-125 transition duration-300"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a
              href="tel:+84793395545"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-primary hover:scale-125 transition duration-300"
              tabIndex={0}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
              </svg>
            </a>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1JYcxeyMACGFxBSHGKZo-FQSw8abR6ZsK?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 w-40 flex items-center justify-between text-white rounded-md mt-8 bg-[#1e1e1e] hover:scale-105 transition duration-500"
          >
            <span className="text-white flex items-center gap-2 font-thin">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" />
              </svg>
              My CV
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              stroke="currentColor"
              fill="currentColor"
              height="1em"
              width="1em"
              version="1.1"
              viewBox="0 0 330 330"
              xml:space="preserve"
            >
              <path d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
};

export default Infomation;
