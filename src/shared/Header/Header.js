import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../imgs/header-logo.png";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar bg="white" variant="light" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand className="fs-3" as={Link} to="/">
            <img
              alt="Logo"
              width="200px"
              src={logo}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="fs-5" as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="fs-5" as={NavLink} to="/doctors">
                Doctors
              </Nav.Link>
              <Nav.Link className="fs-5" as={NavLink} to="/services">
                Services
              </Nav.Link>
              {!user.email ? (
                <>
                  <Nav.Link className="fs-5" as={NavLink} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link className="fs-5" as={NavLink} to="/register">
                    Register
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    onClick={logOut}
                    className="fs-5 text-white fw-bold"
                    as={Button}
                    style={{
                      background: "red",
                      border: "none",
                      outline: "none",
                      borderRadius: "5px",
                    }}
                  >
                    Logout
                  </Nav.Link>
                  <Navbar.Text className="ps-3 fs-5">
                    {" "}
                    {user.displayName}{" "}
                  </Navbar.Text>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
