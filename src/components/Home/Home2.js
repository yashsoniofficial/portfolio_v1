import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import display_picture from "../../Assets/display_picture.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/textSource/home_about_body.txt")
      .then((response) => response.text())
      .then((data) => setText(data))
      .catch((error) => console.error("Error fetching text file:", error));
  }, []);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              {/* I am a Mechanical Engineer and aspiring Robotics Engineer with
              extensive experience in designing, coding, manufacturing, and
              testing robotic systems, software applications, and automation
              solutions.
              <br />
              <br />
              Proficient in the Robot Operating System (ROS), autonomous
              navigation, perception, and hardware-software integration, I am
              driven by a passion for developing innovative robotic solutions
              for dynamic environments.
              <br />
              <br /> Additionally, I bring strong leadership and management
              skills that promote collaboration, enabling teams to achieve their
              objectives while continually enhancing my own expertise.
              <br />
              <br /> */}
              {/* {text} */}
              <div className="home-about-body">
                {text.split(".").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Some of programming languages that I use includes
              <i>
                <b className="purple"> Python, C++, Javascript, Java, Go. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to <b className="purple">Blockchain.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={display_picture} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {/* <li className="social-icons">
                <a
                  href="https://github.com/yashsoniofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/yashsoniofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yash-soni-1838361ba/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yash_thats_it/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
