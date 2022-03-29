import React from "react";
import { Container, Table } from "react-bootstrap";
import { BsCalendar3, BsClock, BsTelephone } from "react-icons/bs";

const Timetable = () => {
  return (
    <div className="timetable">
      <Container className="timetable-container">
        <div className="emergency p-5 text-white">
          <div className="pb-3">
            <BsTelephone className="fs-3" />
          </div>
          <h3>Emergency Cases</h3>
          <p className="pt-3">
            Ut wisi enim ad minim veniam, quis laore nostrud exerci tation
          </p>
          <h3>1-800-400-7400</h3>
        </div>
        <div className="calender p-5 text-white">
          <div className=" pb-3">
            <BsCalendar3 className="fs-3" />
          </div>
          <h3>Doctors Timetable</h3>
          <p className="pt-3">
            Duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet molestie consequat, vel
            legentis in iis qui facit
          </p>
        </div>
        <div className="time-table p-5 text-white">
          <div className="pb-3">
            <BsClock className="fs-3" />
          </div>
          <h3>Opening Hours</h3>
          <Table size="sm" className="pt3 text-white">
            <tbody>
              <tr>
                <td>Monday - Friday</td>
                <td>8.00-17.00</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>9.30-17.30</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>9.30-15.00</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default Timetable;
