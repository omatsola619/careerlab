import React, { useState } from "react";
import Loader from "./Loader";

function Professional() {
  const [loading, setLoading] = useState(true);

  const hideSpinner = () => {
    setLoading(false);
  };
  const src =
    "https://www.careerguide.com/assessment/integration/college-career-assessment.aspx?hide_head=1&utm_source=partner_assessment&utm_campaign=school2campus&utm_medium=school2campus";
  return (
    <>
      <Loader loading={loading} />
      <div style={{ width: "100%", textAlign: "center" }}>
        <iframe
          src={src}
          style={{ width: "100%", height: "600px", border: 0 }}
          onLoad={hideSpinner}
        />
      </div>
    </>
  );
}

export default Professional;
