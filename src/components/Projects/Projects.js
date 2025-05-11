import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1_UR5e_image from "../../Assets/project1_UR5e_image.png";
import project2_omni_image from "../../Assets/project2_omni_image.png";
import project3_robocon_image from "../../Assets/project3_robocon_image.png";
import project4_linefollower_image from "../../Assets/project4_linefollower_image.png";
import project5_drone_image from "../../Assets/project5_drone_image.png";
import project6_universal_image from "../../Assets/project6_universal_image.png";
import project7_2rotor_image from "../../Assets/project7_2rotor_image.png";

function Projects() {
  const [filesData, setFilesData] = useState({
    project1_description: "",
    project2_description: "",
    project3_description: "",
    project4_description: "",
    project5_description: "",
    project6_description: "",
    project7_description: "",
  });

  useEffect(() => {
    const files = [
      "project1_description",
      "project2_description",
      "project3_description",
      "project4_description",
      "project5_description",
      "project6_description",
      "project7_description",
    ];

    Promise.all(
      files.map((name) =>
        fetch(process.env.PUBLIC_URL + `/textSource/${name}.txt`)
          .then((res) => res.text())
          .then((text) => ({ name, text }))
      )
    )
      .then((results) => {
        const combined = {};
        results.forEach(({ name, text }) => {
          combined[name] = text;
        });
        setFilesData(combined);
      })
      .catch((err) => console.error("Error loading text files", err));
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Project <strong className="text-highlight">Portfolio </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={project1_UR5e_image}
              isBlog={false}
              title={
                <strong className="text-highlight">
                  UR5e robotic arm learning using Reinforcement Learning{" "}
                </strong>
              }
              description={
                <div className="home-about-body">
                  {filesData.project1_description
                    .split(".")
                    .map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                </div>
              }
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={project2_omni_image}
              isBlog={false}
              title={
                <strong className="text-highlight">
                  Zone-Following Accessibility Robot for Blind People{" "}
                </strong>
              }
              description={
                <div className="home-about-body">
                  {filesData.project2_description
                    .split(".")
                    .map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                </div>
              }
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={project3_robocon_image}
              isBlog={false}
              title={
                <strong className="text-highlight">ABU Robocon 2021 </strong>
              }
              description={
                <div className="home-about-body">
                  {filesData.project3_description
                    .split(".")
                    .map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                </div>
              }
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={project4_linefollower_image}
              isBlog={false}
              title={
                <strong className="text-highlight">
                  Line Follower Robot Competition{" "}
                </strong>
              }
              description={
                <div className="home-about-body">
                  {filesData.project4_description
                    .split(".")
                    .map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                </div>
              }
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={project5_drone_image}
              isBlog={false}
              title={
                <strong className="text-highlight">Drone Flag Hoisting </strong>
              }
              description={
                <div className="home-about-body">
                  {filesData.project5_description
                    .split(".")
                    .map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                </div>
              }
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={project6_universal_image}
              isBlog={false}
              title={
                <strong className="text-highlight">
                  Universal Coupling Test Rig Automation{" "}
                </strong>
              }
              description={
                <div className="home-about-body">
                  {filesData.project6_description
                    .split(".")
                    .map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                </div>
              }
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={project7_2rotor_image}
              isBlog={false}
              title={
                <strong className="text-highlight">
                  2 Rotor System Test Rig Automation{" "}
                </strong>
              }
              description={
                <div className="home-about-body">
                  {filesData.project7_description
                    .split(".")
                    .map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                </div>
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
