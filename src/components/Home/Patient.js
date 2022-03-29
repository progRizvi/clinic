import React from "react";
import { Container } from "react-bootstrap";
import { PatientData } from "../../data/Patient/PatientData";
import patient from "../../imgs/about-us-img-1.jpg";

const Patient = () => {
  return (
    <div className="d-lg-flex justify-content-center align-items-center patient-container">
      <Container>
        <div className="row">
          <div className="col-md-6">
            <p className="display-4">Finest Patient</p>
            <h1 className="display-3 fw-bold">Care & Amenities</h1>
            <div className=" patient-data mt-5">
              {PatientData.map((patient) => (
                <p key={patient.id}>
                  <span
                    className="me-3"
                    style={{ color: "#4f6dcd", fontSize: "16px" }}
                  >
                    {patient.icon}
                  </span>
                  {patient.des}
                </p>
              ))}
            </div>
            <button className="btn btn-info mt-4 text-white">Learn More</button>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={patient} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Patient;
