import React from "react";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Objective from "./Objective";
import Internship from "./Internship";
import Education from "./Education";
import Projects from "./Projects";
import CollegeProjects from "./CollegeProjects";

function Home() {
  return (
    <>
      {/* Page Container */}
      <div className="w3-content w3-margin-top" style={{ maxWidth: 1400 }}>
        {/* The Grid */}
        <div className="w3-row-padding">
          {/* Left Column Start */}
          <SideBar />
          {/* Left Column End */}
          {/* Right Column Start */}
          <div class="w3-twothird">
            <Objective />
            <Internship />
            <Education />
            <Projects />
            <CollegeProjects />
          </div>
          {/* Right Column End */}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
