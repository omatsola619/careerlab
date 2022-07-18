import React from "react";
import {Link} from "react-router-dom"
import Jss from "../images/jss.jpg";
import Sss from "../images/sss.jpg";
import Graduate from "../images/graduate.jpg";
import Counsellor from "../images/counsellor.jpg";
import School from "../images/school.jpg"
import "./Content.css"

function Services() {
  return (
    <>
      <div className="services">
        <h4 className="text-center">Our Career Services</h4>
        <div className="service-tagline text-center">
          Personalized, expert services and support for all
        </div>
        <div className="container service-cards">
          <div className="row">
            {/*card 1 */}
            <div className="col-lg-3 col-md-6">
              <div className="card main-card">
                <img src={Jss} alt="" className="card-img-top card-img" />
                <div className="card-body check">
                  <h5 className="card-title text-center">className 7-9 (JSS)</h5>
                  <hr />
                  <div className="card-text">Discover your perfect stream</div>
                  <div className="card-text">Subject combinations</div>
                  <div className="card-text">Assessments of strenght</div>
                  <div className="card-text">Choose your life goals early</div>
                  <Link to="/js" className="btn btn-outline-dark program">
                    View Program
                  </Link>
                </div>
              </div>
            </div>

            {/*card 2 */}
            <div className="col-lg-3 col-md-6">
              <div className="card main-card">
                <img src={Sss} alt="" className="card-img-top card-img" />
                <div className="card-body check">
                  <h5 className="card-title text-center">className 10-12 (SSS)</h5>
                  <hr />
                  <div className="card-text">Career selection and planning</div>
                  <div className="card-text">Plan your course and college</div>
                  <div className="card-text">Get expert counselling</div>
                  <div className="card-text">Create a step by step career plan</div>
                  <Link to="/ss" className="btn btn-outline-dark program">
                    View Program
                  </Link>
                </div>
              </div>
            </div>

            {/*card 3 */}
            <div className="col-lg-3 col-md-6">
              <div className="card main-card">
                <img src={Graduate} alt="" className="card-img-top card-img" />
                <div className="card-body check">
                  <h5 className="card-title text-center">College</h5>
                  <hr />
                  <div className="card-text">Discover your next career move</div>
                  <div className="card-text">Discover your career strenghts</div>
                  <div className="card-text">
                    Match your skill, interest and goals
                  </div>
                  <div className="card-text">Specialized career counselling</div>
                  <Link to="/graduate" className="btn btn-outline-dark program">
                    View Program
                  </Link>
                </div>
              </div>
            </div>

            {/*card 4 */}
            <div className="col-lg-3 col-md-6">
              <div className="card main-card">
                <img src={Counsellor} alt="" className="card-img-top card-img" />
                <div className="card-body check">
                  <h5 className="card-title text-center">Counsellor</h5>
                  <hr />
                  <div className="card-text">Build skills in career counseling</div>
                  <div className="card-text">
                    Access to world className assessment tools
                  </div>
                  <div className="card-text">Earn more</div>
                  <a href="#" className="btn btn-outline-dark program">
                    View Program
                  </a>
                </div>
              </div>
            </div>

            {/*card 5 */}
            <div className="col-lg-3 col-md-6">
              <div className="card main-card">
                <img src={School} alt="" className="card-img-top card-img" />
                <div className="card-body check">
                  <h5 className="card-title text-center">Schools</h5>
                  <hr />
                  <div className="card-text">
                    In-school career counseling program
                  </div>
                  <div className="card-text">Teachers training</div>
                  <div className="card-text">Career assessment for students</div>
                  <a href="#" className="btn btn-outline-dark program">
                    View Program
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
