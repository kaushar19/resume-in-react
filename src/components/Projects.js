import React from "react";

function Projects() {
  return (
    <>
      {/* Projects */}
      <div className="w3-container w3-card w3-white w3-margin-bottom">
        <h2 className="w3-text-grey w3-padding-16">
          <i className="fa  fa-solid fa-diagram-project fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
          Projects
        </h2>
        <div className="w3-container">
          <h5 className="w3-opacity">
            <b>Simple Calculator Using React.Js</b>
          </h5>
          <h5 className="w3-opacity">
            <b> Customer Management System Form</b>
          </h5>
          <h6 className="w3-text-teal">
            Which Follow CRUD Operations(Using React.Js)
          </h6>
          <h5 className="w3-opacity">
            <b>Persional Portfolio</b>
          </h5>
        </div>
      </div>
    </>
  );
}

export default Projects;
