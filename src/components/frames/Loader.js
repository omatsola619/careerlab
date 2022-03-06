import React from "react";
import Spinner from "react-spinkit";

function Loader({ loading }) {
  return (
    <div>
      {loading ? (
        <Spinner
          className="loading text-center"
          name="three-bounce"
          color="#243665"
          fadeIn="none"
        />
      ) : null}
    </div>
  );
}

export default Loader;
