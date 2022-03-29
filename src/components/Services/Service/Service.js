import React from "react";
import { Button, Card } from "react-bootstrap";

const Service = (props) => {
  const { service, handleServiceDetails } = props;
  const { img, treatment_name, description, id } = service;
  return (
    <div>
      <Card className="service-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{treatment_name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button onClick={() => handleServiceDetails(id)} kvariant="primary">
            See Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
