import React from "react";

function Education() {
  return (
    <>
      {/* Education Details */}
      <div className="w3-container w3-card w3-white w3-margin-bottom">
        <h2 className="w3-text-grey w3-padding-16">
          <i className="fa fa-solid fa-user-graduate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
          Education
        </h2>
        <div className="w3-container">
          <h5 className="w3-opacity">
            <b>MJP Rohilkhand University Bareilly</b>
          </h5>
          <h6 className="w3-text-teal">B.Tech</h6>
          <p>
            <i>Electronics and Communication Engg.</i>
          </p>
          <hr />
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity">
            <b>Govt Polytechnic Kanpur</b>
          </h5>
          <h6 className="w3-text-teal">Diploma</h6>
          <p>
            <i>Chemical Engg.</i>
          </p>
          <hr />
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity">
            <b>Govt Jubilee I C College Gorakhpur</b>
          </h5>
          <h6 className="w3-text-teal" />
          <p>
            <i>Intermediate</i>
          </p>
          <br />
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity">
            <b>Shri Krishna H S School Bhatni</b>
          </h5>
          <h6 className="w3-text-teal" />
          <p>
            <i>High School</i>
          </p>
          <br />
        </div>
      </div>
    </>
  );
}

export default Education;
