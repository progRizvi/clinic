import React from "react";
import { Container } from "react-bootstrap";
import AboutData from "../../data/AboutUsData/AboutUsData";

const AboutUs = () => {
  return (
    <section>
      <Container className="my-5 py-5">
        <div className="service-container mt-5">
          {AboutData.map((data) => (
            <div className="d-md-flex justify-content-between" key={data.id}>
              <div className="service-img pe-5">
                <img className="img-fluid" src={data.img} alt="" />
              </div>
              <div className="">
                <h5>{data.title}</h5>
                <p>{data.des}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
