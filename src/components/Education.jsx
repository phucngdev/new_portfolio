import React from "react";
import useAnimatedText from "../hooks/useAnimatedText";
import { AnimatePresence, motion } from "framer-motion";

const Education = () => {
  const { key, characters, letterAnimation } = useAnimatedText("Education");
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
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
        </AnimatePresence>
        <div className="flex flex-col gap-2 md:gap-5">
          <div className="rounded-xl bg-[#1e1e1e] p-2 md:p-10">
            <h3 className="mb-4 text-[19px] md:text-[24px] font-jetbrains text-white">
              The Hanoi University of Mining and Geology
            </h3>
            <h4 className="mb-2 text-primary text-base md:text-lg font-semibold">
              Information Technology
            </h4>
            <p className="text-[#b0b0b0] mb-2 md:mb-4 text-sm">2021 - 2025</p>
            <p className="text-[#b0b0b0] leading-5 md:leading-7 text-[10px] md:text-xs max-h-[120px] overflow-y-auto">
              I am currently a final-year student majoring in Software
              Engineering at Hanoi University of Mining and Geology. I have
              experience working on personal projects using React.js and Node.js
              (Express), which have helped me strengthen my technical skills. I
              am eager to learn and grow, and I am currently looking for an
              internship to gain hands-on experience, improve my skills, and
              apply my knowledge in a professional environment. My goal is to
              contribute to a company's success while continuously developing
              myself as a software developer.
            </p>
          </div>
          <div className="rounded-xl bg-[#1e1e1e] p-2 md:p-10">
            <h3 className="mb-4 text-[19px] md:text-[24px] font-jetbrains text-white">
              Rikkei Academy
            </h3>
            <h4 className="mb-2 text-primary text-base md:text-lg font-semibold">
              Fullstack WEB Development
            </h4>
            <p className="text-[#b0b0b0] mb-2 md:mb-4 text-sm">2024 - 2025</p>
            <p className="text-[#b0b0b0] leading-5 md:leading-7 text-[10px] md:text-xs max-h-[120px] overflow-y-auto">
              I have completed the Fullstack Web Development course at Rikkei
              Academy, where I gained hands-on experience in both frontend and
              backend development. Through practical projects, I developed
              strong skills in React.js, Node.js (Express), database management,
              and deployment, preparing me for real-world web development
              challenges.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
