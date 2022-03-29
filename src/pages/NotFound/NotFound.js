import React from "react";
// import notFound from "../../imgs/404-Page.png";
import img from "../../imgs/404-Page.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="bg-white not-found">
      <img className="img-fluid w-100" src={img} alt="" />
    </div>
  );
};

export default NotFound;
