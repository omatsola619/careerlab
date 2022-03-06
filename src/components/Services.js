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
      <div class="services">
        <h4 className="text-center">Our Career Services</h4>
        <div className="service-tagline text-center">
          Personalized, expert services and support for all
        </div>
        <div class="container service-cards">
          <div class="row">
            {/*card 1 */}
            <div class="col-lg-3 col-md-6">
              <div class="card main-card">
                <img src={Jss} alt="" class="card-img-top card-img" />
                <div class="card-body check">
                  <h5 class="card-title text-center">Class 7-9 (JSS)</h5>
                  <hr />
                  <div class="card-text">Discover your perfect stream</div>
                  <div class="card-text">Subject combinations</div>
                  <div class="card-text">Assessments of strenght</div>
                  <div class="card-text">Choose your life goals early</div>
                  <Link to="/js" class="btn btn-outline-dark program">
                    View Program
                  </Link>
                </div>
              </div>
            </div>

            {/*card 2 */}
            <div class="col-lg-3 col-md-6">
              <div class="card main-card">
                <img src={Sss} alt="" class="card-img-top card-img" />
                <div class="card-body check">
                  <h5 class="card-title text-center">Class 10-12 (SSS)</h5>
                  <hr />
                  <div class="card-text">Career selection and planning</div>
                  <div class="card-text">Plan your course and college</div>
                  <div class="card-text">Get expert counselling</div>
                  <div class="card-text">Create a step by step career plan</div>
                  <Link to="/ss" class="btn btn-outline-dark program">
                    View Program
                  </Link>
                </div>
              </div>
            </div>

            {/*card 3 */}
            <div class="col-lg-3 col-md-6">
              <div class="card main-card">
                <img src={Graduate} alt="" class="card-img-top card-img" />
                <div class="card-body check">
                  <h5 class="card-title text-center">College</h5>
                  <hr />
                  <div class="card-text">Discover your next career move</div>
                  <div class="card-text">Discover your career strenghts</div>
                  <div class="card-text">
                    Match your skill, interest and goals
                  </div>
                  <div class="card-text">Specialized career counselling</div>
                  <Link to="/graduate" class="btn btn-outline-dark program">
                    View Program
                  </Link>
                </div>
              </div>
            </div>

            {/*card 4 */}
            <div class="col-lg-3 col-md-6">
              <div class="card main-card">
                <img src={Counsellor} alt="" class="card-img-top card-img" />
                <div class="card-body check">
                  <h5 class="card-title text-center">Counsellor</h5>
                  <hr />
                  <div class="card-text">Build skills in career counseling</div>
                  <div class="card-text">
                    Access to world class assessment tools
                  </div>
                  <div class="card-text">Earn more</div>
                  <a href="#" class="btn btn-outline-dark program">
                    View Program
                  </a>
                </div>
              </div>
            </div>

            {/*card 5 */}
            <div class="col-lg-3 col-md-6">
              <div class="card main-card">
                <img src={School} alt="" class="card-img-top card-img" />
                <div class="card-body check">
                  <h5 class="card-title text-center">Schools</h5>
                  <hr />
                  <div class="card-text">
                    In-school career counseling program
                  </div>
                  <div class="card-text">Teachers training</div>
                  <div class="card-text">Career assessment for students</div>
                  <a href="#" class="btn btn-outline-dark program">
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
