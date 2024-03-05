import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsServer, BsFillBootstrapFill } from "react-icons/bs";
import { GrNode, GrReactjs, GrDocker } from "react-icons/gr";
import { FaServer, FaExternalLinkAlt, FaGitAlt  } from "react-icons/fa";
import { SiMongodb, SiSocketdotio, SiMaterialdesign, SiGoogleanalytics } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";

import "./index.css";
import "./logocolor.css";
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';

function Main(props) {
  return (
    <>
      <Row className="hero-section">
        <Col className="text-content">
          <h2>Hey! I am Rudra</h2>
          <p>A freelance <strong>fullstack developer</strong> based in India.</p>
          <p>Turning <strong>startup ideas</strong> into <strong>reality.</strong></p>
        </Col>
      </Row>

      {/* EXPERTISE SECTION */}
      <Row className="mb-5 expertise">
        <h3 className="section-title">Expertise</h3>
        <Col className="expertise-column">
          <HiOutlineDesktopComputer className="icon" />
          <p>frontend development</p>
          <div>
            <p>Proficient with frontend technologies to create flawless mockups and working prototypes.</p>
            <a href="#"  className="project-link">frontend projects <FaExternalLinkAlt className="link-ico"/></a>
          </div>
        </Col>
        <Col className="expertise-column">
          <FaServer className="icon" />
          <p>backend development</p>
          <div>
            <p>Proficient with backend technologies to create quality APIs and tackle optimization issues.</p>
            <a href="#" className="project-link">backend projects <FaExternalLinkAlt className="link-ico" /></a>
          </div>
        </Col>
        <Col className="expertise-column">
          <SiMaterialdesign className="icon" />
          <p>web design</p>
          <div>
            <p>Can create quality mockups using libraries like CSS & Bootstrap, to tackle the frontend design.</p>
          </div>
        </Col>
        <Col className="expertise-column">
          <BsServer className="icon" />
          <p>databases</p>
          <div>
            <p>{`I've delved into databases like PostgreSQL & MongoDB in multiple projects to be able to tackle issues inside tables & data.`}</p>
          </div>
        </Col>
      </Row>

      {/* TOOLS SECTION */}
      <Row className="tools">
        <h2 className="section-title">Tools</h2>
        <Col className="tools-column">
          <GrReactjs className="icon react" />
          <p>react.js</p>
        </Col>
        <Col className="tools-column">
          <GrNode className="icon node" />
          <p>node.js</p>
        </Col>
        <Col className="tools-column">
          <SiMongodb className="icon mongodb" />
          <p>mongodb</p>
        </Col>
        <Col className="tools-column">
          <BiLogoPostgresql className="icon postgresql" />
          <p>postgresql</p>
        </Col>
      </Row>

      <Row className="tools">
        <Col className="tools-column">
          <GrDocker className="icon docker" />
          <p>docker</p>
        </Col>
        <Col className="tools-column">
          <SiSocketdotio className="icon socket-io" />
          <p>socket.io</p>
        </Col>
        <Col className="tools-column">
          <TbBrandNextjs className="icon next-js" />
          <p>next.js</p>
        </Col>
        <Col className="tools-column">
          <BsFillBootstrapFill className="icon bootstrap" />
          <p>bootstrap</p>
        </Col>
      </Row>
      
      <Row className="mb-5 tools">
        <Col className="tools-column">
          <SiGoogleanalytics className="icon firebase-analytics" />
          <p>firebase analytics</p>
        </Col>
        <Col className="tools-column">
          <IoLogoCss3 className="icon css" />
          <p>css</p>
        </Col>
        <Col className="tools-column">
          <FaGitAlt className="icon git" />
          <p>git</p>
        </Col>
        <Col>
          {/* <TbBrandNextjs className="icon next-js" />
          <p>next.js</p> */}
        </Col>
      </Row>

      {/* EXPERIENCE SECTION */}
      <Experience />

      {/* PROJECTS SECTION */}
      <Projects />
    </>
  );
}

export default Main;