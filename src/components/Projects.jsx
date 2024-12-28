import { Image, Modal } from "antd";
import React, { useEffect, useState } from "react";

const projects = [
  {
    title: "TEELAB STORE 1",
    timework: "January 2020 - January 2022",
    position: "Fullstack Developer",
    fetures: [
      "Built front-end applications using ReactJS and TypeScript, focusing on mobile-first development",
      "Designed and developed REST APIs using Node.js, and implemented database schemas in PostgreSQL",
      "Built and integrated real-time features using WebSocket for live data updates and notifications",
      "Handled the full deployment pipeline from development to publishing on both Google Play and App Store platforms",
    ],
    tech: ["ReactJS", "PostgreSQL", "TypeScript", "Nodejs", "Firebase"],
    github: "https://github.com/phucngdev",
    live: "https://github.com/phucngdev",
    docs: "",
    images: [],
  },
  {
    title: "TEELAB STORE 2",
    timework: "January 2020 - January 2022",
    position: "Fullstack Developer",
    fetures: [
      "Built front-end applications using ReactJS and TypeScript, focusing on mobile-first development",
      "Designed and developed REST APIs using Node.js, and implemented database schemas in PostgreSQL",
      "Built and integrated real-time features using WebSocket for live data updates and notifications",
      "Handled the full deployment pipeline from development to publishing on both Google Play and App Store platforms",
    ],
    tech: ["ReactJS", "PostgreSQL", "TypeScript", "Nodejs", "Firebase"],
    github: "https://github.com/phucngdev",
    live: "",
    docs: "https://github.com/phucngdev",
    images: [],
  },
  {
    title: "TEELAB STORE 3",
    timework: "January 2020 - January 2022",
    position: "Fullstack Developer",
    fetures: [
      "Built front-end applications using ReactJS and TypeScript, focusing on mobile-first development",
      "Designed and developed REST APIs using Node.js, and implemented database schemas in PostgreSQL",
      "Built and integrated real-time features using WebSocket for live data updates and notifications",
      "Handled the full deployment pipeline from development to publishing on both Google Play and App Store platforms",
    ],
    tech: ["ReactJS", "PostgreSQL", "TypeScript", "Nodejs", "Firebase"],
    github: "https://github.com/phucngdev",
    live: "https://github.com/phucngdev",
    docs: "https://github.com/phucngdev",
    images: [],
  },
  {
    title: "TEELAB STORE 4",
    timework: "January 2020 - January 2022",
    position: "Fullstack Developer",
    fetures: [
      "Built front-end applications using ReactJS and TypeScript, focusing on mobile-first development",
      "Designed and developed REST APIs using Node.js, and implemented database schemas in PostgreSQL",
      "Built and integrated real-time features using WebSocket for live data updates and notifications",
      "Handled the full deployment pipeline from development to publishing on both Google Play and App Store platforms",
    ],
    tech: ["ReactJS", "PostgreSQL", "TypeScript", "Nodejs", "Firebase"],
    github: "https://github.com/phucngdev",
    live: "",
    docs: "https://github.com/phucngdev",
    images: [],
  },
  {
    title: "TEELAB STORE 5",
    timework: "January 2020 - January 2022",
    position: "Fullstack Developer",
    fetures: [
      "Built front-end applications using ReactJS and TypeScript, focusing on mobile-first development",
      "Designed and developed REST APIs using Node.js, and implemented database schemas in PostgreSQL",
      "Built and integrated real-time features using WebSocket for live data updates and notifications",
      "Handled the full deployment pipeline from development to publishing on both Google Play and App Store platforms",
    ],
    tech: ["ReactJS", "PostgreSQL", "TypeScript", "Nodejs", "Firebase"],
    github: "https://github.com/phucngdev",
    live: "",
    docs: "https://github.com/phucngdev",
    images: [],
  },
  {
    title: "TEELAB STORE 6",
    timework: "January 2020 - January 2022",
    position: "Fullstack Developer",
    fetures: [
      "Built front-end applications using ReactJS and TypeScript, focusing on mobile-first development",
      "Designed and developed REST APIs using Node.js, and implemented database schemas in PostgreSQL",
      "Built and integrated real-time features using WebSocket for live data updates and notifications",
      "Handled the full deployment pipeline from development to publishing on both Google Play and App Store platforms",
    ],
    tech: ["ReactJS", "PostgreSQL", "TypeScript", "Nodejs", "Firebase"],
    github: "https://github.com/phucngdev",
    live: "https://github.com/phucngdev",
    docs: "",
    images: [],
  },
];

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState({});

  useEffect(() => {
    // Kiểm tra kích thước màn hình
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Gọi kiểm tra lần đầu khi component được mount
    handleResize();

    // Lắng nghe sự kiện resize
    window.addEventListener("resize", handleResize);

    // Dọn dẹp sự kiện khi unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goPrev = () => {
    const lastIndex = isMobile ? 5 : 2;
    setCurrentIndex(currentIndex === 0 ? lastIndex : currentIndex - 1);
  };

  const goNext = () => {
    const lastIndex = isMobile ? 5 : 2;
    setCurrentIndex(currentIndex === lastIndex ? 0 : currentIndex + 1);
  };

  return (
    <>
      <Modal
        title={
          <>
            <h2 className="text-primary mb-3 md:mb-8 text-2xl md:text-[30px] font-jetbrains font-bold">
              {project.title}
            </h2>
          </>
        }
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={isMobile ? 390 : 1000}
        footer={null}
      >
        <div className="">
          <div className="my-2">
            <span className="text-[14px] text-primary">{project.timework}</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {project.position}
            </h3>
            <div className="flex items-center gap-4 mt-4">
              {project.github && (
                <>
                  {" "}
                  <a
                    href={project.github}
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
                </>
              )}
              {project.live && (
                <>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl hover:text-primary hover:scale-125 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      width="1em"
                      viewBox="0 0 58 58"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                    >
                      <path d="M50.688,48.222C55.232,43.101,58,36.369,58,29c0-7.667-2.996-14.643-7.872-19.834c0,0,0-0.001,0-0.001  c-0.004-0.006-0.01-0.008-0.013-0.013c-5.079-5.399-12.195-8.855-20.11-9.126l-0.001-0.001L29.439,0.01C29.293,0.005,29.147,0,29,0  s-0.293,0.005-0.439,0.01l-0.563,0.015l-0.001,0.001c-7.915,0.271-15.031,3.727-20.11,9.126c-0.004,0.005-0.01,0.007-0.013,0.013  c0,0,0,0.001-0.001,0.002C2.996,14.357,0,21.333,0,29c0,7.369,2.768,14.101,7.312,19.222c0.006,0.009,0.006,0.019,0.013,0.028  c0.018,0.025,0.044,0.037,0.063,0.06c5.106,5.708,12.432,9.385,20.608,9.665l0.001,0.001l0.563,0.015C28.707,57.995,28.853,58,29,58  s0.293-0.005,0.439-0.01l0.563-0.015l0.001-0.001c8.185-0.281,15.519-3.965,20.625-9.685c0.013-0.017,0.034-0.022,0.046-0.04  C50.682,48.241,50.682,48.231,50.688,48.222z M2.025,30h12.003c0.113,4.239,0.941,8.358,2.415,12.217  c-2.844,1.029-5.563,2.409-8.111,4.131C4.585,41.891,2.253,36.21,2.025,30z M8.878,11.023c2.488,1.618,5.137,2.914,7.9,3.882  C15.086,19.012,14.15,23.44,14.028,28H2.025C2.264,21.493,4.812,15.568,8.878,11.023z M55.975,28H43.972  c-0.122-4.56-1.058-8.988-2.75-13.095c2.763-0.968,5.412-2.264,7.9-3.882C53.188,15.568,55.736,21.493,55.975,28z M28,14.963  c-2.891-0.082-5.729-0.513-8.471-1.283C21.556,9.522,24.418,5.769,28,2.644V14.963z M28,16.963V28H16.028  c0.123-4.348,1.035-8.565,2.666-12.475C21.7,16.396,24.821,16.878,28,16.963z M30,16.963c3.179-0.085,6.3-0.566,9.307-1.438  c1.631,3.91,2.543,8.127,2.666,12.475H30V16.963z M30,14.963V2.644c3.582,3.125,6.444,6.878,8.471,11.036  C35.729,14.45,32.891,14.881,30,14.963z M40.409,13.072c-1.921-4.025-4.587-7.692-7.888-10.835  c5.856,0.766,11.125,3.414,15.183,7.318C45.4,11.017,42.956,12.193,40.409,13.072z M17.591,13.072  c-2.547-0.879-4.991-2.055-7.294-3.517c4.057-3.904,9.327-6.552,15.183-7.318C22.178,5.38,19.512,9.047,17.591,13.072z M16.028,30  H28v10.038c-3.307,0.088-6.547,0.604-9.661,1.541C16.932,37.924,16.141,34.019,16.028,30z M28,42.038v13.318  c-3.834-3.345-6.84-7.409-8.884-11.917C21.983,42.594,24.961,42.124,28,42.038z M30,55.356V42.038  c3.039,0.085,6.017,0.556,8.884,1.4C36.84,47.947,33.834,52.011,30,55.356z M30,40.038V30h11.972  c-0.113,4.019-0.904,7.924-2.312,11.58C36.547,40.642,33.307,40.126,30,40.038z M43.972,30h12.003  c-0.228,6.21-2.559,11.891-6.307,16.348c-2.548-1.722-5.267-3.102-8.111-4.131C43.032,38.358,43.859,34.239,43.972,30z   M9.691,47.846c2.366-1.572,4.885-2.836,7.517-3.781c1.945,4.36,4.737,8.333,8.271,11.698C19.328,54.958,13.823,52.078,9.691,47.846  z M32.521,55.763c3.534-3.364,6.326-7.337,8.271-11.698c2.632,0.945,5.15,2.209,7.517,3.781  C44.177,52.078,38.672,54.958,32.521,55.763z" />
                    </svg>
                  </a>
                </>
              )}
              {project.docs && (
                <>
                  <a
                    href={project.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl hover:text-primary hover:scale-125 transition duration-300"
                  >
                    <svg
                      height="1em"
                      width="1em"
                      //  viewBox="0 0 58 58"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512.001 512.001"
                    >
                      <g>
                        <g>
                          <path d="M463.996,126.864L340.192,3.061C338.231,1.101,335.574,0,332.803,0H95.726C67.724,0,44.944,22.782,44.944,50.784v410.434    c0,28.001,22.781,50.783,50.783,50.783h320.547c28.002,0,50.783-22.781,50.783-50.783V134.253    C467.056,131.482,465.955,128.824,463.996,126.864z M343.255,35.679l88.127,88.126H373.14c-7.984,0-15.49-3.109-21.134-8.753    c-5.643-5.643-8.752-13.148-8.751-21.131V35.679z M446.158,461.217c0,16.479-13.406,29.885-29.884,29.885H95.726    c-16.479,0-29.885-13.406-29.885-29.885V50.784c0.001-16.479,13.407-29.886,29.885-29.886h226.631v73.021    c-0.002,13.565,5.28,26.318,14.871,35.909c9.592,9.592,22.345,14.874,35.911,14.874h73.018V461.217z" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M275.092,351.492h-4.678c-5.77,0-10.449,4.678-10.449,10.449s4.679,10.449,10.449,10.449h4.678    c5.77,0,10.449-4.678,10.449-10.449S280.862,351.492,275.092,351.492z" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M236.61,351.492H135.118c-5.77,0-10.449,4.678-10.449,10.449s4.679,10.449,10.449,10.449H236.61    c5.77,0,10.449-4.678,10.449-10.449S242.381,351.492,236.61,351.492z" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M376.882,303.747H135.119c-5.77,0-10.449,4.678-10.449,10.449c0,5.771,4.679,10.449,10.449,10.449h241.763    c5.77,0,10.449-4.678,10.449-10.449C387.331,308.425,382.652,303.747,376.882,303.747z" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M376.882,256H135.119c-5.77,0-10.449,4.678-10.449,10.449c0,5.771,4.679,10.449,10.449,10.449h241.763    c5.77,0,10.449-4.678,10.449-10.449C387.331,260.678,382.652,256,376.882,256z" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M376.882,208.255H135.119c-5.77,0-10.449,4.678-10.449,10.449c0,5.771,4.679,10.449,10.449,10.449h241.763    c5.77,0,10.449-4.678,10.449-10.449S382.652,208.255,376.882,208.255z" />
                        </g>
                      </g>
                    </svg>
                  </a>
                </>
              )}
            </div>
          </div>
          <p className="text-[#b0b0b0] text-sm md:text-[16px]">Image preview</p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 my-2">
            <Image.PreviewGroup
              preview={{
                onChange: (current, prev) =>
                  console.log(`current index: ${current}, prev index: ${prev}`),
              }}
            >
              <Image
                className="w-full object-cover"
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              />
              <Image
                className="w-full object-cover"
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
              />
              <Image
                className="w-full object-cover"
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              />
              <Image
                className="w-full object-cover"
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
              />
              <Image
                className="w-full object-cover"
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              />
            </Image.PreviewGroup>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech?.map((t, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm md:text-base rounded-3xl text-primary bg-[#4caf5015]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Modal>
      <section className="container mx-auto px-2 md:px-10 h-screen flex flex-col items-center justify-center snap-start">
        <h2 className="text-center text-primary mb-8 text-3xl md:text-[40px] font-jetbrains font-bold">
          Featured Projects
        </h2>
        <div className="w-full max-w-full overflow-hidden px-12 md:px-14 relative before:content-[''] before:absolute before:w-[2px] before:h-full before:bg-green-500/25 before:top-0 md:before:z-50 before:left-1/2 before:-translate-x-1/2">
          <div className="absolute left-0 right-0 top-1/2 translate-y-[-50%] flex items-center justify-between z-40">
            <button
              onClick={() => goPrev()}
              className="text-white hover:text-primary hover:scale-105 transition duration-150 size-10 rounded-full bg-[#1e1e1e] text-xl flex items-center justify-center"
            >
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={() => goNext()}
              className="text-white hover:text-primary hover:scale-105 transition duration-150 size-10 rounded-full bg-[#1e1e1e] text-xl flex items-center justify-center"
            >
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          <div
            className="flex gap-20 md:gap-0 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% - ${
                currentIndex * 80
              }px))`,
            }}
          >
            {projects.map((p, index) => (
              <div
                key={index}
                onClick={() => {
                  setOpen(true);
                  setProject(p);
                }}
                className={`min-w-full md:min-w-[50%] cursor-pointer ${
                  index == 2 || index == 4 ? "md:ms-20" : ""
                }`}
              >
                <div className="transition-transform duration-300 ease-in-out">
                  <div
                    className={`w-full bg-[#1e1e1e] hover:bg-[#2d2d2d] p-4 md:p-8 ${
                      index % 2 == 0 ? "md:rounded-s-2xl" : "md:rounded-e-2xl"
                    } ${isMobile ? "rounded-2xl" : ""}`}
                  >
                    <div className="text-[24px] mb-2 font-bold text-primary">
                      {p.title}
                    </div>
                    <div className="my-2">
                      <span className="text-[14px] text-primary">
                        {p.timework}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                      {p.position}
                    </h3>
                    <div className="max-h-[190px] overflow-y-auto md:max-h-none">
                      <ul className="list-disc list-inside text-[#b0b0b0] text-sm md:text-[16px]">
                        {p.fetures.map((li, index) => (
                          <li key={index} className="marker:text-primary">
                            {li}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.tech.map((t, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-sm md:text-base rounded-3xl text-primary bg-[#4caf5015]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      {p.github && (
                        <>
                          <a
                            href={p.github}
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
                        </>
                      )}
                      {p.live && (
                        <>
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-3xl hover:text-primary hover:scale-125 transition duration-300"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              width="1em"
                              viewBox="0 0 58 58"
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                            >
                              <path d="M50.688,48.222C55.232,43.101,58,36.369,58,29c0-7.667-2.996-14.643-7.872-19.834c0,0,0-0.001,0-0.001  c-0.004-0.006-0.01-0.008-0.013-0.013c-5.079-5.399-12.195-8.855-20.11-9.126l-0.001-0.001L29.439,0.01C29.293,0.005,29.147,0,29,0  s-0.293,0.005-0.439,0.01l-0.563,0.015l-0.001,0.001c-7.915,0.271-15.031,3.727-20.11,9.126c-0.004,0.005-0.01,0.007-0.013,0.013  c0,0,0,0.001-0.001,0.002C2.996,14.357,0,21.333,0,29c0,7.369,2.768,14.101,7.312,19.222c0.006,0.009,0.006,0.019,0.013,0.028  c0.018,0.025,0.044,0.037,0.063,0.06c5.106,5.708,12.432,9.385,20.608,9.665l0.001,0.001l0.563,0.015C28.707,57.995,28.853,58,29,58  s0.293-0.005,0.439-0.01l0.563-0.015l0.001-0.001c8.185-0.281,15.519-3.965,20.625-9.685c0.013-0.017,0.034-0.022,0.046-0.04  C50.682,48.241,50.682,48.231,50.688,48.222z M2.025,30h12.003c0.113,4.239,0.941,8.358,2.415,12.217  c-2.844,1.029-5.563,2.409-8.111,4.131C4.585,41.891,2.253,36.21,2.025,30z M8.878,11.023c2.488,1.618,5.137,2.914,7.9,3.882  C15.086,19.012,14.15,23.44,14.028,28H2.025C2.264,21.493,4.812,15.568,8.878,11.023z M55.975,28H43.972  c-0.122-4.56-1.058-8.988-2.75-13.095c2.763-0.968,5.412-2.264,7.9-3.882C53.188,15.568,55.736,21.493,55.975,28z M28,14.963  c-2.891-0.082-5.729-0.513-8.471-1.283C21.556,9.522,24.418,5.769,28,2.644V14.963z M28,16.963V28H16.028  c0.123-4.348,1.035-8.565,2.666-12.475C21.7,16.396,24.821,16.878,28,16.963z M30,16.963c3.179-0.085,6.3-0.566,9.307-1.438  c1.631,3.91,2.543,8.127,2.666,12.475H30V16.963z M30,14.963V2.644c3.582,3.125,6.444,6.878,8.471,11.036  C35.729,14.45,32.891,14.881,30,14.963z M40.409,13.072c-1.921-4.025-4.587-7.692-7.888-10.835  c5.856,0.766,11.125,3.414,15.183,7.318C45.4,11.017,42.956,12.193,40.409,13.072z M17.591,13.072  c-2.547-0.879-4.991-2.055-7.294-3.517c4.057-3.904,9.327-6.552,15.183-7.318C22.178,5.38,19.512,9.047,17.591,13.072z M16.028,30  H28v10.038c-3.307,0.088-6.547,0.604-9.661,1.541C16.932,37.924,16.141,34.019,16.028,30z M28,42.038v13.318  c-3.834-3.345-6.84-7.409-8.884-11.917C21.983,42.594,24.961,42.124,28,42.038z M30,55.356V42.038  c3.039,0.085,6.017,0.556,8.884,1.4C36.84,47.947,33.834,52.011,30,55.356z M30,40.038V30h11.972  c-0.113,4.019-0.904,7.924-2.312,11.58C36.547,40.642,33.307,40.126,30,40.038z M43.972,30h12.003  c-0.228,6.21-2.559,11.891-6.307,16.348c-2.548-1.722-5.267-3.102-8.111-4.131C43.032,38.358,43.859,34.239,43.972,30z   M9.691,47.846c2.366-1.572,4.885-2.836,7.517-3.781c1.945,4.36,4.737,8.333,8.271,11.698C19.328,54.958,13.823,52.078,9.691,47.846  z M32.521,55.763c3.534-3.364,6.326-7.337,8.271-11.698c2.632,0.945,5.15,2.209,7.517,3.781  C44.177,52.078,38.672,54.958,32.521,55.763z" />
                            </svg>
                          </a>
                        </>
                      )}
                      {p.docs && (
                        <>
                          <a
                            href={p.docs}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-3xl hover:text-primary hover:scale-125 transition duration-300"
                          >
                            <svg
                              height="1em"
                              width="1em"
                              //  viewBox="0 0 58 58"
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 512.001 512.001"
                            >
                              <g>
                                <g>
                                  <path d="M463.996,126.864L340.192,3.061C338.231,1.101,335.574,0,332.803,0H95.726C67.724,0,44.944,22.782,44.944,50.784v410.434    c0,28.001,22.781,50.783,50.783,50.783h320.547c28.002,0,50.783-22.781,50.783-50.783V134.253    C467.056,131.482,465.955,128.824,463.996,126.864z M343.255,35.679l88.127,88.126H373.14c-7.984,0-15.49-3.109-21.134-8.753    c-5.643-5.643-8.752-13.148-8.751-21.131V35.679z M446.158,461.217c0,16.479-13.406,29.885-29.884,29.885H95.726    c-16.479,0-29.885-13.406-29.885-29.885V50.784c0.001-16.479,13.407-29.886,29.885-29.886h226.631v73.021    c-0.002,13.565,5.28,26.318,14.871,35.909c9.592,9.592,22.345,14.874,35.911,14.874h73.018V461.217z" />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M275.092,351.492h-4.678c-5.77,0-10.449,4.678-10.449,10.449s4.679,10.449,10.449,10.449h4.678    c5.77,0,10.449-4.678,10.449-10.449S280.862,351.492,275.092,351.492z" />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M236.61,351.492H135.118c-5.77,0-10.449,4.678-10.449,10.449s4.679,10.449,10.449,10.449H236.61    c5.77,0,10.449-4.678,10.449-10.449S242.381,351.492,236.61,351.492z" />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M376.882,303.747H135.119c-5.77,0-10.449,4.678-10.449,10.449c0,5.771,4.679,10.449,10.449,10.449h241.763    c5.77,0,10.449-4.678,10.449-10.449C387.331,308.425,382.652,303.747,376.882,303.747z" />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M376.882,256H135.119c-5.77,0-10.449,4.678-10.449,10.449c0,5.771,4.679,10.449,10.449,10.449h241.763    c5.77,0,10.449-4.678,10.449-10.449C387.331,260.678,382.652,256,376.882,256z" />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M376.882,208.255H135.119c-5.77,0-10.449,4.678-10.449,10.449c0,5.771,4.679,10.449,10.449,10.449h241.763    c5.77,0,10.449-4.678,10.449-10.449S382.652,208.255,376.882,208.255z" />
                                </g>
                              </g>
                            </svg>
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
