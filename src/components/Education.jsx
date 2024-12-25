import React from "react";

const Education = () => {
  return (
    <>
      <section className="container mx-auto px-2 md:px-10 h-screen flex flex-col items-center justify-center snap-start">
        <h2 className="text-center text-primary mb-8 text-3xl md:text-[40px] font-jetbrains font-bold">
          Education
        </h2>
        <div className="flex flex-col gap-2 md:gap-5">
          <div className="rounded-xl bg-[#1e1e1e] p-2 md:p-10">
            <h3 className="mb-4 text-[19px] md:text-[24px] font-jetbrains text-white">
              The Hanoi University of Mining and Geology
            </h3>
            <h4 className="mb-2 text-primary text-base md:text-lg font-semibold">
              Information Technology
            </h4>
            <p className="text-[#b0b0b0] mb-4 text-sm">2021 - 2025</p>
            <p className="text-[#b0b0b0] leading-7 text-sm md:text-[16px] max-h-[100px] overflow-y-auto">
              My journey at Hanoi University of Mining and Geology laid the
              crucial foundation for who I am today. Through comprehensive
              Computer Science education, I discovered my passion for mobile
              development and modern technologies. Grateful for the knowledge,
              opportunities, and guidance that shaped my path toward becoming a
              skilled software engineer.
            </p>
          </div>
          <div className="rounded-xl bg-[#1e1e1e] p-2 md:p-10">
            <h3 className="mb-4 text-[19px] md:text-[24px] font-jetbrains text-white">
              Rikkei Academy
            </h3>
            <h4 className="mb-2 text-primary text-base md:text-lg font-semibold">
              Fullstack WEB Development
            </h4>
            <p className="text-[#b0b0b0] mb-4 text-sm">2024 - 2025</p>
            <p className="text-[#b0b0b0] leading-7 text-sm md:text-[16px] max-h-[100px] overflow-y-auto">
              My journey at Hanoi University of Mining and Geology laid the
              crucial foundation for who I am today. Through comprehensive
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
