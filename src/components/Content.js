import React from "react";
import "./Content.css";
import Testimonial from "./Testimonial";
import Conf from "../images/conf.jpg";
import Plan from "../images/plan.jpg";
import Services from "./Services";
import Test from "./Test";
import { useNavigate } from "react-router-dom";


function Content() {
  const navigate = useNavigate();

  return (
    <>
      <div className="content">
        <div className="container-fluid top-text">
          <div className="row">
            <div className="col-12 text-center">
              <h4 className="big-header">Discover your perfect career</h4>
              <div className="text-center tag-line">
                Use our world className career assessment tool to find the best
                career fit for you
              </div>
              {/* <h6>Your career journey starts here</h6> */}
              <div className="buttons">
                <button className="btn btn-outline-light" onClick={() => navigate('/js')}>className 7-9 (JSS)</button>
                <button className="btn btn-outline-light" onClick={() => navigate("/ss")}>className 10-12 (SSS)</button>
                <button className="btn btn-outline-light" onClick={() => navigate("/")}>college</button>
                <button className="btn btn-outline-light" onClick={() => navigate("/")}>counsellors</button>
                <button className="btn btn-outline-light" onClick={() => navigate("/")}>professionals</button>
                <button className="btn btn-outline-light" onClick={() => navigate("/")}>
                  21st century skill
                </button>
                <button className="btn btn-outline-light">study abroad</button>
              </div>
            </div>
          </div>
        </div>

        {/* our services section */}
          <Services />

        {/*Pyschometric test section */}
        <Test />

        {/* why choose us section */}
        <div className="reasons">
          <section className="projects-horizontal">
            <div className="container">
              <div className="intro">
                <h2 className="text-center">Why Choose Us ?</h2>
                <p className="text-center">
                  CareerLab help you make informed career choices
                </p> 
              </div>
              <div className="row projects">
                <div className="col-sm-6 item">
                  <div className="row">
                    <div className="col-md-12 col-lg-5">
                      <a href="#">
                        <img className="img-fluid" src={Plan} />
                      </a>
                    </div>
                    <div className="col">
                      <h3 className="name">Plan Your Career</h3>
                      <p className="description">
                        We know it is hard for students and parents when
                        choosing className Stream, and course to study in the
                        university. Hence, we help you plan your career
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 item">
                  <div className="row">
                    <div className="col-md-12 col-lg-5">
                      <a href="#">
                        <img className="img-fluid" src={Conf} />
                      </a>
                    </div>
                    <div className="col">
                      <h3 className="name">Guidance & Counselling</h3>
                      <p className="description">
                        Our world className assessment tools and trained counselors
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
