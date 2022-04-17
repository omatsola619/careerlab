import React, { useState } from "react";
import Science from "../../images/science2.png";
import "../../components/general pages/General.css";
import Modal from "../Modal";

function Undergraduate() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 header-text">
              <h4>Stream selection Career Mapping for Graduates</h4>
            </div>
            <div className="col-lg-5">
              <img src={Science} alt="science" className="sc-img" />
            </div>
          </div>
        </div>
      </div>
      {/*your why section */}
      <section className="highlight-clean">
        <div className="container">
          <div className="intro">
            <h2 className="text-left">What next after college ?</h2>
            <p className="text-left">
              Are you an undergraduate or fresh graduate and confused about your
              next career move? Clear your career doubts, plan your career, and
              live out your full potential. What next after college is an
              important question a lot of people fear to respond. We know that
              finding clarity can be hard, especially finding that career or job
              that aligns with your life’s goal and mission. It doesn’t have to
              be that tough, we can help you get. We’ve got you covered. With
              this course our career counselor will guide you to the best
              decision.
            </p>
          </div>
        </div>
      </section>
      {/*more features section */}
      <section className="features-blue">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">
              Why career Counseling for Graduates ?
            </h2>
          </div>
          <div className="row features">
            <div className="col-sm-6 col-md-4 item">
              <h3 className="name">YOU FEEL UNFULFILLED</h3>
              <p className="description">
                If You Are Asking Yourself "How Do I get There" In Your Career
              </p>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <h3 className="name">YOU WANT TO CHANGE FIELD</h3>
              <p className="description">
                You Want To Change Your Field Because You Are Not Succeeding
              </p>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <h3 className="name">JOB HUNTING WITHOUT DIRECTION</h3>
              <p className="description">
                If You Are Unable To Get Employment That's The Sign That You
                Need A Career Coach
              </p>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <h3 className="name">SHOULD YOU STUDY MORE ? </h3>
              <p className="description">
                You are Confused Whether To Opt For Higher Studies or Start
                Doing Job
              </p>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <h3 className="name">GET HIGHER EDUCATION PLAN</h3>
              <p className="description">
                Clear Vision Regarding Studies or Job
              </p>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <h3 className="name">IMPROVE YOUR LINKEDIN PROFILE AND RESUME</h3>
              <p className="description">Set Goals To Build Career RoadMap</p>
            </div>
          </div>
        </div>
      </section>

      {/*gains section */}
      <div className="gains container text-center">
        <div className="gain-cover">
          <div className="benefitItem">
            <h3 className="b-intro">Get E-books</h3>
            <div className="line"></div>
            <p className="b-exp">
              Fascinating, informative E-book on Science (Maths) career pathway
            </p>
          </div>
          <div className="benefitItem">
            <h3 className="b-intro text-center">Psychometric Test</h3>
            <div className="line"></div>
            <p className="b-exp">
              Informed stream selection & analysis, best AI enabled psychometric
              test for stream choices
            </p>
          </div>
          <div className="benefitItem">
            <h3 className="b-intro text-center">Video Calls</h3>
            <div className="line"></div>
            <p className="b-exp text-center">
              4 personal calls over video or voice to resolve any doubt related
              to your child's future
            </p>
          </div>
        </div>
      </div>

      {/* pricing section */}
      <div className="container">
        <div className="pricing">
          <h3 className="price-header text-center">
            Choose the package that best fits you
          </h3>
          <div className="row">
            <div className="col-md-12 price">
              <div class="price-top">
                <span class="tag text-center">Popular</span>
                <div class="price-info">
                  <h4 class="text-center">What's included</h4>
                  <p class="text-center">Our most popular career plan</p>
                </div>
              </div>
              <div className="price-body">
                <div class="price-amt">₦12,000</div>
                <div class="benefits">
                  <div class="benefit-item">
                    <p>
                      <i class="fas fa-chart-pie"></i>2 psychometric career
                      reports
                    </p>
                  </div>
                  <hr />
                  <div class="benefit-item">
                    <p>
                      <i class="fas fa-graduation-cap"></i>
                      ideal career test
                    </p>
                  </div>
                  <hr />
                  <div class="benefit-item">
                    <p>
                      <i class="fas fa-phone-alt"></i>4 video career counselling
                      session
                    </p>
                  </div>
                </div>
                <button className="started" onClick={() => setVisible(true)}>
                  Get Started
                </button>
              </div>
            </div>
            {/*second price */}
            <div className="col-md-12 price">
              <div class="price-top">
                <div class="price-info">
                  <h4 class="text-center">What's included</h4>
                  <p class="text-center">Our Best Plan</p>
                </div>
              </div>
              <div className="price-body">
                <div class="price-amt">₦6,000</div>
                <div class="benefits">
                  <div class="benefit-item">
                    <p>
                      <i class="fas fa-chart-pie"></i>1 psychometric career
                      reports
                    </p>
                  </div>
                  <hr />
                  <div class="benefit-item">
                    <p>
                      <i class="fas fa-graduation-cap"></i>
                      Ideal career test
                    </p>
                  </div>
                  <hr />
                  <div class="benefit-item">
                    <p>
                      <i class="fas fa-phone-alt"></i>4 video career counselling
                      session
                    </p>
                  </div>
                </div>
                <button className="started" onClick={() => setVisible(true)}>
                  Get Started
                </button>
              </div>
            </div>
            <div className="col-md-12 price">
              <div class="price-top">
                <div class="price-info">
                  <h4 class="text-center">What's Included</h4>
                  <p class="text-center">Career Report</p>
                </div>
              </div>
              <div className="price-body">
                <div class="price-amt">₦3,000</div>
                <div class="benefits">
                  <div class="benefit-item">
                    <p>
                      <i class="fas fa-chart-pie"></i>1 psychometric career
                      reports
                    </p>
                  </div>
                  <hr />
                  <div class="benefit-item">
                    <p>
                      <i class="fas fa-graduation-cap"></i>
                      Ideal career test
                    </p>
                  </div>
                </div>
                <button className="started" onClick={() => setVisible(true)}>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal visible={visible} setVisible={setVisible} />
    </>
  );
}

export default Undergraduate;
