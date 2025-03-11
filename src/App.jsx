import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Hello from "./components/Hello";
import Infomation from "./components/Infomation";
import Skill from "./components/Skill";
import Backend from "./components/Backend";
import Tools from "./components/Tools";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Touch from "./components/Touch";
import Projects from "./components/Projects";
import Favorite from "./components/Favorite";
import BgAnimation from "./components/BgAnimation";

const App = () => {
  const [showHello, setShowHello] = useState(true);

  return (
    <>
      {showHello && <Hello onUnmount={() => setShowHello(false)} />}

      <div className="h-screen snap-y snap-mandatory overflow-scroll bg-black relative">
        <BgAnimation />

        <div className="relative z-10">
          <Infomation />
          <Skill />
          <Backend />
          <Tools />
          <Education />
          <Projects />
          <Certifications />
          <Favorite />
          <Touch />
        </div>
      </div>
    </>
  );
};

export default App;
