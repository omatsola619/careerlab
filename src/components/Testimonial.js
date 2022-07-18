import React from "react";
import "./Testimonial.css"
import Dp from '../images/oma.jpg'

function Testimonial() {
  return (
    <div>
      <section className="testimonials-clean">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Testimonials </h2>
            <p className="text-center">
              Our customers love us! Read what they have to say below
            </p>
          </div>
          <div className="row people">
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est.
                </p>
              </div>
              <div className="author">
                <img className="rounded-circle" src={Dp} />
                <h5 className="name">Omatsola</h5>
                <p className="title">Parent of a student</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <p className="description">
                  Praesent aliquam in tellus eu gravida. Aliquam varius finibus
                  est, et interdum justo suscipit id.
                </p>
              </div>
              <div className="author">
                <img className="rounded-circle" src={Dp} />
                <h5 className="name">Emmanuel</h5>
                <p className="title">Product Manager</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <p className="description">
                  Aliquam varius finibus est, et interdum justo suscipit.
                  Vulputate quis leo in, vehicula rhoncus lacus. Praesent
                  aliquam in tellus eu.
                </p>
              </div>
              <div className="author">
                <img className="rounded-circle" src={Dp} />
                <h5 className="name">Ade</h5>
                <p className="title">Backend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
