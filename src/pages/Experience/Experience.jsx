import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./index.css";

function Experience(props) {
  return (
    <>
      <Row className="mb-5 experience">
      <h3 className="section-title">Experience</h3>
      <Col className="experience-column" lg={12}>
        <h4>MERN/PERN Developer</h4>
        <p>Neuronimbus Software Services Pvt. Ltd. / <span className="duration">March, 2022 - February, 2024</span></p>
        <ul className="task-points"> 
          <li>Worked on multiple projects that employed MERN & PERN stack.</li>
          <li>Created and implemented the frontend mockups.</li>
          <li>Implemented backend functionalities, along with working APIs and database integration.</li>
          <li>Employed Firebase analytics to keep track of the user activity trends on all websites.</li>
          <li>Resolved issues and added new features based on client demands.</li>
        </ul>
      </Col>
      
      <Col className="experience-column" lg={12}>
        <h4>Node.js Developer</h4>
        <p>MIECS / <span className="duration">February, 2020 - December, 2021</span></p>
        <ul className="task-points"> 
          <li>Worked in a collaborative team environment, collected project requirements and wrote feasible code to meet the established deadlines.</li>
          <li>Actively learnt new technologies to keep up with the project requirements and improve the overall pace of the applications.</li>
          <li>Actively participated in design, implementation, testing and deliveries of the concerned modules.</li>
          <li>Resolved issues and added new features based on the client demands.</li>
        </ul>
      </Col>

      <Col className="experience-column" lg={12}>
        <h4>EDP Manager</h4>
        <p>Grand Toyota / <span className="duration">January, 2019 - December, 2019</span></p>
        <ul className="task-points"> 
          <li>Installed and monitored securities like Anti-Virus, firewall and internet security.</li>
          <li>Installed new systems and upgraded the old systems, as per the requirement.</li>
          <li>Solved problems regarding web setup and correction of critical web errors..</li>
          <li>Demonstrated strength in working independently and in a team environment.</li>
          <li>Demonstrated the ability to work in fast-paced environment, meeting strict deadlines.</li>
        </ul>
      </Col>
    </Row>
    </>
  );
}

export default Experience;