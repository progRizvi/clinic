import React from "react";
import { Container } from "react-bootstrap";
import Doctor from "../../components/Doctors/Doctor/Doctor";
import doctorsData from "../../data/Doctors/Doctors";
import "./Doctors.css";
const Doctors = () => {
  return (
    <section>
      <Container>
        <h2 className="text-center my-5">Our Doctors</h2>
        <div className="doctors-container">
          {doctorsData.map((doctor) => (
            <Doctor doctor={doctor} key={doctor.id} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Doctors;
