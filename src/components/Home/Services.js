import React from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
import UseService from "../../hooks/UseService";
import Service from "../Services/Service/Service";

const Services = () => {
  const [services] = UseService();
  const history = useHistory();
  const handleServiceDetails = (key) => {
    history.push(`/services/${key}`);
  };
  return (
    <div className="mt-5 pt-5">
      <Container>
        <h2 className="text-center my-5">Our Services</h2>
        <div className="services-container">
          {services.slice(0, 6).map((service) => (
            <Service
              service={service}
              key={service.id}
              handleServiceDetails={handleServiceDetails}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
