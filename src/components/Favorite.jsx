import React from "react";

const Favorite = () => {
  return (
    <>
      <section className="container mx-auto px-2 md:px-10 h-screen flex flex-col items-center justify-center snap-start">
        <h2 className="text-center text-primary mb-8 text-3xl md:text-[40px] font-jetbrains font-bold">
          Favorite
        </h2>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
            <div className="p-2 md:p-5 rounded-xl text-white h-[100px] md:h-[170px] cursor-pointer flex flex-col justify-between hover:scale-105 transition duration-300 bg-[#1e1e1e]">
              <h3 className="flex items-start gap-5 font-bold  text-base md:text-xl">
                <div className="text-primary text-3xl">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                  >
                    <path
                      d="M9 19C9 20.6569 7.65685 22 6 22C4.34315 22 3 20.6569 3 19C3 17.3431 4.34315 16 6 16C7.65685 16 9 17.3431 9 19Z"
                      stroke="#4caf50"
                      stroke-width="1.5"
                    />
                    <path
                      d="M21 17C21 18.6569 19.6569 20 18 20C16.3431 20 15 18.6569 15 17C15 15.3431 16.3431 14 18 14C19.6569 14 21 15.3431 21 17Z"
                      stroke="#4caf50"
                      stroke-width="1.5"
                    />
                    <path d="M9 19V8" stroke="#4caf50" stroke-width="1.5" />
                    <path d="M21 17V6" stroke="#4caf50" stroke-width="1.5" />
                    <path
                      d="M15.7351 3.75466L11.7351 5.08799C10.4151 5.52801 9.75503 5.74801 9.37752 6.27179C9 6.79556 9 7.49128 9 8.88273V11.9997L21 7.99969V7.54939C21 5.01693 21 3.7507 20.1694 3.15206C19.3388 2.55341 18.1376 2.95383 15.7351 3.75466Z"
                      stroke="#4caf50"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div className="">
                  <p>Music</p>
                  <div className="flex items-center gap-3 flex-wrap text-[10px] md:text-[12px] mt-1">
                    <p className="px-3  rounded-full bg-white bg-opacity-10">
                      POP
                    </p>
                    <p className="px-3  rounded-full bg-white bg-opacity-10">
                      BALLAD
                    </p>
                    <p className="px-3  rounded-full bg-white bg-opacity-10">
                      RAP
                    </p>
                  </div>
                </div>
              </h3>
              <div className="text-primary text-[11px] md:text-sm font-semibold flex items-center gap-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  height="1.5em"
                  width="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.5,4.609A5.811,5.811,0,0,0,16,2.5a5.75,5.75,0,0,0-4,1.455A5.75,5.75,0,0,0,8,2.5,5.811,5.811,0,0,0,3.5,4.609c-.953,1.156-1.95,3.249-1.289,6.66,1.055,5.447,8.966,9.917,9.3,10.1a1,1,0,0,0,.974,0c.336-.187,8.247-4.657,9.3-10.1C22.45,7.858,21.453,5.765,20.5,4.609Zm-.674,6.28C19.08,14.74,13.658,18.322,12,19.34c-2.336-1.41-7.142-4.95-7.821-8.451-.513-2.646.189-4.183.869-5.007A3.819,3.819,0,0,1,8,4.5a3.493,3.493,0,0,1,3.115,1.469,1.005,1.005,0,0,0,1.76.011A3.489,3.489,0,0,1,16,4.5a3.819,3.819,0,0,1,2.959,1.382C19.637,6.706,20.339,8.243,19.826,10.889Z" />
                </svg>
                四月は君の嘘
              </div>
            </div>
            <div className="p-2 md:p-5 rounded-xl text-white h-[100px] md:h-[170px] cursor-pointer flex flex-col justify-between hover:scale-105 transition duration-300 bg-[#1e1e1e]">
              <h3 className="flex items-start gap-5 font-bold  text-base md:text-xl">
                <div className="text-primary text-3xl">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    height="1em"
                    width="1em"
                    viewBox="0 0 96 96"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m57.411 13.076-9.029 9.029-4.941-7.036c-5.632-8.02-5.066-7.713-8.714-4.727l-2.772 2.269 4.077 5.695L40.11 24H29.005C9.058 24 8.009 25.489 8.004 53.8 7.998 85.455 6.068 83.991 47.8 83.996c42.13.005 40.193 1.452 40.193-29.996 0-28.3-1.143-30-20.168-30H57.55l7.245-7.294 7.245-7.293-2.8-2.683-2.8-2.683-9.029 9.029M17.2 33.2c-1.695 1.695-1.695 39.905 0 41.6 1.695 1.695 39.905 1.695 41.6 0 1.695-1.695 1.695-39.905 0-41.6-1.695-1.695-39.905-1.695-41.6 0M67.5 54v22h5.05c6.625 0 7.45-1.019 7.45-9.2V60h-8v-8h4c3.333 0 4-.333 4-2s-.667-2-4-2h-4v-8h4c3.714 0 4-.2 4-2.8 0-4.007-1.709-5.2-7.45-5.2H67.5v22"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="">
                  <p>Anime</p>
                  <div className="flex items-center gap-3 flex-wrap text-[10px] md:text-[12px] mt-1">
                    <p className="px-3  rounded-full bg-white bg-opacity-10">
                      FANTASY
                    </p>
                    <p className="px-3  rounded-full bg-white bg-opacity-10">
                      ISEKAI
                    </p>
                    <p className="px-3  rounded-full bg-white bg-opacity-10">
                      ROMCOM
                    </p>
                  </div>
                </div>
              </h3>
              <div className="text-primary text-[11px] md:text-sm font-semibold flex items-center gap-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  height="1.5em"
                  width="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.5,4.609A5.811,5.811,0,0,0,16,2.5a5.75,5.75,0,0,0-4,1.455A5.75,5.75,0,0,0,8,2.5,5.811,5.811,0,0,0,3.5,4.609c-.953,1.156-1.95,3.249-1.289,6.66,1.055,5.447,8.966,9.917,9.3,10.1a1,1,0,0,0,.974,0c.336-.187,8.247-4.657,9.3-10.1C22.45,7.858,21.453,5.765,20.5,4.609Zm-.674,6.28C19.08,14.74,13.658,18.322,12,19.34c-2.336-1.41-7.142-4.95-7.821-8.451-.513-2.646.189-4.183.869-5.007A3.819,3.819,0,0,1,8,4.5a3.493,3.493,0,0,1,3.115,1.469,1.005,1.005,0,0,0,1.76.011A3.489,3.489,0,0,1,16,4.5a3.819,3.819,0,0,1,2.959,1.382C19.637,6.706,20.339,8.243,19.826,10.889Z" />
                </svg>
                Kage no Jitsuryokusha ni Naritakute!
              </div>
            </div>
            <div className="p-2 md:p-5 rounded-xl text-white h-[100px] md:h-[170px] cursor-pointer flex flex-col justify-between hover:scale-105 transition duration-300 bg-[#1e1e1e] relative">
              <h3 className="flex items-start gap-5 font-bold  text-base md:text-xl">
                <div className="text-primary text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    width="1em"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                  >
                    <path
                      d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20"
                      stroke="#4caf50"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="">
                  <p>Comic</p>
                  <div className="flex items-center gap-3 flex-wrap text-[10px] md:text-[12px] mt-1">
                    <p className="px-3  rounded-full bg-white bg-opacity-10">
                      MANGA
                    </p>
                    <p className="px-3  rounded-full bg-white bg-opacity-10">
                      LIGHT NOVEL
                    </p>
                  </div>
                </div>
              </h3>
              <div className="text-primary text-[11px] md:text-sm font-semibold flex items-center gap-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  height="1.5em"
                  width="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.5,4.609A5.811,5.811,0,0,0,16,2.5a5.75,5.75,0,0,0-4,1.455A5.75,5.75,0,0,0,8,2.5,5.811,5.811,0,0,0,3.5,4.609c-.953,1.156-1.95,3.249-1.289,6.66,1.055,5.447,8.966,9.917,9.3,10.1a1,1,0,0,0,.974,0c.336-.187,8.247-4.657,9.3-10.1C22.45,7.858,21.453,5.765,20.5,4.609Zm-.674,6.28C19.08,14.74,13.658,18.322,12,19.34c-2.336-1.41-7.142-4.95-7.821-8.451-.513-2.646.189-4.183.869-5.007A3.819,3.819,0,0,1,8,4.5a3.493,3.493,0,0,1,3.115,1.469,1.005,1.005,0,0,0,1.76.011A3.489,3.489,0,0,1,16,4.5a3.819,3.819,0,0,1,2.959,1.382C19.637,6.706,20.339,8.243,19.826,10.889Z" />
                </svg>
                Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center mt-5 md:mt-8">
          <div className="w-52 h-10 rounded-xl animate-pacse bg-primary"></div>
          <a
            href="https://khosach.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-10 w-52 rounded-xl text-white bg-primary cursor-pointer"
          >
            See my book collection
          </a>
        </div>
      </section>
    </>
  );
};

export default Favorite;
