import React from "react";
import "./Home.js";

const Home = (props) => {
  return (
    <>
      <div
        className={props.mode === "dark" ? "darkModePic" : "lightModePic"}
        id="pic"
      >
        <div
          className={props.mode === "dark" ? "darkModeText" : "lightModeText"}
          id="text"
        >
          <span>Welcome to Text_Utility_Application</span>
          <p>click Home to access text utilities</p>
        </div>
      </div>
    </>
  );
};

export default Home;
