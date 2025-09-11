import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yash Soni</span>
            {" "}from <span className="purple">Pune, India.</span>
            <br />
            <br />
            I am a <span className="purple">Robotics Engineer</span> with a strong
            foundation in <span className="purple">Mechanical Engineering</span> 
            and a deep passion for building innovative systems that bridge the gap 
            between hardware and software. My journey in robotics started with 
            hands-on projects in <span className="purple">
            robotics competitions, drone design, and autonomous rigs
            </span>, where I learned not just engineering fundamentals but also
            the importance of teamwork, leadership, and perseverance.
            <br />
            <br />
            After my undergraduate studies, I worked as a{" "}
            <span className="purple">Software Engineer</span>, developing scalable
            cloud applications and full-stack solutions. This experience sharpened
            my programming skills and gave me valuable exposure to building reliable, 
            real-world software systems that scale.
            <br />
            <br />
            Currently, I am pursuing my{" "}
            <span className="purple">
              Master’s in Mechanical Engineering (Robotics) at Rochester 
              Institute of Technology
            </span>
            . My research focuses on{" "}
            <span className="purple">
              adaptive vascular resistance control in cardiovascular simulators
            </span>
            , combining control theory, real-time systems, and automation.
            Alongside this, I continue to explore{" "}
            <span className="purple">
              reinforcement learning for robotic arms, trajectory planning,
              SLAM navigation, and assistive robotics
            </span>.
            <br />
            <br />
            My long-term goal is to apply robotics and automation in{" "}
            <span className="purple">
              healthcare, industrial automation, and human–robot interaction
            </span>{" "}
            to create technologies that improve everyday life. I strive not only 
            to grow as an engineer but also to contribute to solutions that make 
            a lasting impact.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
