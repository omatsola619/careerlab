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
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="buttons ps-bt">
              <button
                className={
                  view === "psychometric"
                    ? "btn btn-dark"
                    : "btn btn-outline-dark"
                }
                onClick={handlePTest}
              >
                Pyschometric career test
              </button>
              <button
                className={
                  view === "skills" ? "btn btn-dark" : "btn btn-outline-dark"
                }
                onClick={handleSkills}
              >
                21st century skills and learning test
              </button>
            </div>
            <div className="text-center mt-4 details">
              CareerGuide brings to you scientific and meticulously designed
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
