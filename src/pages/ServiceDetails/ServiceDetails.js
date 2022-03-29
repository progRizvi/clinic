import React, { useEffect, useState } from "react";
import { Button, Carousel, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import UseService from "../../hooks/UseService";

const ServiceDetails = () => {
  const [singleService, setSingleService] = useState({});
  const [restServices, setRestServices] = useState([]);
  const { serviceId } = useParams();
  const [services] = UseService();
  useEffect(() => {
    const singleData = services.find((service) => service.id === serviceId);
    setSingleService(singleData);
    const restData = services.filter((service) => service.id !== serviceId);
    setRestServices(restData);
  }, [services]);
  return (
    <div className="mt-5">
      <Container>
        <div className="row">
          <div className="page-details col-md-6">
            <p>
              Service Name:{" "}
              <span className="fw-bold">{singleService?.treatment_name}</span>
            </p>
            <p>
              Service Fee: $
              <span className="fw-bold">{singleService?.price}</span>
            </p>
            <p>
              Service Details:{" "}
              <span className="">{singleService?.description}</span>
            </p>
            <NavLink to="/booknow">
              <Button variant="info">Book Now</Button>
            </NavLink>
            <div className="w-50 mt-5 pt-5">
              <Carousel>
                {restServices?.map((service) => (
                  <Carousel.Item interval={1000} key={service.id}>
                    <NavLink to={`/services/${service.id}`}>
                      <img
                        className="d-block w-100"
                        src={service.img}
                        alt="First slide"
                      />
                    </NavLink>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="page-img col-md-6">
            <img src={singleService?.img} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetails;
