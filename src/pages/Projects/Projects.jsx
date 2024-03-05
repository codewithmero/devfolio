import React from 'react';
import "./index.css";
import { Col, Row } from 'react-bootstrap';
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects(props) {
  return (
    <>
      <Row className="projects" id="projects">
        <h3 className="section-title">Projects</h3>
        <Col className="project-section">
          <h4>yosharts</h4>
          <p>A private online platform to showcase <br />and sell handmade paintings.</p>
          <a href="#"  className="project-link">view in github <FaExternalLinkAlt className="link-ico"/></a>
        </Col>
        <Col className="project-section">
          <h4>invstt</h4>
          <p>An investing platform where the founders <br />meet investors for seed funding.</p>
          <a href="https://www.invstt.com" target="_blank" rel="noreferrer" className="project-link">visit the website <FaExternalLinkAlt className="link-ico"/></a>
        </Col>
        <Col className="project-section">
          <h4>mamypoko</h4>
          <p>An online platform that provides <br />complete babycare solutions.</p>
          <a href="https://www.mamypoko.co.in" target="_blank" rel="noreferrer" className="project-link">visit the website <FaExternalLinkAlt className="link-ico"/></a>
        </Col>

        <Col className="project-section">
          <h4>monacip</h4>
          <p>An australia based daycare platform <br />for little children</p>
          <a href="https://portal.monachildrenservices.com.au/" target="_blank" rel="noreferrer" className="project-link">visit the website <FaExternalLinkAlt className="link-ico"/></a>
        </Col>
      </Row>

      <Row className="projects mb-5">
        <Col className="project-section">
          <h4>formikk</h4>
          <p>A form builder platform to create <br />and customize dynamic forms.</p>
          <a href="#"  className="project-link">view in github <FaExternalLinkAlt className="link-ico"/></a>
        </Col>
        <Col className="project-section">
          <h4>chat-io</h4>
          <p>A whatsapp like chat platform that employs <br />many of its functionalities along with <br />concurrent video sharing.</p>
          <a href="#"  className="project-link">view in github <FaExternalLinkAlt className="link-ico"/></a>
        </Col>
        <Col className="project-section">
          <h4>devfolio</h4>
          <p>A digital portfolio website to that consists of my skills, <br />projects and contact information for the ease of showcase.</p>
          <a href="https://github.com/codewithmero/devfolio" target="_blank" rel="noreferrer" className="project-link">view in github <FaExternalLinkAlt className="link-ico"/></a>
        </Col>
        <Col className="project-section">
          <h4>digilib</h4>
          <p>A digital library to host soft copies of the <br />books {`I'd like to read and share with others. A person can read online as well as download the books.`}</p>
          <a href="https://github.com/codewithmero/devfolio" target="_blank" rel="noreferrer" className="project-link">view in github <FaExternalLinkAlt className="link-ico"/></a>
        </Col>
      </Row>
    </>
  );
}

export default Projects;