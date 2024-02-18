import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer
        className="text-center text-lg-start "
        style={{ backgroundColor: "#176B87" }}
      >
        <h4 className="text-center text-light pt-2">
          <span className="txtdanger">
            <i>Find me on social media.</i>
          </span>
        </h4>
        <div className="container d-flex justify-content-center py-4">
          <Link
            className="text-dark"
            to="https://www.facebook.com/profile.php?id=100082414872311"
          >
            {" "}
            <i className="fa-brands fa-facebook fa-2xl mx-3 fb" />
          </Link>
          <Link
            className="text-decoration-none text-dark"
            to="https://instagram.com/kaushar_119?igshid=OGQ5ZDc2ODk2ZA=="
          >
            <i className="fa-brands fa-instagram fa-2xl mx-3 insta" />
          </Link>
          <Link className="text-dark" to="https://wa.me/qr/H5PJIUFMM5WZC1">
            <i className="fa-brands fa-whatsapp fa-2xl mx-3 whatp" />
          </Link>
          <Link className="text-dark" to="https://www.linkedin.com/in/kaushar">
            <i className="fa-brands fa-linkedin fa-2xl mx-3 linkedin" />
          </Link>
          <Link
            className="text-dark"
            to="https://maps.app.goo.gl/QtWn4UPJv9bH2PXa6"
          >
            {" "}
            <i className="fa-solid fa-location-dot fa-2xl mx-3 location" />
          </Link>
          <Link className="text-dark" to="tel:+919795078011">
            <i className="fa-solid fa-phone fa-2xl mx-3 call" />
          </Link>
        </div>
        {/* Copyright */}
        <div
          className="text-center text-white p-3 mb-5"
          title="Go To My GitHub Account"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © Copyright 2023 :
          <Link
            className="text-white text-decoration-none"
            to="https://github.com/kaushar19"
          >
            <span>https://github.com/kaushar19</span>
          </Link>
        </div>
        {/* Copyright */}
      </footer>
    </>
  );
}

export default Footer;
