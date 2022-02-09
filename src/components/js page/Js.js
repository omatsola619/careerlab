import React, { useEffect } from "react";
import General from "../general pages/General";

function Js() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const text = [
    "Discover your perfect stream (science, art or commercial) ",
    "Subject combinations",
    "Assessment of your strengths and",
    "Personalized counselling from leading career coaches.",
    "Choose your lifes goal early",
  ];

  return (
    <div>
      <General sect="JSS2 - JSS3" list={text} />
    </div>
  );
}

export default Js;
