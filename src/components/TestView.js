import React from "react";
import Psycometric from "./Psycometric";
import SkillTest from "./SkillTest";

function TestView({ view }) {
  if (view === "psychometric") {
    return <Psycometric />;
  } else {
    return <SkillTest />;
  }
}

export default TestView;
