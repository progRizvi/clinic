import React from "react";
import { Card } from "react-bootstrap";

const Doctor = ({ doctor }) => {
  const { name, img, des, title, fb, tw, linkedin, instra } = doctor;
  return (
    <div className="doctor">
      <Card
        className="doctor-card d-flex justify-content-center"
        style={{ width: "18rem" }}
      >
        <Card.Img className="doctor-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{title}</Card.Text>
          <Card.Text>{des}</Card.Text>
          <div className="social-icons d-flex justify-content-center mt-4">
            <span className="pe-4">{fb}</span>
            <span className="pe-4">{tw}</span>
            <span className="pe-4">{linkedin}</span>
            <span className="pe-4">{instra}</span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Doctor;
