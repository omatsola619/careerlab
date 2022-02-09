import React, { useEffect } from "react";
import General from "../general pages/General";

function Undergraduate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const text = [
    "Discover your next career move.",
    "Discover your perfect career based on your unique strengths & abilities",
    "Accurately matched to your skills, interests, and career goals ",
    "specialized career counselling.",
  ];

  return (
    <div>
      <General sect="Undergraduate" list={text} />
    </div>
  );
}

export default Undergraduate;
