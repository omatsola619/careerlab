import React from "react";
import "./SkillTest.css";

function SkillTest() {
  return (
    <div className="container tst">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="card main-card">
            <img
              src="https://dwq4lez4vhobf.cloudfront.net/ideal-career-test-1.jpg"
              alt=""
              className="card-img-top card-img text-center"
            />
            <div className="card-body check">
              <h5 className="card-title text-center">className 7-9 (JSS)</h5>
              <hr />
              <div className="card-text">180 Questions</div>
              <div className="card-text">60 Minutes</div>
              <div className="card-text">2000</div>
              <a href="/js" className="btn btn-outline-dark program">
                View Program
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillTest;
