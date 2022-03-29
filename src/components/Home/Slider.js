import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../imgs/slider/slider-img-1.jpg";
import img2 from "../../imgs/slider/slider-img-2.jpg";
import img3 from "../../imgs/slider/slider-img-3.jpg";

const Slider = () => {
  return (
    <>
      <Carousel className="slider">
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
