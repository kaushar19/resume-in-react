import React from "react";
import { Link } from "react-router-dom";
import Photo1 from "../images/Photo1.jpg";
function SideBar() {
  return (
    <>
      {/* Left Column */}
      <div className="w3-third">
        <div className="w3-white w3-text-grey w3-card-4">
          <div className="w3-display-container">
            <img src={Photo1} style={{ width: "100%" }} alt="Avatar" />
            <div className="w3-display-bottomleft w3-container w3-text-black">
              <h2
                style={{
                  backgroundColor: "rgba(255,255,255,.4)",
                  padding: "0px 5px 0px 5px",
                }}
              >
                Kaushar Ahmad Ansari
              </h2>
            </div>
          </div>
          <div className="w3-container">
            {/* Job Profile */}
            <p>
              <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />
              Front-End Developer | React Developer
            </p>
            {/* Address */}
            <p>
              <Link to="">
                <i className="fa fa-solid fa-location-dot fa-fw w3-margin-right w3-large w3-text-teal" />
              </Link>
              <Link to="">Sector 63, Noida</Link>
            </p>
            {/* Gmail */}
            <p>
              <Link to="mailto:kausharbtt@gmail.com">
                {" "}
                <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />
              </Link>
              <Link to="mailto:kausharbtt@gmail.com">kausharbtt@gmail.com</Link>
            </p>
            {/* Mobile Number */}
            <p>
              <Link to="tel:+919795078011">
                <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />
              </Link>
              <Link to="tel:+919795078011">+919795078011</Link>
            </p>
            {/* Linkedin */}
            <p>
              <Link to="https://www.linkedin.com/in/kaushar">
                <i className="fa fa-brands fa-linkedin fa-fw w3-margin-right w3-large w3-text-teal" />
              </Link>
              <Link to="https://www.linkedin.com/in/kaushar">
                https://www.linkedin.com/in/kaushar
              </Link>
            </p>
            {/* GitHub */}
            <p>
              <Link to="https://github.com/kaushar19">
                <i className="fa fa-brands fa-github fa-fw w3-margin-right w3-large w3-text-teal" />
              </Link>
              <Link to="https://github.com/kaushar19">
                https://github.com/kaushar19
              </Link>
            </p>
            {/* Portfolio */}
            <p>
              <Link to="https://kaushar19.github.io/portfolio/">
                <i className="fa fa-solid fa-circle-user fa-fw w3-margin-right w3-large w3-text-teal" />
              </Link>
              <Link to="https://kaushar19.github.io/portfolio/">
                https://kaushar19.github.io/portfolio/
              </Link>
            </p>
            <hr />
            {/* Hard Skills */}
            <p className="w3-large">
              <b>
                <i className="fa fa-solid fa-laptop-code fa-fw w3-margin-right w3-text-teal" />
                Hard Skills
              </b>
            </p>
            <p>React.Js, JSX</p>
            <div className="w3-light-grey w3-round-xlarge w3-small">
              <div
                className="w3-container w3-center w3-round-xlarge w3-teal"
                style={{ width: "60%" }}
              >
                60%
              </div>
            </div>
            <p>JavaScript, REST API(GET,POST)</p>
            <div className="w3-light-grey w3-round-xlarge w3-small">
              <div
                className="w3-container w3-center w3-round-xlarge w3-teal"
                style={{ width: "75%" }}
              >
                <div className="w3-center w3-text-white">75%</div>
              </div>
            </div>
            <p>Responsive Web Design, Bootstrap-5</p>
            <div className="w3-light-grey w3-round-xlarge w3-small">
              <div
                className="w3-container w3-center w3-round-xlarge w3-teal"
                style={{ width: "80%" }}
              >
                80%
              </div>
            </div>
            <p>CSS and HTML-5</p>
            <div className="w3-light-grey w3-round-xlarge w3-small">
              <div
                className="w3-container w3-center w3-round-xlarge w3-teal"
                style={{ width: "80%" }}
              >
                80%
              </div>
            </div>
            <p>Ms Word , Excel and Power Point</p>
            <div className="w3-light-grey w3-round-xlarge w3-small">
              <div
                className="w3-container w3-center w3-round-xlarge w3-teal"
                style={{ width: "55%" }}
              >
                55%
              </div>
            </div>
            <br />
            {/* Soft SKills */}
            <p className="w3-large">
              <b>
                <i className="fa fa-regular fa-comment fa-fw w3-margin-right w3-text-teal" />
                Soft Skills
              </b>
            </p>
            <p>Adaptability</p>
            <p>Problem Solving</p>
            <p>Teamwork</p>
            <p>Communication</p>
            <p>Quick Learner</p>
            {/* Intrest */}
            <p className="w3-large">
              <b>
                <i className="fa fa-solid fa-heart fa-fw w3-margin-right w3-text-teal" />
                Interests
              </b>
            </p>
            <p>Web Designing</p>
            <p>Cricket</p>
            <p>Travelling</p>
            {/* Language */}
            <p className="w3-large w3-text-theme">
              <b>
                <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" />
                Languages
              </b>
            </p>
            <p>Hindi</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div
                className="w3-round-xlarge w3-teal"
                style={{ height: 24, width: "100%" }}
              />
            </div>
            <p>English</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div
                className="w3-round-xlarge w3-teal"
                style={{ height: 24, width: "70%" }}
              />
            </div>
            <br />
          </div>
        </div>
        <br />
      </div>
      {/* End Left Column */}
    </>
  );
}

export default SideBar;
