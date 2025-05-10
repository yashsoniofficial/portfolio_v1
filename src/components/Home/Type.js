import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Robotics Engineer",
          "Robotics System Designer & Developer",
          "Robotics Software Engineer",
          "Freelance Artist",
        ],
        autoStart: true,
        loop: true,
        delay:20,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
