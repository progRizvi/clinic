import React from "react";
import { Button, Form } from "react-bootstrap";
import { FaGithub, FaGoogle, FaLock, FaUserAlt } from "react-icons/fa";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const {
    googleSignIn,
    githubSignIn,
    handleRegistration,
    handleUserPass,
    handleUserEmail,
    handleUserName,
    setIsLoading,
  } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        history.push(redirect_uri);
      })
      .finaly(() => setIsLoading(false));
  };
  const handleGithubLogin = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        history.push(redirect_uri);
      })
      .finaly(() => setIsLoading(false));
  };
  return (
    <section className="register-section">
      <div className="d-flex justify-content-center align-items-center h-75">
        <div className="w-25 login-form">
          <h2>Register Form</h2>
          <Form className=" py-3 px-4" onSubmit={handleRegistration}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <div className="d-flex justify-content-center align-items-center ">
                <span className="user-icon">
                  <FaUserAlt />
                </span>
                <input
                  className="user-name"
                  type="text"
                  placeholder="Enter Name"
                  onBlur={handleUserName}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <div className="d-flex justify-content-center align-items-center ">
                <span className="user-icon">
                  <FaUserAlt />
                </span>
                <input
                  className="user-email"
                  type="email"
                  placeholder="Enter Email"
                  onBlur={handleUserEmail}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <div className="d-flex justify-content-center align-items-center ">
                <span className="user-icon">
                  <FaLock />
                </span>
                <input
                  className="user-password"
                  type="password"
                  placeholder="Enter Password"
                  onBlur={handleUserPass}
                  required
                />
              </div>
            </Form.Group>
            <div className="d-grid gap-2 col-6 mx-auto">
              <Button className="custom-btn" type="submit">
                Register
              </Button>
            </div>
            <div className="d-flex mt-3 fs-5 justify-content-center">
              <p className="pe-2">Already a member?</p>
              <NavLink to="/login" style={{ color: "#91C0BB" }}>
                Login Now
              </NavLink>
            </div>
          </Form>
          <div className="d-grid gap-2 col-6 mx-auto mb-4">
            <Button
              onClick={handleGoogleLogin}
              className="custom-btn"
              type="submit"
            >
              <span className="pe-2">
                <FaGoogle />
              </span>
              Login With Google
            </Button>
            <Button
              onClick={handleGithubLogin}
              className="custom-btn custom"
              type="submit"
            >
              <span className="pe-2">
                <FaGithub />
              </span>
              Login With Github
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
