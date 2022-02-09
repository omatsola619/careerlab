import React from "react";
import "./General.css";
import Science from "./science2.png";
import Business from "./busy2.svg";
import Chart from './chart.svg'
import Phone from './phone.svg'

function General({ sect, list }) {
  return (
    <>
      <div class="header">
        <div className="container">
          <div className="row">
            <div class="col-lg-7 header-text">
              <h4>Science, Commerce or Arts</h4>
              <p>Choose your right field</p>
            </div>
            <div className="col-lg-5">
              <img src={Science} alt="science" className="sc-img" />
            </div>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 body-text">
              <h4>Why go for Career Guidance in {sect} Class?</h4>
              <p>Personalized guidance in class {sect} helps you</p>
              {/*here we looped through all the list items that are being passed as props from each component */}
              {list.map((item) => (
                <ul key={item}>
                  <li>{item}</li>
                </ul>
              ))}
              <button class="btn start">Get Started</button>
            </div>
            <div class="col-lg-5">
              <img src={Business} alt="" className="business-img" />
            </div>
          </div>
        </div>
      </div>

      {/* pricing section */}
      <div class="pricing">
        <div class="pricing8 py-5">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-8 text-center">
                <h3 class="mb-3">Effective pricing plans for your career</h3>
                <h6 class="subtitle font-weight-normal">
                  Pick a plan that best describes your needs
                </h6>
              </div>
            </div>
            <div class="row mt-4">
            <div class="col-md-6 ml-auto pricing-box align-self-center">
                <div class="card mb-4">
                  <div class="card-body p-4 text-center">
                    <h5 class="font-weight-normal">What's included in our Best plan</h5>
                    <sup>₦</sup>
                    <span class="text-dark display-5">5,000</span>
                    <p class="mt-4">
                      <img src={Chart} className='chart' alt="" />
                      1 Psychometric career report
                    </p>
                    <p class="mt-4">
                      <img src={Phone} className="chart" alt="" />
                      1 video career counselling session
                    </p>
                    <div class="list">
                      <p>
                        Grab this fantastic opportunity for a career counselling
                        session with a certified expert career guide who will
                        help you in every step of your career planning
                      </p>
                    </div>
                  </div>
                  <a
                    class="btn btn-danger-gradiant p-3 btn-block border-0 text-white"
                    href="#"
                  >
                    CHOOSE PLAN
                  </a>
                </div>
              </div>

              <div class="col-md-6 ml-auto pricing-box align-self-center">
                <div class="card mb-4">
                  <div class="card-body p-4 text-center">
                    <h5 class="font-weight-normal">What's included in our Career Report</h5>
                    <sup>₦</sup>
                    <span class="text-dark display-5">2,000</span>
                    <p class="mt-4">
                      <img src={Chart} className='chart' alt="" />
                      1 Psychometric career report
                    </p>
                    <div class="list">
                      <p>
                        Grab this fantastic opportunity for a career counselling
                        session with a certified expert career guide who will
                        help you in every step of your career planning
                      </p>
                    </div>
                  </div>
                  <a
                    class="btn btn-danger-gradiant p-3 btn-block border-0 text-white"
                    href="#"
                  >
                    CHOOSE PLAN
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

export default General;
