import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import footerLogo from "../../imgs/logo-footer-light.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mt-5 bg-dark">
      <div className="p-5">
        <Row>
          <Col md>
            <img src={footerLogo} alt="" />
            <p className="text-white pt-4">
              Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm
              hedi corper turet suscipit lobortis augue duis dolore te feugait
              nulla facilisi mazim placerat
            </p>
            <p className=" text-white pt-3">
              {" "}
              <span className="text-info fs-5 pe-3">
                <ImLocation />
              </span>{" "}
              Street, 11000 Helsinki, USA
            </p>
            <p className=" text-white pt-3">
              <span className="text-info fs-5 pe-3">
                <BsTelephoneFill />
              </span>{" "}
              (+1) 205 123 4567
            </p>
            <p className=" text-white pt-3">
              <span className="text-info fs-5 pe-3">
                <FaEnvelope />
              </span>{" "}
              rizvi1316@gmail.com
            </p>
          </Col>
          <Col md></Col>
          <Col md></Col>
          <Col md>
            <h3>Contact Us</h3>
            <>
              <div className="footer-contact-email">
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  className="w-100 mb-3 email"
                />
              </div>
              <div className="footer-contact-message">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  className="w-100 mb-3 h-100 message"
                />
              </div>
              <Button variant="info" className="mt-3 ">
                Submit
              </Button>
            </>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
