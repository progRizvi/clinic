import React from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
// import serviceData from "";
import Service from "../../components/Services/Service/Service";
import UseService from "../../hooks/UseService";
import "./Services.css";

const Services = () => {
  const history = useHistory();
  const [services] = UseService();
  const handleServiceDetails = (key) => {
    history.push(`/services/${key}`);
  };
  return (
    <div>
      <Container>
        <div className="services-container">
          {services.map((service) => (
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
