import React from "react";
import "./Content.css";
import Testimonial from "./Testimonial";
import Conf from "../images/conf.jpg";
import Plan from "../images/plan.jpg";
import Services from "./Services";
import Test from "./Test";


function Content() {
  return (
    <>
      <div className="content">
        <div class="container-fluid top-text">
          <div class="row">
            <div class="col-12 text-center">
              <h4 className="big-header">Discover your perfect career</h4>
              <div class="text-center tag-line">
                Use our world class career assessment tool to find the best
                career fit for you
              </div>
              {/* <h6>Your career journey starts here</h6> */}
              <div class="buttons">
                <button class="btn btn-outline-light">class 7-9 (JSS)</button>
                <button class="btn btn-outline-light">class 10-12 (SSS)</button>
                <button class="btn btn-outline-light">college</button>
                <button class="btn btn-outline-light">counsellors</button>
                <button class="btn btn-outline-light">professionals</button>
                <button class="btn btn-outline-light">
                  21st century skill
                </button>
                <button class="btn btn-outline-light">study abroad</button>
              </div>
            </div>
          </div>
        </div>

        {/* our services section */}
          <Services />

        {/*Pyschometric test section */}
        <Test />

        {/* why choose us section */}
        <div class="reasons">
          <section class="projects-horizontal">
            <div class="container">
              <div class="intro">
                <h2 class="text-center">Why Choose Us ?</h2>
                <p class="text-center">
                  CareerLab help you make informed career choices
                </p> 
              </div>
              <div class="row projects">
                <div class="col-sm-6 item">
                  <div class="row">
                    <div class="col-md-12 col-lg-5">
                      <a href="#">
                        <img class="img-fluid" src={Plan} />
                      </a>
                    </div>
                    <div class="col">
                      <h3 class="name">Plan Your Career</h3>
                      <p class="description">
                        We know it is hard for students and parents when
                        choosing Class Stream, and course to study in the
                        university. Hence, we help you plan your career
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 item">
                  <div class="row">
                    <div class="col-md-12 col-lg-5">
                      <a href="#">
                        <img class="img-fluid" src={Conf} />
                      </a>
                    </div>
                    <div class="col">
                      <h3 class="name">Guidance & Counselling</h3>
                      <p class="description">
                        Our world class assessment tools and trained counselors
                        will guide you in your career journey. And help you
                        focus on your dream career
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Testimonial />
    </>
  );
}

export default Content;
