import React from "react";
import AboutUs from "../../components/Home/AboutUs";
import Gallery from "../../components/Home/Gallery";
import Patient from "../../components/Home/Patient";
import Services from "../../components/Home/Services";
import Slider from "../../components/Home/Slider";
import Timetable from "../../components/Home/Timetable";
import "./Home.css";

const Home = () => {
  return (
    <header>
      <Slider />
      <Timetable />
      <Patient />
      <AboutUs />
      <Gallery />
      <Services />
    </header>
  );
};

export default Home;
