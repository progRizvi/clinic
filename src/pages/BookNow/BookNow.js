import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const BookNow = () => {
  const { user } = useAuth();

  return (
    <div className="mt-5 pt-5">
      <Container>
        <Row className="g-2">
          <Col md>
            <Form.Control
              className="mt-3"
              type="text"
              placeholder="Your Name"
              value={user.displayName}
            />
            <Form.Control
              className="mt-3"
              type="email"
              placeholder="name@example.com"
              value={user.email}
            />
            <Form.Control className="mt-3" type="text" placeholder="Address" />
            <Form.Control className="mt-3" type="email" placeholder="City" />
            <Form.Control className="mt-3" type="email" placeholder="State" />
          </Col>
          <Col md>
            <h2 className="text-center">Total Cost:</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookNow;
