import React from "react";
import "./SkillTest.css";

function SkillTest() {
  return (
    <div className="container tst">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="card main-card">
            <img
              src="https://dwq4lez4vhobf.cloudfront.net/ideal-career-test-1.jpg"
              alt=""
              className="card-img-top card-img text-center"
            />
            <div class="card-body check">
              <h5 class="card-title text-center">Class 7-9 (JSS)</h5>
              <hr />
              <div class="card-text">180 Questions</div>
              <div class="card-text">60 Minutes</div>
              <div class="card-text">2000</div>
              <a href="/js" class="btn btn-outline-dark program">
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
