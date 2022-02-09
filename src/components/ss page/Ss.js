import React, { useEffect } from "react";
import General from "../general pages/General";

function Ss() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const text = [
    "Career Selection & Planning",
    "Discover your perfect career based on your unique strengths & abilities.",
    "Plan your course and college. ",
    "Get expert career counselling on your targeted career options to ",
    "Benefit from the exceptional support of our career counsellors ",
    "Create a step-by-step plan for your career.",
  ];

  return (
    <div>
      <General sect="SS1 - SS3" list={text} />
    </div>
  );
}

export default Ss;
