import React, { useState } from "react";
import TestView from "./TestView";
import "./Content.css";

function Test() {
  const [view, setView] = useState("psychometric");

  const handlePTest = () => {
    setView("psychometric");
  };

  const handleSkills = () => {
    setView("skills");
  };

  return (
    <div className="test">
      <h4 className="text-center">Pyschometric Assessment</h4>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="buttons ps-bt">
            </div>
            <div className="text-center mt-4 details">
              Career Lab brings to you scientific and meticulously designed
              Psychometric Assessments <br /> to discover your true potential
              and interest ,learning styles and skills to excel in 21st Century
            </div>
          </div>
        </div>
      </div>
      <TestView view={view} />
    </div>
  );
}

export default Test;
