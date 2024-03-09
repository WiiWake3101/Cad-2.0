import React from "react";
import "./main.css";

const Content = () => {
  return (
    <div className="content-container">
      <div className="content mx-auto my-4 p-4">
        <h2 className="typing_animation" id="headline">
          Welcome to LegalAssist
        </h2>
        <p className="typing_animation_2 text-sm sm:text-base" id="paragraph">
          Launching your startup journey just got easier.
        </p>
      </div>
    </div>
  );
};

export default Content;
