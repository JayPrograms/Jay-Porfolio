import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import WhatIDo from "./components/features/WhatIDo";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <WhatIDo />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
