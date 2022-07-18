import React from "react";
import "./SkillTest.css";
import { Link } from "react-router-dom";

function Psycometric() {
  return (
    <div className="container tst">
      <div className="row">
        {/*first card */}
        <div className="col-lg-3 col-md-6">
          <div className="card main-card2">
            <img
              src="https://dwq4lez4vhobf.cloudfront.net/ideal-career-test-1.jpg"
              alt=""
              className="card-img-top card-img text-center"
            />
            <div className="card-body check">
              <h5 className="card-title text-center">Ideal Career Test</h5>
              <hr />
              <div className="card-text">
                <i className="fas fa-book"></i>180 Questions
              </div>
              <div className="card-text">
                <i className="fas fa-clock"></i>60 Minutes
              </div>
              <div className="card-text">
                <span className="naira">₦</span>2000
              </div>
              <Link to="/idealCareer" className="btn btn-outline-dark program">
                View Program
              </Link>
            </div>
          </div>
        </div>

        {/*second card */}
        <div className="col-lg-3 col-md-6">
          <div className="card main-card2">
            <img
              src="https://dwq4lez4vhobf.cloudfront.net/skill-based-career-test-1.jpg"
              alt=""
              className="card-img-top card-img text-center"
            />
            <div className="card-body check">
              <h5 className="card-title text-center">Skill Based Test</h5>
              <hr />
              <div className="card-text">
                <i className="fas fa-book"></i>40 Questions
              </div>
              <div className="card-text">
                <i className="fas fa-clock"></i>30 Minutes
              </div>
              <div className="card-text">
                <span className="naira">₦</span>2000
              </div>
              <Link to="/skill" className="btn btn-outline-dark program">
                View Program
              </Link>
            </div>
          </div>
        </div>

        {/*third card */}
        <div className="col-lg-3 col-md-6">
          <div className="card main-card2">
            <img
              src="https://dwq4lez4vhobf.cloudfront.net/engineering-branch-selector.jpg"
              alt=""
              className="card-img-top card-img text-center"
            />
            <div className="card-body check">
              <h5 className="card-title text-center">Engineering Test</h5>
              <hr />
              <div className="card-text">
                <i className="fas fa-book"></i>100 Questions
              </div>
              <div className="card-text">
                <i className="fas fa-clock"></i>60 Minutes
              </div>
              <div className="card-text">
                <span className="naira">₦</span>2000
              </div>
              <Link to="/engineering" className="btn btn-outline-dark program">
                View Program
              </Link>
            </div>
          </div>
        </div>

        {/*fourth card */}
        <div className="col-lg-3 col-md-6">
          <div className="card main-card2">
            <img
              src="https://www.careerguide.com/Images-MCG/career-counselling-BA-student.png"
              alt=""
              className="card-img-top card-img text-center"
            />
            <div className="card-body check">
              <h5 className="card-title text-center">humanities Test</h5>
              <hr />
              <div className="card-text">
                <i className="fas fa-book"></i>76 Questions
              </div>
              <div className="card-text">
                <i className="fas fa-clock"></i>60 Minutes
              </div>
              <div className="card-text">
                <span className="naira">₦</span>2000
              </div>
              <Link to="/humanities" className="btn btn-outline-dark program">
                View Program
              </Link>
            </div>
          </div>
        </div>

        {/*fifth card */}
        <div className="col-lg-3 col-md-6">
          <div className="card main-card2">
            <img
              src="https://www.careerguide.com/Images-MCG/career-counselling-Bcom-student.png"
              alt=""
              className="card-img-top card-img text-center"
            />
            <div className="card-body check">
              <h5 className="card-title text-center">Commerce Test</h5>
              <hr />
              <div className="card-text">
                <i className="fas fa-book"></i>72 Questions
              </div>
              <div className="card-text">
                <i className="fas fa-clock"></i>60 Minutes
              </div>
              <div className="card-text">
                <span className="naira">₦</span>2000
              </div>
              <Link to="/commerce" className="btn btn-outline-dark program">
                View Program
              </Link>
            </div>
          </div>
        </div>

        {/*sixth card */}
        <div className="col-lg-3 col-md-6">
          <div className="card main-card2">
            <img
              src="https://www.careerguide.com/Images-MCG/career-counselling-BBA-student.png"
              alt=""
              className="card-img-top card-img text-center"
            />
            <div className="card-body check">
              <h5 className="card-title text-center">Professional Skill Test</h5>
              <hr />
              <div className="card-text">
                <i className="fas fa-book"></i>80 Questions
              </div>
              <div className="card-text">
                <i className="fas fa-clock"></i>60 Minutes
              </div>
              <div className="card-text">
                <span className="naira">₦</span>2000
              </div>
              <Link to="/professional" className="btn btn-outline-dark program">
                View Program
              </Link>
            </div>
          </div>
        </div>

        {/*seventh card */}
        <div className="col-lg-3 col-md-6">
          <div className="card main-card2">
            <img
              src="https://www.careerguide.com/Images-MCG/educators-professional-skills-index.png"
              alt=""
              className="card-img-top card-img text-center"
            />
            <div className="card-body check">
              <h5 className="card-title text-center">Teachers Test</h5>
              <hr />
              <div className="card-text">
                <i className="fas fa-book"></i>63 Questions
              </div>
              <div className="card-text">
                <i className="fas fa-clock"></i>45 Minutes
              </div>
              <div className="card-text">
                <span className="naira">₦</span>2000
              </div>
              <Link to="/teachers" className="btn btn-outline-dark program">
                View Program
              </Link>
            </div>
          </div>
        </div>

        {/*eight card */}
        <div className="col-lg-3 col-md-6">
          <div className="card main-card2">
            <img
              src="https://dwq4lez4vhobf.cloudfront.net/stream-selector.jpg"
              alt=""
              className="card-img-top card-img text-center"
            />
            <div className="card-body check">
              <h5 className="card-title text-center">Stream Test</h5>
              <hr />
              <div className="card-text">
                <i className="fas fa-book"></i>76 Questions
              </div>
              <div className="card-text">
                <i className="fas fa-clock"></i>40 Minutes
              </div>
              <div className="card-text">
                <span className="naira">₦</span>2000
              </div>
              <Link to="/stream" className="btn btn-outline-dark program">
                View Program
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Psycometric;
