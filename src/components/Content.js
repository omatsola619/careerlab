import React from "react";
import { Link } from "react-router-dom";
import "./Content.css";
import Edu from "../images/topper.png";
import Testimonial from "./Testimonial";
import Conf from "../images/conf.jpg";
import Plan from "../images/plan.jpg";

function Content() {
  return (
    <>
      <div className="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 intro-text">
              <h4 className="dis">Discover your perfect career</h4>
              <h4 className="four">Your career journey starts here!</h4>
              <div class="list">
                • Right Stream Selection after JSS3
                <br />
                • Right career selection for university
                <br />
                • Engineering Branch Selector
                <br />
                • Commerce branch selector
                <br />• Arts branch selector
              </div>
              <button class="btn get-started">Get Started</button>
            </div>
            <div class="col-lg-5 intro-img two">
              <img src={Edu} alt="top-img" />
            </div>
          </div>
        </div>
        <div class="p-test">
          <div className="text-center">PSYCHOMETRIC TEST COMING SOON</div>
        </div>

        {/*timeline section*/}
        <div class="page">
          <div class="timeline-intro">
            <h4 className="intro-h">How we will help you in your</h4>
            <div className="intro-d">Career Journey</div>
          </div>
          <div class="timeline">
            <div class="timeline__group">
              <span class="timeline__year time" aria-hidden="true">
                JSS2 - JSS3
              </span>
              <div class="timeline__cards">
                <div class="timeline__card card">
                  <header class="card__header">
                    <time class="time" datetime="2008-02-02">
                      <span class="time__month">
                        Stream & Subject Selection
                      </span>
                    </time>
                  </header>
                  <div class="card__content">
                    <p>
                      • Discover your perfect stream (science, art or
                      commercial)
                      <br />
                      • Subject combinations <br />
                      • Assessment of your strengths and <br />• Personalized
                      counselling from leading career coaches. <br />• Choose
                      your life's goal early
                    </p>
                  </div>
                    <Link to="/js" class="btn k-m">Know more</Link>
                </div>
              </div>
            </div>

            <div class="timeline__group">
              <span class="timeline__year time" aria-hidden="true">
                SS1 - SS3
              </span>
              <div class="timeline__cards">
                <div class="timeline__card card">
                  <header class="card__header">
                    <time class="time" datetime="2008-07-14">
                      <span class="time__month">
                        Career Selection & Planning
                      </span>
                    </time>
                  </header>
                  <div class="card__content">
                    <p>
                      • Career Selection & Planning <br />
                      • Discover your perfect career based on your unique
                      strengths & abilities. <br />
                      • Plan your course and college. <br />
                      • Get expert career counselling on your targeted career
                      options to <br />
                      • Benefit from the exceptional support of our career
                      counsellors <br />• Create a step-by-step plan for your
                      career.
                    </p>
                  </div>
                  <Link to="/ss">
                    <button class="btn k-m">Know more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div class="timeline__group">
              <span class="timeline__year time" aria-hidden="true">
                GRADUATION
              </span>
              <div class="timeline__cards">
                <div class="timeline__card card">
                  <header class="card__header">
                    <time class="time" datetime="2008-07-14">
                      <span class="time__month">
                        Career Selection & Development
                      </span>
                    </time>
                  </header>
                  <div class="card__content">
                    <p>
                      • Discover your next career move <br />
                      • Discover your perfect career based on your unique
                      strengths & abilities <br />
                      • Accurately matched to your skills, interests, and career
                      goals <br />• specialized career counselling.
                    </p>
                  </div>
                  <Link to="/graduate">
                    <button class="btn k-m">Know more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

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
